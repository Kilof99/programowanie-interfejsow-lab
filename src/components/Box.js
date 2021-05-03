const Box = (props) => {
    return (
	<>
	<p>
		<label className="boxlabel" htmlFor={props.id}>{props.label}</label>
        <input
			id={props.id}
            type="text"
            name="newItemValue"
            value={props.newItemValue}
            onChange={props.handleOnChange}
        />
	</p>
	</>
)
}

export default Box;