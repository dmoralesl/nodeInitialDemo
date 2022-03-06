import dotenv from 'dotenv';
dotenv.config()

import server from './config/server.js';

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

