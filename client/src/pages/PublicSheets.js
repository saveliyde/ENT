import React from 'react';
import { Container, Row , Col, Card, Form } from 'react-bootstrap';
import GenreBar from '../components/GenreBar';
import AuthorBar from '../components/AuthorBar';
import InstrumentBar from '../components/InstrumentBar';
import SheetsList from '../components/SheetsList';

const PublicSheets = () => {
    return (
        <Container>
            <Row className = 'mt-2'>
                <Col md="3">
                    <Card style={{background:'lightgray'}}>
                        <h3 className = 'mt-4 pl-3 pr-3'>Композиторы</h3>
                        <AuthorBar/>
                        <h3 className = 'mt-4 pl-3 pr-3'>Жанры</h3>
                        <GenreBar/>
                        <h3 className = 'mt-4 pl-3 pr-3'>Инструменты</h3>
                        <InstrumentBar/>
                    </Card>
                </Col>
                <Col className md="9">
                    <Form className="d-flex flex-column"> 
                        <Form.Control size="lg"
                            placeholder="Поиск"
                        />
                    </Form>
                    <SheetsList/>
                </Col>
            </Row>
        </Container>
    )
}

export default PublicSheets;

