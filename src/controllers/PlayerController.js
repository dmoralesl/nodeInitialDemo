import Controller from  './Controller.js';
import PlayerService from  "./../services/PlayerService.js";
import Player from  "./../models/Player.js";

const playerService = new PlayerService(
  Player
);

class PlayerController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new PlayerController(playerService);