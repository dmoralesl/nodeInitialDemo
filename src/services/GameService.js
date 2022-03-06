
import Service from './Service.js';

class GameService extends Service {
  constructor(model) {
    super(model);
    this.getMean = this.getMean.bind(this);

  }


  async getByAttr (field, value) {
    try {
      const games = await this.model.find({
          [field]: value
      })
      return {
        error: false,
        statusCode: 200,
        data: {
          winPercentage: games.filter(game => game.isWin).length / games.length * 100,
          games
        },
        total: games.length
      }
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      }
    }
  }

  async insert(data) {
    // Generating random dice values and result
    const dices = [];
    for (let i = 0; i < 2; i++) {
      dices.push(Math.floor(Math.random() * 6) + 1);
    }
    
    const result = dices.reduce((a, b) => a + b, 0);
    const isWin = result === 7;

    // Updating calculated values to data object 
    data = { ...data, result, isWin, dices };

    try {
      const item = await this.model.create(data);

      
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
