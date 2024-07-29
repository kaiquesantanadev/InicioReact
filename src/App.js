import Banner from './components/Banner/';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o caminho da imagem"/>
    </div>
  );
}

export default App;
