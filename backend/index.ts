import cors from 'cors';
import express from 'express';
import { apiRouter } from './api';

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
// app.use(json());

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('Server running on port', port);
  console.log(`http://localhost:${port}`);
});
