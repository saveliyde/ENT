import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import ListGroup from 'react-bootstrap/ListGroup';


const  AuthorBar = observer( () => {
    const {sheets} = useContext(Context)
    return(
        <ListGroup variant="flush">
            {sheets.authors.map(authors =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}} 
                    active={authors.id === sheets.selectedAuthor.id}
                    onClick={() => sheets.setSelectedAuthor(authors)}
                    key={authors.id}>
                        {authors.name}
                </ListGroup.Item>   
            )}
        </ListGroup>
    )
})

export default AuthorBar;