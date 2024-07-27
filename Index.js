import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import PortfolioRouter from './Routers/PortfolioRouter.js'


dotenv.config();
const app = express();
const port=process.env.port
app.use(express.json());

app.use(cors());


app.use('/api',PortfolioRouter)

app.listen(port,() => {
  console.log(`Server is running on appropriate port`);
});