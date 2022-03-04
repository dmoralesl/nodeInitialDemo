import Service from './Service.js';
import DiceService from './DiceService.js';
import Dice from '../models/Dice.js';

class GameService extends Service {
  constructor(model) {
    super(model);
    this.diceService = new DiceService(Dice);
  }

  async insert(data) {
    // Generating random dice values and result
    const diceValues = this.diceService.generateDiceValues(2);
    console.log(diceValues);
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


};

export default GameService;
