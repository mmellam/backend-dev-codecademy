const express = require('express');
//const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({
    quote: randomQuote
  });
});

app.get('/api/quotes', (req, res, next) => {
  const person = req.query.person;
  if (person) {
    const filteredArr = quotes.filter(el => el.person === person);
    res.send({
      quotes: filteredArr
    });
  } else {
    res.send({
      quotes: quotes
    });
  }
});

app.post('/api/quotes', (req, res, next) => {
  if (req.query.quote && req.query.person) {
    quotes.push(req.query);
    res.send({
      quote: req.query
    })
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});