import { Model, DataTypes } from "sequelize";

import database from "../../config/database.js";


class Player extends Model {};

Player.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
    
}, { sequelize: database });

Player.sync();

export default Player;