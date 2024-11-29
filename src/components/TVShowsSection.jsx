import { Component } from 'react'
import { Button, Dropdown, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TVShowsSection = ({ genres }) => {
  return (
    <Row className='d-flex justify-content-between'>
      <Col>
        {/* TV Shows, Dropdown, and Buttons */}
        <div id='tvShowsAndButtons' className='d-flex justify-content-between'>
          {/* TV Shows and Dropdown */}
          <div
            id='tvShowsAndGenresDropdown'
            className='d-flex justify-content-start align-content-center'
          >
            <h1>TV Shows</h1>

            {/* Dropdown */}
            <Dropdown className='ms-3 mt-2'>
              <Dropdown.Toggle
                variant='outline-light'
                className='rounded-0 fs-7 border-white-NF'
              >
                Genres <i className='fa-solid fa-caret-down'></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {genres.map((genre, index) => (
                  <Dropdown.Item className='fs-7' key={index}>
                    {genre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Buttons */}
          <div id='tvShowsButtonsDiv' className='d-flex'>
            <Button
              id='cardsAsList'
              variant='outline-light'
              className='rounded-0 border-white-NF'
              onClick={() => {
                const cardsT = document.querySelectorAll('[id*="-Card"]')
                cardsT.forEach((card) => {
                  card.classList.toggle('flex-wrap')
                  card.classList.toggle('justify-content-center')
                })
                const buttons = document.querySelectorAll(
                  '[id$="-Next"], [id$="-Previous"]'
                )
                buttons.forEach((button) => {
                  button.classList.toggle('d-none')
                })
              }}
            >
              <FontAwesomeIcon className='fs-4' icon='fa-solid fa-list' />
            </Button>
            <Button
              id='cardsAsGrid'
              variant='outline-light'
              className='rounded-0 border-white-NF ms-3'
              onClick={() => {
                const cardsT = document.querySelectorAll('[id*="-Card"]')
                cardsT.forEach((card) => {
                  card.classList.toggle('flex-wrap')
                  card.classList.toggle('justify-content-center')
                })
                const buttons = document.querySelectorAll(
                  '[id$="-Next"], [id$="-Previous"]'
                )
                buttons.forEach((button) => {
                  button.classList.toggle('d-none')
                })
              }}
            >
              <FontAwesomeIcon
                className='fs-4'
                icon='fa-solid fa-table-cells'
              />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default TVShowsSection
