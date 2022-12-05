const FormDropDown = (props) => {
    return (
        <form onSubmit={props.searchTurtle}>
            <label htmlFor="favTMNTArtist">Show me photos that are from your favourtie famous turtles!  </label>
            <select
                id="favTMNTArtist"
                name="favTMNTArtist"
                onChange={props.handleDropChange}
                value={props.turtleInput}
            >
                <option value="" selected disabled >Pick one:</option>
                <option value="leonardo">Leonardo</option>
                <option value="michelangelo">Michelangelo</option>
                <option value="raphael">Raphael</option>
                <option value="donatello">Donatello</option>
            </select>
            <button type="submit">TURTLE POWER!</button>
        </form>
    )
}

export default FormDropDown;