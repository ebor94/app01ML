import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

function Getlist(props){

 const {listdata} =props
let dat;

if(typeof listdata != "undefined"){
    dat = listdata.map((item, index)=>{
        return (
        <Col key={item.id} xs={12} md={4} xl={4} className="mt-3">
        <Card border="light" >
        <Card.Img className="img-responsive" width={100} height={350} src={item.imageUrl} />
        <Card.Body>
        <Card.Text>{item.title} </Card.Text>
        <Card.Link target={"_blank"} href={item.url}>View More</Card.Link>
        </Card.Body>
      </Card>
      </Col>      
 )
 })}

return(<>
         {dat}
         </>
)
}

export default Getlist