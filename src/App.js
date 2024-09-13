import './App.css';
import { Apresentation, Folder, FolderBrowser, Footer, HeaderDesktop } from './ui/components';

function App() {
  return (
    <div className="App">
      <HeaderDesktop />
      <Apresentation />
      <FolderBrowser />
      <Folder />
      <Footer />
    </div>
  );
}

export default App;
