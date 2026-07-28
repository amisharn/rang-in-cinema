function Results({ results }) {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <ul className="list">
      {results.map((item) => {
        const newUrl = item.Frame.replace(
          "dataset/frames/",
          `${API_URL}/frames/`,
        );

        return (
          <li key={item.Frame} className="result-card">
            <img src={newUrl} alt={item.Movie} className="result-image" />

            <p className="movie-title">{item.Movie}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Results;
