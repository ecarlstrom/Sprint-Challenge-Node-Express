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
  .catch(err => res.status(500).send({ error: "The list of actions could not be retrieved. </3 " }));
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

// projects

// get all projects

server.get('/api/projects', (req, res) => {
  projectData.get().then(projects => {
    console.log('\n** List of projects **', projects);
    res.json(projects);
  })
  .catch(err => res.status(500).send({ error: "The list of projects could not be retrieved. </3 "}));
});

// add a project to the list

server.post('/api/projects', (req, res) => {
  const { id, name, description, completed } = req.body;
  const newProject = { id, name, description, completed };
  projectData.insert(newProject)
    .then(id => {
      projectData.findById(id)
        .then(project => {
          res.status(201).json(project);
        });
    })
    .catch(err => res.status(500).send({ error: "The project could not be added to the database. </3 "}));
});

// update a project

server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  const newProject = { name, description, completed };

  console.log(newProject);
  projectData.update(id, newProject)
    .then(project => {
      console.log(project);
      res.status(200).json(project);
    })
    .catch(err => console.error(err));
});

// remove a project

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  projectData.remove(id)
    .then(removedProject => {
      console.log(removedProject);
      res.status(200).json(removedProject);
    })
    .catch(err => console.error(err));
});
