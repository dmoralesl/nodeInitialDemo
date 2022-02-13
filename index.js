import database from './config/database';
import server from './config/server';

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
