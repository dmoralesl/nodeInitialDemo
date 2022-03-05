import Sequelize from "sequelize";


const user = process.env.MYSQL_USER || "root";
const password = process.env.MYSQL_PASSWORD || "root";
// connect to db

export default new Sequelize('dice_game', user, password, { dialect: 'mysql' });

