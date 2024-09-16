import Navbar from './components/Navbar/Navbar';
import Routing from './components/Routing/Routing';
import { NavbarProvider } from './contexts/NavbarContext';


function App() {
  return (
    <NavbarProvider>
      <Navbar />
      <main>
        <Routing />
      </main>
    </NavbarProvider>
  );
}

export default App;
