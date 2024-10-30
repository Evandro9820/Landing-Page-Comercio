import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Servico from "./components/Section-Servicos";
import Depoimentos_section from "./components/Section-Depoimentos";
import Preco_Section from "./components/Section-Preco";
import SobreMim_Section from "./components/SobreMim-Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Servico />
      <Depoimentos_section />
      <Preco_Section /> 
      <SobreMim_Section />
    </div>
  );
}

export default App;
