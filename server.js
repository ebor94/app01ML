const express = require("express");
const axios = require("axios");
const redis = require("redis");

const app = express();
const port = process.env.PORT || 5000;
const api = "https://api.spaceflightnewsapi.net/v3/articles?_limit=100";

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function GetApi() {
  const apiResponse = await axios.get(api);
  console.log("Request sent to the API");
  return apiResponse.data;
}

async function cacheData(req, res, next) {
  const species="";
  let results;
  try {
    const cacheResults = await redisClient.get(species);
    if (cacheResults) {
      results = JSON.parse(cacheResults);
      res.send({
        fromCache: true,
        data: results,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(404);
  }
}


async function getSpacesData(req, res) {
  const space= "";
  let results;

  try {
    results = await GetApi();
    if (results.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(space, JSON.stringify(results), {
      EX: 10,
      NX: true,
    });

    res.send({
      fromCache: false,
      data: results,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}



app.get("/space/", cacheData, getSpacesData);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});