const FormUserInput = (props) => {
    return (
        <div>
            <form onSubmit={props.searchArt}>
                <label className="labelSearch" htmlFor="userSearch">Search for some beautiful art from the Rijks museum!: </label>
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

        </div>
    )
}

export default FormUserInput;