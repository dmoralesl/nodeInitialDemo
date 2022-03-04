import { Model, DataTypes } from "sequelize";

import Game from "./Game.js";
import database from "../../config/database.js";

class Dice extends Model { };

Dice.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    gameId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "games",
            key: "id"
        },
        onDelete: 'CASCADE'
    },
    result: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 6
        }
    }
}, { sequelize: database });

Game.hasMany(Dice);

export default Dice;