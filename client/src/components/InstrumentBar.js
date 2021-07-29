import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import ListGroup from 'react-bootstrap/ListGroup';


const  InstrumentBar = observer( () => {
    const {sheets} = useContext(Context)
    return(
        <ListGroup variant="flush">
            {sheets.instruments.map(instruments =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={instruments.id === sheets.selectedInstrument.id}
                    onClick={() => sheets.setSelectedInstrument(instruments)}
                    key={instruments.id}>
                        {instruments.name}
                </ListGroup.Item>   
            )}
        </ListGroup>
    )
})

export default InstrumentBar;