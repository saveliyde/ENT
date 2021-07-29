import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import noteImg from '../assets/note.jpg'

const SheetsItem = ({sheets}) => {
    
    return (
        /*<Col md={4}>
            <Card style={{width: 200, cursor: 'pointer'}} border={'light'} className = 'mt-5'>
                <Image width={250} height={300} src={noteImg}/>
                <div className=' mt-1 d-flex align-item-center'>
                    {sheets.name}
                </div>
            </Card>
        </Col>*/
        <Row style={{height: 90, cursor: 'pointer', background:'lightgray', padding: 10, fontSize: 20 }} className = 'mt-3'>
            <div>
                <h3>{sheets.name}</h3>
                <h5>{sheets.author}</h5>
            </div>
        </Row>
    )
}

export default SheetsItem