import express from 'express';
import spaceRoute from './routes/SpaceRoute'


const app = express();
const port = process.env.PORT || 5000;
app.get("/space/", spaceRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});