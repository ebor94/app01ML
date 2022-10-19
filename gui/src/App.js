import {GetDataApi} from  "./middleware/api"
import Getlist from "./component/DataList"
import Buttons from "./component/buttons"
import { useEffect, useState } from "react";

function App() {
const itemsPage = 10

const [datax, setdatax] = useState([]);
const [datax2, setdatax2] = useState();
const [page, setpage] = useState(0);


  
useEffect(() => {
  getData(); 
}, []);

const getData = async () => {
  const response = await GetDataApi();
  setdatax(response.data)
  setdatax2(datax)
};

console.log(datax2)
const nexthandle =()=>{
const totalitem = datax.length
const nextpage = page + 1;
const firstitem = nextpage *  itemsPage;

if(firstitem  >=  totalitem)return;

setdatax2([...datax].splice(firstitem, itemsPage))
setpage(nextpage)
}

const prevhandle =()=>{
  const prevpage = page - 1;
  if(prevpage < 0) return;
  const firstitem = prevpage *  itemsPage;
  setdatax2([...datax].splice(firstitem, itemsPage))
  setpage(prevpage)

}

  return (
    <div className="container">
      <div className="row">
    <Getlist  listdata={datax.splice(0,itemsPage)} />
    </div>
    <div className="row">
    <Buttons page={page}  nexthandle={nexthandle} prevhandle={prevhandle} />
    </div>
    </div>
  );
}

export default App;
