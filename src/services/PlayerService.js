import Service from './Service.js'

class PlayerService extends Service {
  constructor (model) {
    super(model)
    this.getWinner = this.getWinner.bind(this)
    this.getLoser = this.getLoser.bind(this)
  }

  async getAll () {
    try {
      const data = await this.model.aggregate([
        {
          $lookup: {
            from: 'games',
            localField: '_id',
            foreignField: 'playerId',
            as: 'games'
          }
        },
        {
          $addFields: {
            winsPercentage: {
              $function: {
                body: function (wins) {
                  return wins.filter(win => win).length / wins.length * 100;
                },
                args: ['$games.isWin'],
                lang: 'js'
              }
            }
          }
        },
        {
          $project: {
            games: false,
          }
        }
      ])

      // const data = await this.model.find();

      return {
        error: false,
        statusCode: 200,
        data,
        total: data.length
      }
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      }
    }
  }

  async getWinner () {
    try {
      const data = await this.model.aggregate([
        {
          $lookup: {
            from: 'games',
            localField: '_id',
            foreignField: 'playerId',
            as: 'games'
          }
        },
        {
          $addFields: {
            winsPercentage: {
              $function: {
                body: function (wins) {
                  return wins.filter(win => win).length / wins.length * 100;
                },
                args: ['$games.isWin'],
                lang: 'js'
              }
            }
          }
        },
        {
          $project: {
            games: false,
          }
        },
        { $sort: { winsPercentage: -1 } },
        { $limit: 1 } 
      ])

      return {
        error: false,
        statusCode: 200,
        data
      }
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      }
    }
  }

  async getLoser () {
    try {
      const data = await this.model.aggregate([
        {
          $lookup: {
            from: 'games',
            localField: '_id',
            foreignField: 'playerId',
            as: 'games'
          }
        },
        // Since we are using games field to calculate percentage, we need to filter responses to avoid get 
        // null values derived from games calculation in bottom ranking
        { $match: { games: { $exists: true , $not: {$size: 0}} } },
        {
          $addFields: {
            winsPercentage: {
              $function: {
                body: function (wins) {
                  return wins.filter(win => win).length / wins.length * 100;
                },
                args: ['$games.isWin'],
                lang: 'js'
              }
            }
          }
        },
        {
          $project: {
            games: false,

          }
        },
        { $sort: { winsPercentage: 1 } },
        { $limit: 1 } 
      ])

      return {
        error: false,
        statusCode: 200,
        data
      }
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      }
    }
  }
}

export default PlayerService
