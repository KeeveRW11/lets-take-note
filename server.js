const express = require('express');
const app = express();


//function for port
const PORT = process.env.PORT || 3004;

app.use(express.static('./Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Use apiRoutes
//const apiRoute = require('./routes/apiRoutes/apiRoutes');
//const htmlRoute = require('./routes/htmlRoutes/htmlRoutes');

require('./routes/apiRoutes/apiRoutes')(app);
require('./routes/htmlRoutes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);

  
});

