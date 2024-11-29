import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, Button, Spinner } from 'react-bootstrap'

class SectionCarousel extends Component {
  state = {
    genre: this.props.genre,
    genreId: this.props.genre.split(' ').join('').toLowerCase(),
    movies: this.props.movies,
    searchTerms: this.props.searchTerms,
    searchResults: [],
    isLoading: true,
    isError: false,
  }

  handleScroll = (e) => {
    const targetId = e.target.id ? e.target.id : e.target.parentElement.id

    const amount = 300
    const carousel = targetId.split('-')[0]
    const direction = targetId.split('-')[1]

    console.log('carousel:', carousel)
    console.log('direction:', direction)

    direction === 'Next'
      ? (document.getElementById(`${carousel}-Cards`).scrollLeft += amount)
      : (document.getElementById(`${carousel}-Cards`).scrollLeft -= amount)
  }

  getData() {
    fetch(
      'https://www.omdbapi.com/?apikey=81a9ef25&s=' + this.state.searchTerms
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(
            'SectionCarousel - fetch - Errore nel recupero dei dati'
          )
        }
      })
      .then((dataArray) => {
        console.log('SectionCarousel - dataArray', dataArray)
        this.setState({
          searchResults: dataArray.Search,
          isLoading: false,
        })
      })
      .then(console.log('SectionCarousel - this.state:', this.state))
      .catch((err) => {
        console.log(err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <section>
        <h2 className='fs-4 mt-5'>{this.state.genre}</h2>
        {this.setState.isError && (
          <Alert id={`${this.state.genreId}-Alert`} variant='danger'>
            Problemi con il caricamento dei dati
          </Alert>
        )}
        <div
          id={`${this.state.genreId}Container`}
          className='d-flex justify-content-around'
        >
          <Button
            id={`${this.state.genreId}-Previous`}
            className='p-4 my-auto bg-dark text-white btn-outline-dark'
            onClick={(e) => this.handleScroll(e)}
          >
            <FontAwesomeIcon
              id={`${this.state.genreId}-Previous-Icon`}
              icon='fa-solid fa-chevron-left'
            />
          </Button>
          {/* B Cards */}
          <div
            id={`${this.state.genreId}-Cards`}
            className='d-flex align-content-center mt-3 p-3 overflow-hidden border border-1'
          >
            {/* Spinner */}
            {this.setState.isLoading && (
              <Button variant='dark' disabled>
                <Spinner
                  as='span'
                  animation='grow'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
                Loading...
              </Button>
            )}

            {/* Immagini */}
            {this.state.searchResults
              .filter((data) => data.Poster !== 'N/A')
              .map((data) => (
                <div
                  key={`${this.state.genreId}-${data.imdbID}`}
                  className='d-inline-block me-2'
                  data-bs-toggle='modal'
                  data-bs-target='#cardInfoModal'
                >
                  <img
                    id={data.imdbID}
                    // width='300px'
                    src={data.Poster}
                    className='h-100'
                    alt={data.Title}
                  />
                </div>
              ))}
          </div>

          <Button
            id={`${this.state.genreId}-Next`}
            className='p-4 my-auto bg-dark text-white btn-outline-dark'
            onClick={(e) => this.handleScroll(e)}
          >
            <FontAwesomeIcon
              id={`${this.state.genreId}-Next-Icon`}
              icon='fa-solid fa-chevron-right'
            />
          </Button>
        </div>
      </section>
    )
  }
}

export default SectionCarousel
