import {GetApi} from '../middleware/api'
import  redisClient from '../model/SpaceModel'

export const cacheData = async function (req, res, next) {
  const news="";
  let results;
  try {
    const cacheResults = await redisClient.get(news);
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


export const  getSpacesData = async function (req, res) {
  const space= "";
  let results;

  try {
    results = await GetApi();
      if (results.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(space, JSON.stringify(results), {
      EX: 300,
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