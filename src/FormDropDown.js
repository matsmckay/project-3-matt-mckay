import { useState } from 'react';

const FormDropDown = (props) => {
    return (
        <form onSubmit={props.searchArt}>
            <label htmlFor="favTMNTArtist">Show me photos that are:</label>
            <select
                id="favTMNTArtist"
                name="favTMNTArtist"
                onChange={props.handleChange}
                value={props.userInput}
            >
                <option value="" disabled>Pick one:</option>
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