const express = require('express');

const PORT = process.env.PORT || 3004;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Use apiRoutes
app.get('/api.db', (req, res) => {
    res.json(notes);
})


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

