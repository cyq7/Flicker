import './styles/form.scss'

const Form = (props) => {
    return (
      <form className={props.formClass}>
        <input type="text" class="textInput" autocomplete="off" placeholder="tytuł filmu..."/>
        <button className="formBtn">
            <i className={props.btn}></i>
        </button>
      </form>
    );
};

export default Form;