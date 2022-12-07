const FormUserInput = (props) => {
    return (
        <div>
            <form onSubmit={props.searchArt}>
                <label className="labelSearch" htmlFor="userSearch">Search for beautiful art from the Rijks Museum: </label>
                <p>(Guaranteed to leave you 5% more cultured after every search! Results may vary)</p>
                <p>Type into the search field below and then click the 'Search' button!</p>
                <input
                    onChange={props.handleChange}
                    type="text"
                    id="userSearch"
                    value={props.userInput}
                    placeholder={`e.g. "picasso" or "tiger"`}
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