import Controller from  './Controller.js';
import PlayerService from  "./../services/PlayerService.js";
import Player from  "./../models/Player.js";

const playerService = new PlayerService(
  Player
);

class PlayerController extends Controller {

  constructor(service) {
    super(service);
    this.getWinner = this.getWinner.bind(this);
    this.getLoser = this.getLoser.bind(this);
  }

  async getWinner(req, res) {
    const resposne = await this.service.getWinner();
    return res.status(200).send(resposne);
  }

  async getLoser(req, res) {
    const resposne = await this.service.getLoser();
    return res.status(200).send(resposne);
  }
}

export default new PlayerController(playerService);