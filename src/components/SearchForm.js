import React from 'react';

const FormUserInput = () => {
    
    const [artSearch, setArtSearch] = useState([]);
    const [searchError, setSearchError] = useState(false);
    const [userInput, setUserInput] = useState("");

    const searchArt = async (e) => {
    const url = new URL(`https://www.rijksmuseum.nl/api/en/collection`);

    e.preventDefault();
    url.search = new URLSearchParams({
      key: `C1So9sXo`,
      format: "json",
      imgonly: true,
      q: userInput,

    });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setArtSearch(data.artObjects);
      if (data.artObjects.length === 0) {
        throw new Error()
      } else {
        setSearchError(false);
      }
    }
    catch (error) {
      setSearchError(true);
    }
  }
    const handleChange = (e) => {
    setUserInput(e.target.value);
  }
    
    
    
    return (
        <div>
            <form onSubmit={searchArt}>
                <label className="labelSearch" htmlFor="userSearch">Search for beautiful art from the Rijks Museum: </label>
                <p>Type into the search field below and then click the 'Search' button!</p>
                <input
                    onChange={handleChange}
                    type="text"
                    id="userSearch"
                    value={userInput}
                    placeholder={`e.g. "picasso"`}
                    className="input"
                    required
                />
                <button type="submit" className="button">Search</button>
                {searchError ? <p className="errorMessage">Sorry, your search didn't return any of our timeless works of art. Please try a different search.</p> : null}
            </form>
            <div className="imageFlex">
              {artSearch.map((artwork) => {
                return (
                  <Art
                    key={artwork.id}
                    alt={artwork.title}
                    title={artwork.longTitle}
                    imagePath={artwork.webImage.url}
                  />
                );
              })}
            </div>
        </div>
    )
}

export default FormUserInput;