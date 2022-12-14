import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import Qualification from "./Components/Qualification/Qualification";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
