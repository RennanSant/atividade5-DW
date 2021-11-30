import { dir } from './lib/dir.js';
import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('App running at http://localhost:3000');
});

app.get('/', (req, res) => {
    const path = []
    const result = {
      path,
      dir: dir(path),
    };
    res.json(result);
});

app.get('/dir', (req, res) => {
    const path = String(req.query.path);
    //console.log(path);

    const result = {
      path,
      dir: dir(path),
    };

    res.json(result);
  });  
