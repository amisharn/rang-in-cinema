function Click({ setTitle, newTitle }) {
  return (
    <button
      onClick={() => {
        setTitle(newTitle);
      }}
    >
      Click Me!
    </button>
  );
}
export default Click;
