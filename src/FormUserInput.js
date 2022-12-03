const FormUserInput = (props) => {
    return (
        <form onSubmit={props.searchArt}>
            <label className="label" htmlFor="userSearch">Search for some beautiful art from the Rijks museum!: </label>
            <input
                onChange={props.handleChange}
                type="text"
                id="userSearch"
                value={props.userInput}
                placeholder={`Try "rembrandt" or "tiger"`}
                className="input"
                required
            />
            <button type="submit" className="button">Search</button>
        </form>
    )
}

export default FormUserInput;