import './App.css';
import { Apresentation, Folder, FolderBrowser, Footer, HeaderDesktop, Product } from './ui/components';

function App() {
  return (
    <div className="App">
      <HeaderDesktop />
      <Apresentation />
      <FolderBrowser />
      <Product />
      <Folder />
      <Footer />
    </div>
  );
}

export default App;
