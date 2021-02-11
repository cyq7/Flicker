import './styles/section.scss'

const Section = (props) => {
    return (
    <section className={props.className}>
        <h2>{props.header}</h2>
        <div>{props.children}</div>
    </section>
    )
};

export default Section;