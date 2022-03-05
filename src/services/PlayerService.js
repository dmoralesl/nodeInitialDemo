import sequelize from 'sequelize'

import Service from './Service.js'
import Game from '../models/Game.js'


class PlayerService extends Service {
  constructor (model) {
    super(model)
  }

  async getAll () {

    try {

      const data = await this.model.findAll({

        attributes: {
          include: [[sequelize.literal('SUM(Games.isWin)/COUNT(Games.isWin)*100'), 'winsPercentage']]
        },
        include: [
          {
            model: Game,
            required: false,
            attributes: []
          }
        ],
        group: ['id']
      });
      const total = await this.model.count();

      return {
        error: false,
        statusCode: 200,
        data,
        total
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
