import './App.css';
import { Apresentation, Folder, Footer, HeaderDesktop } from './ui/components';

function App() {
  return (
    <div className="App">
      <HeaderDesktop />
      <Apresentation />
      <Folder />
      <Footer />
    </div>
  );
}

export default App;
