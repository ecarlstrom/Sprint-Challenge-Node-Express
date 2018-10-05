const express = require('express');
const server = express();
const port = 8000;

const actionData = require('./data/helpers/actionModel.js');
const projectData = require('./data/helpers/projectModel.js');

server.use(express.json());

// test request

server.get('/', (req, res) => {
  res.send('Server test.');
});

server.listen(port, () => console.log('Server listening on port 8000.'));

// actions

// get all actions

server.get('/api/actions', (req, res) => {
  actionData.get().then(actions => {
    console.log('\n** List of actions **', actions);
    res.json(actions);
  })
  .catch(err => res.status(500).send({ error: "The list of actions could not be retrieved." }));
});

// add an action to the list

server.post('/api/actions', (req, res) => {
  const { id, project_id, description, notes, completed } = req.body;
  const newAction = { id, project_id, description, notes, completed };
  actionData.insert(newAction)
    .then(id => {
      actionData.findById(id)
        .then(action => {
          res.status(201).json(action);
        });
    })
    .catch(err => res.status(400).send({ error: "The action could not be added to the database. </3" }));
});

// update an action

server.put('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes, completed } = req.body;
  const newAction = { project_id, description, notes, completed };

  console.log(newAction);
  actionData.update(id, newAction)
    .then(action => {
      console.log(action);
      res.status(200).json(action);
    })
    .catch(err => console.error(err));
});

// remove an action

server.delete('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  actionData.remove(id)
    .then(removedAction => {
      console.log(removedAction);
      res.status(200).json(removedAction);
    })
    .catch(err => console.error(err));
});
