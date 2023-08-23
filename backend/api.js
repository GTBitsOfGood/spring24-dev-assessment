import express from 'express';
import { database } from './database.js';
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/bog/users', (req, res) => {
    res.json(database).status(200);
});


app.get('/api/bog/users/:id', (req, res) => {
    const user = database.filter((user) => user.id === req.params.id)[0]
    res.json(user).status(200)
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
