function Art(props) {
    return (

        <div>
            <h2>{props.title}</h2>
            <img
                src={props.imagePath}
                alt={props.alt}
                width="25%"

            />
        </div>
    )
}

export default Art;