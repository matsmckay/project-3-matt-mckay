import React from 'react';
import SearchForm from '../components/SearchForm';
import ArtList from '../components/ArtList';
import DropDownForm from '../components/DropDownForm'

const Home = () => {
    return (
        <div>
            <SearchForm />
            <DropDownForm />
            <ArtList />
        </div>
    )
}

export default Home;