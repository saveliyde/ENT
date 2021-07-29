import { Container, Row , Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import pdfFile from '../Storage/Megalovania.pdf'
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

function DocViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(
          '.react-pdf__Page__textContent'
        );
        textLayers.forEach((layer) => {
          const { style } = layer;
          style.top = '0';
          style.left = '0';
          style.transform = '';
        });
    }

    return (
        <div className = "my-auto">
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
                </Document>
            <div className='d-flex justify-content-between align-items-center'>
                <Button variant="primary" size="lg" className = "ml-2" onClick={() => {setPageNumber(pageNumber - 1)}}>
                    Предыдущая
                </Button>
                <p>Page {pageNumber} of {numPages}</p>
                <Button variant="primary" size="lg" className = "ml-2" onClick={() => {setPageNumber(pageNumber + 1)}}>
                    Следующая
                </Button>
            </div>
      </div>
    );
}


const SheetsPage = () => {
    const sheets = {id: 2, name: 'Megalovania', author: 'toby fox', instrument: 'фортепиано', genre: 'soundtrack'}
    return (
        <Container>
        <Row>
        <Col md={{offset: 0}}>
            <h1 style={{fontSize: 60}}>{sheets.name}</h1>
            <Button variant="primary" size="lg" className = 'mt-2'>Скачать в .pdf</Button>
            <Row className='d-flex flex-column m-3'>
                <Row className = 'mt-2' style={{background:'lightgray', padding: 10, fontSize: 20 }}>Композитор: {sheets.author}</Row>
                <Row className = 'mt-2' style={{background:'lightgray', padding: 10, fontSize: 20 }}>Жанр: {sheets.genre}</Row>
                <Row className = 'mt-2' style={{background:'lightgray', padding: 10, fontSize: 20 }}>Для инструмента: {sheets.instrument}</Row>
                <Row className = 'mt-2' style={{height: 573, background:'lightgray', padding: 10, fontSize: 20 }}>Описание: </Row>
            </Row>
        </Col>
        <Col md="auto" className = 'mt-3'>
            <DocViewer/>
        </Col>
        </Row>
        </Container>
    )
}

export default SheetsPage;
