import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import SheetsItem from './SheetsItem';

const SheetsList = observer(() => {
    const {sheets} = useContext(Context)
    return (
        <ListGroup className = 'd-flex flex-column m-3'>
            {sheets.sheets.map(sheets =>
                <SheetsItem key={sheets.id} sheets={sheets}/>
            )}
        </ListGroup>
    )
})

export default SheetsList