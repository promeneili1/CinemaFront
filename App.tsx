import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import "./App.css";
import Card from "./components/common/CinemaRepertoire/CinemaRepertoire";
import AddMovie from "./components/common/AddMovie/AddMovie";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
      <Card />
      <AddMovie></AddMovie>
      
      </main>

      <Footer />
    </div>
  );
}

export default App;
