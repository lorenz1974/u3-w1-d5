import React, { Component } from 'react'
import { Modal, Button, Row, Col, Spinner, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyModal extends Component {
  state = {
    modalData: null, // Cambiato da array a oggetto
    isLoading: true,
    isError: false,
  }

  getModalData() {
    fetch('https://www.omdbapi.com/?apikey=81a9ef25&i=' + this.props.movieId) // Usa il movieId passato nei props
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei dati')
        }
      })
      .then((data) => {
        console.log('Dati ricevuti:', data)
        this.setState({
          modalData: data,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.error(err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.getModalData()
  }

  render() {
    const { modalData, isLoading, isError } = this.state
    const { onHide } = this.props

    if (isLoading && <Spinner animation='grow' />) return null

    if (
      (isError || !modalData) && (
        <Alert variant={'danger'}>Problema nel caricamento dei dati</Alert>
      )
    )
      return null

    return (
      <Modal
        {...this.props}
        size='xl'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Scheda del film
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {/* Colonna immagine del poster */}
            <Col md={4}>
              <img
                className='img-fluid shadow-lg rounded'
                src={modalData.Poster}
                alt={`Poster di ${modalData.Title}`}
              />
            </Col>

            {/* Colonna informazioni */}
            <Col md={8}>
              <h3 className='text-red-NF'>
                {modalData.Title} ({modalData.Year})
              </h3>
              <p>
                <strong>Genere:</strong> {modalData.Genre}
              </p>
              <p>
                <strong>Trama:</strong> {modalData.Plot}
              </p>
              <p>
                <strong>Regista:</strong> {modalData.Director}
              </p>
              <p>
                <strong>Attori:</strong> {modalData.Actors}
              </p>
              <p>
                <strong>Lingua:</strong> {modalData.Language}
              </p>
              <p>
                <strong>Premi:</strong> {modalData.Awards}
              </p>
              <p>
                <strong>Rating IMDb:</strong> {modalData.imdbRating} / 10
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-red-NF text-white-NF' onClick={onHide}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyModal
