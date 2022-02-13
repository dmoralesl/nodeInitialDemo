import GameController from './../src/controllers/GameController.js';
import PlayerController from './../src/controllers/PlayerController.js';

export default (server) => {

    // Player routes
    server.get('/api/players', PlayerController.getAll);
    server.post(`/api/players`, PlayerController.insert)
    server.put(`/api/players/:id`, PlayerController.update);

    // Game routes
    server.get('/api/players/:id/games', GameController.getAll);
    server.post(`/api/players/:id/games`, GameController.insert)
    server.delete(`/api/players/:id/games`, GameController.delete);

    // Ranking routes
    server.get('/api/players/ranking', GameController.getMean);
    server.get('/api/players/winner', GameController.getWinner);
    server.get('/api/players/loser', GameController.getLoser);

}