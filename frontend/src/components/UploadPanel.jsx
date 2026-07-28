function UploadPanel({ previewURL, setImage }) {
  return (
    <label htmlFor="upload" className="upload-panel">
      {previewURL ? (
        <img src={previewURL} alt="Preview" className="preview-image" />
      ) : (
        <div className="upload-content">
          <h1>+</h1>
          <p>Upload an Image</p>
        </div>
      )}

      <input
        id="upload"
        type="file"
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      />
    </label>
  );
}

export default UploadPanel;
