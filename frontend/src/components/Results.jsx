function Results({ results }) {
  return (
    <>
      <p>Results:</p>

      <ul className="list">
        {results.map((item) => {
          const url = item.Frame;
          const new_url = url.replace(
            "dataset/frames/",
            "http://127.0.0.1:8000/frames/",
          );

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
