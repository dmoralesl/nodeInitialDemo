import Controller from  './Controller.js';
import GameService from  "./../services/GameService.js";
import Game from  "./../models/Game.js"
;
const gameService = new GameService(
  Game
);

class GameController extends Controller {

  constructor(service) {
    super(service);
  }

  async getMean(req, res) {
    return res.status(200).send({dummy: 'dummy'});
  }


  async getWinner(req, res) {
    return res.status(200).send({dummy: 'dummy'});
  }

  async getLoser(req, res) {
    return res.status(200).send({dummy: 'dummy'});
  }
}

export default new GameController(gameService);