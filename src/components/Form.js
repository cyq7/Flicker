import './styles/form.scss'

const addMovie = (e) => {
  e.preventDefault();
}

const Form = (props) => {
    return (
      <form onSubmit={addMovie} className={props.formClass}>
        <input type="text" className="textInput" autoComplete="off" placeholder="tytuł filmu..."/>
        <button className="formBtn" type="submit">
            <i className={props.btn}></i>
        </button>
      </form>
    );
};

export default Form;