function Header({ title, subtitle }) {
  return (
    <div class="header">
      <h1 class="header-title">{title}</h1>
      <h2 style={{ color: "white" }}>{subtitle}</h2>
    </div>
  );
}

export default Header;
