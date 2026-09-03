import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Perguntas from "./components/Perguntas";
import Funcionalidades from "./components/Funcionalidades";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Funcionalidades />
        <Perguntas />
      </main>
      <Footer />
    </>
  );
}

export default App;