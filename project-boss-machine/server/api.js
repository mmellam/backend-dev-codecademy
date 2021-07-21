const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = express.Router();
const { 
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
  } = require('./db');
const app = require('../server');

apiRouter.param('minionId', (req, res, next, id) => {
  let minionId = id;
  if (typeof minionId !== 'number') {
    return res.status(404).send();
  }
  const minion = getFromDatabaseById('minions', minionId);
  if (minion) {
    req.id = minionId;
    req.minion = minion;
    next();
  } else {
    res.status(404).send();
  }
});
  
// /api/minions
apiRouter.get('/minions', (req, res, next) => {
    const data = getAllFromDatabase('minions');
    res.send(data);
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    //const minionId = req.params.minionId;
    const data = getFromDatabaseById('minions', req.id);
    if (data) {
        res.send(data);
    } else {
        res.status(404).send();
    }
});

apiRouter.put('/minions/:minionId', (req, res, next) => {
  let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
  res.send(updatedMinionInstance); 
});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const deleted = deleteFromDatabasebyId('minions', minionId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(404);
    }
    res.send();
});

apiRouter.post('/minions', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

// ideas 

apiRouter.get('/ideas', (req, res, next) => {
  const data = getAllFromDatabase('ideas');
  res.send(data);
});

apiRouter.post('/ideas', (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
  const id = req.params.ideaId;
  const data = getFromDatabaseById('ideas', id);
  if (data) {
      res.send(data);
  } else {
      res.status(404).send();
  }
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
  const id = req.params.ideaId;
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.body.id = id;
    const updated = updateInstanceInDatabase('ideas', req.body);
    res.send(updated);
  } else {
    res.status(404).send;
  }
});

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
  const id = req.params.ideaId;
  const deleted = deleteFromDatabasebyId('ideas', id);
  if (deleted) {
    res.status(204);
  } else {
    res.status(404);
  }
  res.send();
});

//  meetings
apiRouter.get('/meetings', (req, res, next) => {
  const data = getAllFromDatabase('meetings');
  res.send(data);
});

apiRouter.post('/meetings', (req, res, next) => {
  let newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
});

apiRouter.delete('/meetings', (req, res, next) => {
  const deleted = deleteAllFromDatabase('meetings');
  res.status(204).send();
});


module.exports = apiRouter;
