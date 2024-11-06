import { useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import SearchButton from './components/SearchButton';
import Sort from './components/Sort';
import CompanyList from './components/CompanyList';
import JobList from './components/JobList';
import FavoriteButton from './components/FavoriteButton';
import './App.css';

function App() {

    return (
        <div>
            <Header /> 
            <Filters />
            <SearchButton />
            <Sort />
            <CompanyList />
            <JobList />
            <FavoriteButton />
        </div>
    );
}

export default App;
