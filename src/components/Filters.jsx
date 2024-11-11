import "../styles/Filters.css";

// function Filters() {
//   return <div>Filters</div>;
// }

const Filters = () => {
  return (
    <div className="filters">
      <select className="filter-select">
        <option>Select Municipality</option>
        {/* Options */}
      </select>

      <div className="search-container">
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Filters;
