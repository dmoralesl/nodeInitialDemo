import database from "../../config/database.js";

const Schema = database.Schema;

const Player = database.model('Player', new Schema({
    name: String,
    createdAt: Date
}));

export default Player;
