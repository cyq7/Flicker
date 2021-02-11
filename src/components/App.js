import "./styles/app.scss"
import Header from './Header'
import Section from './Section'
import Form from './Form'
import Movie from './Movie'
import ShowMoreBtn from './ShowMoreBtn'

const App = () => {
    return (
        <div id="container">
            <Header />
            <Section className="toWatch" header="Musimy zobaczyć">
                <Form 
                    formClass="addMovie"
                    btn="fas fa-plus"
                />
                <ul className="movieList">
                    <Movie
                        title="Jak wojtek został strażakiem"
                        className="movie"
                    />
                    <Movie
                        title="Interstellar"
                        className="movie"
                    />
                    <Movie
                        title="Grawitacja"
                        className="movie"
                    />
                    <Movie
                        title="OMG"
                        className="movie"
                    />
                    <Movie
                        title="Sranko"
                        className="movie"
                    />
                </ul>
            </Section>
            <Section
            className="collection"
            header="Kolekcja">
            <Form
                formClass="searchMovie"
                btn="fas fa-search"
            />
            <div>
                <div className="watched all">
                    <ShowMoreBtn value="Obejrzane"/>
                </div>
                <div className="watched favourite">
                    <ShowMoreBtn value="Ulubione" />
                </div>
                <div className="watched liked">
                    <ShowMoreBtn value="Dobre" />
                </div>
                <div className="watched disliked">
                    <ShowMoreBtn value="Słabe" />
                </div>
            </div>
            </Section>
        </div>
    )
}

export default App;