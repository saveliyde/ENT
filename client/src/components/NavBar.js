import React, { useContext } from 'react'
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { MAINPAGE_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={MAINPAGE_ROUTE}>Электронная нотная тетрадь</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button>Публичные записи</Button>
                        <Button className = "ml-2">Мои записи</Button>
                        <Button className = "ml-2">Загрузить запись</Button>
                        <Button onClick = {() => user.setIsAuth(false)} className = "ml-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button>Публичные записи</Button>
                        <Button onClick = {() => user.setIsAuth(true)} className = "ml-2">Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;