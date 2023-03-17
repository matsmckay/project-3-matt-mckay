import React from 'react';
import './sass/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleArtPiece from './pages/SingleArtPiece';
import Error from './pages/Error';
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/art/:id" element={<SingleArtPiece/>}/>        
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
    
        {/* <div className='searchContainer'>
          <div className='inputContainer'> */}
            {/* <FormUserInput
              handleChange={handleChange}
              searchArt={searchArt}
              userInput={userInput}
              searchError={searchError}
            /> */}
            
            
          {/* </div>
          <div className='dropDownContainer'>
            <FormDropDown
              handleDropChange={handleDropChange}
              turtleInput={turtleInput}
              searchTurtle={searchTurtle}
            />
            
          </div>
        </div> */}
        {/* END .imageFlex */}
       
        {/* END .imageFlex */}

// CULTURE YO'SELF

// A landing page with the app heading: "Priceless works of art, only a few clickity-clicks away!" and a very polite welcome message: "Guaranteed to leave you 15% more cultured than before (results may vary)."

// A dropdown menu, starting on the default selection that says "Please select an artiste." The user will not be allowed to select the default selection once they click on the dropdown

// After the user makes their choice of artist, they must click a 'submit button' to pass the value of their choice to the API call. 

// Listen for the button click event to retrieve the appropriate works of art based on the value chosen from the dropdown menu. That is, make an AJAX request to retrieve third-party data based on user preference for artist

// Display the works of art (max of 10) to the page from the chosen artist (rendering HTML img elements) 
