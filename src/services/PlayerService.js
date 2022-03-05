import sequelize from 'sequelize'

import Service from './Service.js'
import Game from '../models/Game.js'


class PlayerService extends Service {
  constructor (model) {
    super(model);
    this.getWinner = this.getWinner.bind(this);
    this.getLoser = this.getLoser.bind(this);
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

  async getWinner() {

    try {

      const data = await this.model.findOne({

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
        group: ['id'],
        order: sequelize.literal('winsPercentage DESC'),
        limit: 1,
        subQuery: false
      });

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

  async getLoser() {

    try {

      const data = await this.model.findOne({

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
        group: ['id'],
        order: sequelize.literal('winsPercentage ASC'),
        limit: 1,
        subQuery: false
      });

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
