const FormDropDown = ({ searchTurtle, turtleInput, handleDropChange }) => {
    return (
        <form onSubmit={searchTurtle}>
            <label className="labelSearch" htmlFor="favTMNTArtist">Search for art from everyone's favourite famous ninja turtles!  </label>
            <p>Select from the drop down and then click 'TURTLE POWER' button:</p>
            <select
                id="favTMNTArtist"
                className="input"
                name="favTMNTArtist"
                onChange={handleDropChange}
                value={turtleInput}
                required
            >
                <option value="" disabled >Pick one:</option>
                <option value="leonardo">Leonardo</option>
                <option value="michelangelo">Michelangelo</option>
                <option value="raphael">Raphael</option>
                <option value="donatello">Donatello</option>
            </select>
            <button className="button" type="submit">TURTLE POWER!</button>
        </form>
    )
}

export default FormDropDown;