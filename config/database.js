import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.MYSQL_USER || "root";
const password = process.env.MYSQL_PASSWORD || "root";

// connect to db

export default new Sequelize(' ', user, password, { dialect: 'mysql' });

