import { config } from 'dotenv';
config();
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import routes from './routes';
import swaggerJson from './swagger.json';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use('/api/v1', routes);

app.listen(3000, () => console.log('Server is running on port 3000!'));
