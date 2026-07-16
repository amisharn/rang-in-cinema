function Preview({ url }) {
  return (
    <div className="preview">
      {url ? (
        <img src={url} alt="Your selected image!" />
      ) : (
        <p>Upload an Image!</p>
      )}
    </div>
  );
}

export default Preview;
