import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap.css';
import './App.css';
import { Component } from "react";
import { Alert, Button, Form, FormGroup, Label, Input } from 'react-bootstrap';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Funzioni e moduli dell'App
import MyNav from './components/MyNav';
import TVShowsSection from "./components/TVShowsSection";
import SectionCarousel from './components/SectionCarousel';
import MyFooter from './components/MyFooter';


function App() {
  return (

    <div>
      <header>
        <MyNav />
      </header>

      {/* Div per i messaggi dall'applicazione */}

      <main className="container-fluid mx-auto w-95 mt-4">
        <div id="alertMessage" className="d-none"></div>

        <TVShowsSection genres={["Action", "Comedy", "Drama", "Horror", "Sci-Fi"]} />

        <SectionCarousel
          genre="Trending Now"
          movies={[
            "tt1143140", "tt0099763", "tt0138497", "tt0120520", "tt3607688",
            "tt0062818", "tt0048130", "tt1183911", "tt0082163", "tt16968450"
          ]
          }
          searchTerms={'rambo'} />
        <SectionCarousel
          genre="Watch It Again" movies={[
            "tt0301765", "tt0108839", "tt22900702", "tt1661063", "tt0067567",
            "tt0095956", "tt1512225", "tt0222619", "tt4572792", "tt0101349"
          ]
          }
          searchTerms={'animals'} />
        <SectionCarousel
          genre="New Releases"
          movies={[
            "tt8095842", "tt0057680", "tt3543026", "tt0069074", "tt4216976",
            "tt1206885", "tt0186471", "tt10516984", "tt31389687", "tt0814354"
          ]
          }
          searchTerms={'power'} />
      </main>

      <footer className="d-flex flex-column mt-3 w-50 mx-auto">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
library.add(fab, fas, far)
