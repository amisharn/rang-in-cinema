function SearchButton({ disabled, search }) {
  return (
    <button className="search" disabled={disabled} onClick={search}>
      Find Similar Movie Stills
    </button>
  );
}
export default SearchButton;
