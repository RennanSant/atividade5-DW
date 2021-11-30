import { dir } from './lib/dir.js';
import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('App running at http://localhost:3000');
});

app.get('/', async (req, res) => {
    const path = "./"
    const result = {
      path,
      dir: await dir(),
    };
    res.json(result);
});

app.get('/dir', async (req, res) => {
    const path = String(req.query.path);
    //console.log(path);
    const result = {
      path,
      dir: await dir(path),
    };

    console.log(dir(path))
    res.json(result); 
  });
