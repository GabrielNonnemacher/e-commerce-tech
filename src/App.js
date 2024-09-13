import './App.css';
import { Apresentation, Folder, FolderBrowser, Footer, HeaderDesktop } from './ui/components';

function App() {
  const a = ["a", "a", "a", "a","a"]
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
