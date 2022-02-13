import { Model, DataTypes } from "sequelize";

import Player from "./Player.js";
import database from "../../config/database.js";

class Game extends Model {};

Game.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    result: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 6
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, { sequelize: database });

Game.sync();

// Defining associations
Player.hasMany(Game);



export default Game;