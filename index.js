import dotenv from 'dotenv';
dotenv.config()

import database from './config/database.js';
import server from './config/server.js';

database.sync();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

