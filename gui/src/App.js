import {GetDataApi} from  "./middleware/api"
import Getlist from "./component/DataList"
import Buttons from "./component/buttons"
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
const itemsPage = 10

const [datax, setdatax] = useState([]);
const [Datax2, SetDatax2] = useState([]);
const [page, setpage] = useState(0);


const getData = async () => {
  const response = await GetDataApi();
   SetDatax2([...response.data].splice(0, itemsPage)); 
  setdatax(response.data) 

 

 
};
  
useEffect(() => {
 getData();
},[]);




const nexthandle =()=>{
const totalitem = datax.length
const nextpage = page + 1;
const firstitem = nextpage *  itemsPage;

if(firstitem  >=  totalitem)return;

SetDatax2([...datax].splice(firstitem, itemsPage));
setpage(nextpage)
}

const prevhandle =()=>{
  const prevpage = page - 1;
  if(prevpage < 0) return;
  const firstitem = prevpage *  itemsPage;
  SetDatax2([...datax].splice(firstitem, itemsPage));
  setpage(prevpage)

}

  return (
    <>
      <Navbar bg="warning">
        <Container>
          <Navbar.Brand>Challenge MELI</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          <Getlist listdata={Datax2} />
        </div>
        <div className="row">
          <Buttons
            page={page}
            nexthandle={nexthandle}
            prevhandle={prevhandle}
          />
        </div>
      </div>
    </>
  );

}

export default App;
