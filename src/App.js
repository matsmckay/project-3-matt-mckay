import { useState } from 'react';
import './sass/App.scss';
import Art from './Art.js';
import FormUserInput from './FormUserInput.js';


function App() {
  // Create a lil morsle of state (using useState) to store our works of art that we are getting back from our API call. That morsle of state can be used to display the art pieces on the page
  const [art, setArt] = useState([]);
  const [userInput, setUserInput] = useState("");

  const searchArt = async (e) => {
    const url = new URL(`https://www.rijksmuseum.nl/api/en/collection`);

    e.preventDefault();
    console.log("submitting the form");
    url.search = new URLSearchParams({
      key: `LvqwJKjT`,
      format: "json",
      imgonly: true,
      q: userInput

    });

    const res = await fetch(url);
    const data = await res.json();
    setArt(data.artObjects);
    console.log(data.artObjects)
  }



  const handleChange = (e) => {
    setUserInput(e.target.value);

  }



  // Add an empty array here to prevent the useEffect() callback function from running every time our component re-renders. We only want this effect (calling the API) to run after the INITIAL render of the 'App' component. 
  // By adding this empty array, we are telling useEffect that the effect being run here does not depend on any other values in the component ie. useEffect's cbf will once, only after the first render, and then never again

  // key attritube is needed bc Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. Otherwise you're going to get (in the console) the typical:
  //       Warning: Each child in a list should have a unique "key" prop. 


  return (
    <div className="App">
      <h1>Let's view some priceless works of art!</h1>
      <FormUserInput
        handleChange={handleChange}
        userInput={userInput}
        searchArt={searchArt}
      />
      <div className="imageFlex">
        {art.map((artwork) => {
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
  );
}

export default App;





// CULTURE YO'SELF

// A landing page with the app heading: "Priceless works of art, only a few clickity-clicks away!" and a very polite welcome message: "Guaranteed to leave you 15% more cultured than before (results may vary)."

// A dropdown menu, starting on the default selection that says "Please select an artiste." The user will not be allowed to select the default selection once they click on the dropdown

// After the user makes their choice of artist, they must click a 'submit button' to pass the value of their choice to the API call. 

// Listen for the button click event to retrieve the appropriate works of art based on the value chosen from the dropdown menu. That is, make an AJAX request to retrieve third-party data based on user preference for artist

// Display the works of art (max of 10) to the page from the chosen artist (rendering HTML img elements) 
