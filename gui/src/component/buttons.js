import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from "react-bootstrap/Col";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";



function buttons(props){
    const {page} =props
    return ( 
        <Col md={{ span: 6, offset: 5}}>        
        <ButtonGroup size="lg" aria-label="next-prev">     
      <Button variant="primary" onClick={props.prevhandle} ><BsChevronLeft/></Button>
      <Button variant="primary" dissabled>{page}</Button>
      <Button variant="primary" onClick={props.nexthandle}><BsChevronRight/></Button>
    </ButtonGroup>
        </Col>
         )
}

export default buttons