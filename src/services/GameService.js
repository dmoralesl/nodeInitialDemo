import sequelize from 'sequelize';

import Service from './Service.js';
import DiceService from './DiceService.js';
import Dice from '../models/Dice.js';

class GameService extends Service {
  constructor(model) {
    super(model);
    this.diceService = new DiceService(Dice);
    this.getMean = this.getMean.bind(this);

  }

  async insert(data) {
    // Generating random dice values and result
    const diceValues = this.diceService.generateDiceValues(2);
    const result = diceValues.reduce((a, b) => a + b, 0);
    const isWin = result === 7;

    // Updating calculated values to data object
    data = { ...data, result, isWin };

    try {
      let item = await this.model.create(data);
      let dices = await Promise.all(
        diceValues.map(async(diceValue) => await this.diceService.insert({
          result: diceValue,
          gameId: item.id
        }))
      )
      
      item.dataValues = {...item.dataValues, dices};
      if (item)
        return {
          error: false,
          item
        };
    } catch (error) {
      console.log("error", error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors
      };
    }
  }
  
  async getMean() {

    try {
      const data = await this.model.findOne({
        attributes: [[sequelize.literal('SUM(isWin)/COUNT(isWin)*100'), 'meanWinsPercentage']]
      });


      return {
        error: false,
        statusCode: 200,
        data
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }


};

export default GameService;
