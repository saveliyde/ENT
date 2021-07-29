import react from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";


const Registration = () => {
    return (
        <Container 
            className = "d-flex justify-content-center align-items-center"
            style = {{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                <Form.Control
                        className="mt-3"
                        placeholder="Почта"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Логин"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                    />
                    <Button className="mt-3" variant={"outline-success"}>
                        Зарегистрироваться
                    </Button>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div> 
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Registration;
