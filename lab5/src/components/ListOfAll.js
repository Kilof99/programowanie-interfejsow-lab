import Student from './Student';

const ListOfAll = (props) => {

    const list = props.todos.map(it => (
        <Student
            key={it.id}
            name={it.name}
            desc={it.desc}
            mail={it.mail}
            tags={it.tags.join(', ')}
        />
    ));

    return (
        <ul>
            {list}
        </ul>
    )
}

export default ListOfAll;