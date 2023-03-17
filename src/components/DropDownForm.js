import React from 'react';
import ArtPiece from './ArtPiece';
import { useState } from 'react'

const DropDownForm = () => {
    const [artistSearch, setArtistSearch] = useState([]);
    const [turtleInput, setTurtleInput] = useState("");

    const searchTurtle = async (e) => {
    const url = new URL(`https://www.rijksmuseum.nl/api/en/collection`);
    e.preventDefault();
    url.search = new URLSearchParams({
      key: `C1So9sXo`,
      format: "json",
      imgonly: true,
      q: turtleInput,
    });
    const res = await fetch(url);
    const data = await res.json();
    setArtistSearch(data.artObjects);
  }

    const handleDropChange = (e) => {
        setTurtleInput(e.target.value);
    }

    return (
        <div>
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
            <div className="imageFlex">
              {artistSearch.map((turtleArt) => {
                return (
                  <ArtPiece
                    key={turtleArt.id}
                    alt={turtleArt.title}
                    title={turtleArt.longTitle}
                    imagePath={turtleArt.webImage.url}
                  />
                );
              })}
            </div>
        </div>
    )
}

export default DropDownForm;