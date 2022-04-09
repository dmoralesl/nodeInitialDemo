import { Model, DataTypes } from "sequelize";

import Player from "./Player.js";
import database from "../../config/database.js";

class Game extends Model { };

Game.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    PlayerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "players",
            key: "id"
        },
        onDelete: 'CASCADE'
    },
    result: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 2,
            max: 12
        }
    },
    isWin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, { sequelize: database });

Player.hasMany(Game);



export default Game;