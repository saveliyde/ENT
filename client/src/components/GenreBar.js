import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import ListGroup from 'react-bootstrap/ListGroup';


const  GenreBar = observer( () => {
    const {sheets} = useContext(Context)
    return(
        <ListGroup variant="flush">
            {sheets.genres.map(genres =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={genres.id === sheets.selectedGenre.id}
                    onClick={() => sheets.setSelectedGenre(genres)}
                    key={genres.id}>
                        {genres.name}
                </ListGroup.Item>   
            )}
        </ListGroup>
    )
})

export default GenreBar;
