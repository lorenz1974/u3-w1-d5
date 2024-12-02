import React, { Component } from 'react'
import { Modal, Button, Row, Col, Spinner, Alert } from 'react-bootstrap'
import Rating from './Rating'

class MyModal extends Component {
  state = {
    modalData: null, // Stato per i dati del film
    isLoading: false, // Stato di caricamento
    isError: false, // Stato di errore
  }

  // Metodo per recuperare i dati del film
  getModalData = () => {
    // Inizializza il caricamento
    this.setState({ isLoading: true, isError: false })

    fetch('https://www.omdbapi.com/?apikey=81a9ef25&i=' + this.props.movieid)
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
          isError: false,
        })
      })
      .catch((err) => {
        console.error('Errore:', err)
        this.setState({
          modalData: null,
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
          {/* Caricamento */}
          {isLoading && (
            <div className='text-center'>
              <Spinner animation='border' role='status' />
              <p>Caricamento in corso...</p>
            </div>
          )}
          {/* Errore */}
          {isError && (
            <Alert variant='danger'>
              Problema nel caricamento dei dati. Riprova più tardi.
            </Alert>
          )}
          {/* Dati caricati */}
          {!isLoading && !isError && modalData && (
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
                {modalData.Genre !== 'N/A' && (
                  <p>
                    <strong>Genere:</strong> {modalData.Genre}
                  </p>
                )}
                {modalData.Plot !== 'N/A' && (
                  <p>
                    <strong>Trama:</strong> {modalData.Plot}
                  </p>
                )}
                {modalData.Director !== 'N/A' && (
                  <p>
                    <strong>Regista:</strong> {modalData.Director}
                  </p>
                )}
                {modalData.Actors !== 'N/A' && (
                  <p>
                    <strong>Attori:</strong> {modalData.Actors}
                  </p>
                )}
                {modalData.Language !== 'N/A' && (
                  <p>
                    <strong>Lingua:</strong> {modalData.Language}
                  </p>
                )}
                {modalData.Awards !== 'N/A' && (
                  <p>
                    <strong>Premi:</strong> {modalData.Awards}
                  </p>
                )}
                {modalData.imdbRating !== 'N/A' && (
                  <p>
                    <strong>Rating IMDb:</strong>{' '}
                    <Rating rate={modalData.imdbRating} max='10' />
                  </p>
                )}
              </Col>
            </Row>
          )}
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
