import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ConverterBlock from "./components/ConverterBlock/ConverterBlock";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <ConverterBlock />
        </main>
      </div>
    </div>
  );
}

export default App;
