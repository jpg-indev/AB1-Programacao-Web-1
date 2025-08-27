import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="sidebar-button">Fundo Saúde</button>
      <button className="sidebar-button">Fundo Assistência Social</button>
      <button className="sidebar-button">Fundo Obras</button>
      <button className="sidebar-button">Fundo Educação</button>
    </aside>
  );
}

export default Sidebar;
