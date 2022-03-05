import express from 'express';

import GameController from './../src/controllers/GameController.js';
import PlayerController from './../src/controllers/PlayerController.js';


const router = express.Router();


// Player routes
router.get('/players', PlayerController.getAll);
router.post('/players', PlayerController.insert)
router.put('/players/:id', PlayerController.update);

// Game routes
router.get('/players/:id/games', GameController.getAll);
router.post('/players/:id/games', GameController.insert)
router.delete('/players/:id/games', GameController.delete);

// Ranking routes
router.get('/players/ranking', GameController.getMean);
router.get('/players/winner', PlayerController.getWinner);
router.get('/players/loser', PlayerController.getLoser);


export default router;