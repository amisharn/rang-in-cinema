function UploadPanel({ image, previewURL, setImage }) {
  return (
    <label htmlFor="upload" className="upload-panel">
      {previewURL ? (
        <div
          style={{
            width: "500px",
            height: "500px",
            border: "3px solid orange",
            borderRadius: "10px",
          }}
        >
          <img
            src={previewURL}
            alt="Preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ) : (
        <div className="upload-content">
          <h1 style={{ color: "orange" }}>+</h1>
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
