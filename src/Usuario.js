export default function Usuario(props) {

    const { user } = props
    return (
        <div className="username">{props.user}</div>
    )
}

