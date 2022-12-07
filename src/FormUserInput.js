const FormUserInput = (props) => {
    return (
        <div>
            <form onSubmit={props.searchArt}>
                <label className="labelSearch" htmlFor="userSearch">Search for some beautiful art from the Rijks museum! </label>
                <p>Type into the search field below!</p>
                <input
                    onChange={props.handleChange}
                    type="text"
                    id="userSearch"
                    value={props.userInput}
                    placeholder={`Try "picasso" or "tiger"`}
                    className="input"
                    required
                />
                <button type="submit" className="button">Search</button>
                {props.searchError ? <p className="errorMessage">Sorry, your search didn't return any of our timeless works of art. Please try a different search.</p> : null}
            </form>

        </div>
    )
}

export default FormUserInput;