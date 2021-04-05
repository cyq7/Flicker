import "./styles/movie.scss"

const Movie = (props) => {
    return (
        <li className={props.className}>
            <span className="movieTitle">{props.title}</span>
            <div className="reactions">
                <button className="check">
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Movie;
