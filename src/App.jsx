// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CompanyList from "./components/CompanyList";
import JobList from "./components/JobList";
import Filters from "./components/Filters";
import Sort from "./components/Sort";

function App() {
  return (
    <div>
      <Header />
      <CompanyList />
      <JobList />
      <Filters />
      <Sort />
    </div>
  );
}

export default App;
