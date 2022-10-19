import axios from "axios";
const url="http://localhost:5000/space/";
export  const GetDataApi = async()=>{
      let res;
      res  = await axios.get(url)
      console.log(res.data)
return res.data;
 
}
