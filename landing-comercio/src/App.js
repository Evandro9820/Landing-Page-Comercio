import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Servico from "./components/Section-Servicos";
import Depoimentos_section from "./components/Section-Depoimentos";
import Preco_Section from "./components/Section-Preco";
import SobreMim_Section from "./components/SobreMim-Section";
import Contato from "./components/Section-Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Servico />
      <Depoimentos_section />
      <Preco_Section />
      <SobreMim_Section />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
