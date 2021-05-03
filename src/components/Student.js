const Student = (props) => (
    <div className="card text-white bg-success mb-3">
        <p><b>Imię:</b> {props.name}</p>
	    <p><b>Opis:</b> {props.desc}</p>
	    <p><b>Mail:</b> {props.mail}</p>
	    <p><b>Tagi:</b> {props.tags}</p>
    </div>
)

export default Student