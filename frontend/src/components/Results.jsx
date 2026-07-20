function Results({ results }) {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <>
      <p>Results:</p>

      <ul className="list">
        {results.map((item) => {
          const url = item.Frame;
          const new_url = url.replace("dataset/frames/", `${API_URL}/frames/`);

          return (
            <li key={item.Frame}>
              <img src={new_url} alt={item.Movie} className="results" />
              <p>{item.Movie}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Results;
