// Dependencies
require('dotenv').config();

// App Indexing
const { app, config } = require(`./src/app`);

// App Server Listener
app.listen(config.port, () => {
  console.log(`Phone Catalog App is listening on port ${config.port}!`);
});
