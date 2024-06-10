require('dotenv').config();
const express = require("express");
//const apicache = require("apicache");
const morgan = require('morgan');
const cors = require("cors");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
//const connectDatabase = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});

//connectDatabase();