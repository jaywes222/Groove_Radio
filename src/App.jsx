import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Routing from './components/Routing/Routing';
import { NavbarProvider } from './contexts/NavbarContext';
import { UserProvider } from './contexts/userContext';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(isAuthenticated === 'true');
  }, []);

  return (
    <UserProvider>
      <NavbarProvider>
        <Navbar />
        <main>
          <Routing />
        </main>
      </NavbarProvider>
    </UserProvider>
  );
}

export default App;
