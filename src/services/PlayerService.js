import sequelize from 'sequelize'

import Service from './Service.js'
import Game from '../models/Game.js'


class PlayerService extends Service {
  constructor (model) {
    super(model)
  }

  async getAll () {
    console.log(typeof Game)
    try {
      let { count, rows } = await this.model.findAndCountAll({
        include: [
          {
            model: Game,
            attributes: [
              [sequelize.literal('SUM(Games.isWin)/COUNT(Games.isWin)*100'), 'winsPercentage']
            ]
          }
        ]
      })

      return {
        error: false,
        statusCode: 200,
        data: rows,
        total: count
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
