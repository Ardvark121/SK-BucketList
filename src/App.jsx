// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
