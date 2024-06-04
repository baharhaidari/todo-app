import "../../App.css";
import Filters from "./Filter";
import Search from "./Search";

export default function SearchAndFilter() {
  return (
    <section className="filters-search">
      <Filters />
      <Search />
    </section>
  );
}
