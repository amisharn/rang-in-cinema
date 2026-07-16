function ImageUpload({ setImage }) {
  return (
    <>
      <label htmlFor="upload" class="upload-box">
        Upload
      </label>
      <input
        style={{ display: "none" }}
        id="upload"
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
    </>
  );
}
export default ImageUpload;
