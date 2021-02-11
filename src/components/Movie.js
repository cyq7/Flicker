import "./styles/movie.scss"

const Movie = (props) => {
    return (
        <li className={props.className}>
            <span className="movieTitle">{props.title}</span>
            <div className="reactions">
                <button class="check">
                    <i class="fas fa-check"></i>
                </button>
                <button class="trash">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Movie;
