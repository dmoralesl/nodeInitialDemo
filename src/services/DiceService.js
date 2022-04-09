import Service from './Service.js';

class DiceService extends Service {
  constructor(model) {
    super(model);
  }

  generateDiceValues(numDices) {
    console.log('Num dices', numDices);
    let diceValues = [];
    for (let i = 0; i < numDices; i++) {
      diceValues.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceValues;
  }
};

export default DiceService;
