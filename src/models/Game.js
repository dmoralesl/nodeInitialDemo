import database from "../../config/database.js";

const Schema = database.Schema;

const Game = database.model('Game', new Schema({
    playerId: {type: Schema.Types.ObjectId, ref: 'Player'},
    result: Number,
    dices: Array,
    isWin: Boolean,
    createdAt: Date
}));

export default Game;
