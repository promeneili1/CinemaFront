// App.tsx
import { useState } from "react";
import Button from "./components/common/Button/Button";
import AddMovieForm from "./components/ui/AddMovieForm/AddMovieForm";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import CinemaRepertoire from "./components/common/CinemaRepertoire/CinemaRepertoire";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Button onClick={openModal} variant="secondary">
          <span>Add Movie</span>
        </Button>
        <CinemaRepertoire />
        <div>
          <AddMovieForm isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
