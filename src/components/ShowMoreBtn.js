import './styles/showMoreBtn.scss'

const ShowMoreBtn = (props) => {
    return (
        <button className="showMoreBtn">{props.value}</button>
    )
}

export default ShowMoreBtn;