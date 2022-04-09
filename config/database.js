import Sequelize from "sequelize";
import mysql from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config();

const user = process.env.MYSQL_USER || "root";
const password = process.env.MYSQL_PASSWORD || "root";
const host = 'localhost';
const database = 'dice_game';
const port = 3306;

// connect to db

export default await initialize();



async function initialize() {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    return sequelize;
}