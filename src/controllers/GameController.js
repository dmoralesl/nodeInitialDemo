import Controller from  './Controller.js';
import GameService from  "./../services/GameService.js";
import Game from  "./../models/Game.js";
import Dice from "./../models/Dice.js";

const gameService = new GameService(
  Game
);

class GameController extends Controller {

  constructor(service) {
    super(service);
    this.getMean = this.getMean.bind(this);
  }

  async getAll(req, res) {
    const { id } = req.params;
    return res.status(200).send(await this.service.getByAttr('Playerid', id));
  }

  // Overriding method to get the playerId from url path
  async insert(req, res) {
    const { id } = req.params;
    const response = await this.service.insert({PlayerId: id, ...req.body});
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const response = await this.service.deleteByAttr('Playerid', id);
    
    return res.status(response.statusCode).send(response);
  }


  async getMean(req, res) {
    const resposne = await this.service.getMean();
    return res.status(200).send(resposne);
  }


}

export default new GameController(gameService);