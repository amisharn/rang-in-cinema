function Header({ title, subtitle }) {
  return (
    <div class="header">
      <h1 style={{ color: "white" }}>{title}</h1>
      <h2 style={{ color: "white" }}>{subtitle}</h2>
    </div>
  );
}

export default Header;
