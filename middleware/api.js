import axios from 'axios';
const api = "https://api.spaceflightnewsapi.net/v3/articles?_limit=100";
export const GetApi = async function() {
    const apiResponse = await axios.get(api);
  console.log("Request  API");
  
    return apiResponse.data;
  }

