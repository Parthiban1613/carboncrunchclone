import Navbar from "./components/navbar";
import Poster from "./components/poster";
import Carboncrunch from "./components/carboncrunch";
import About from "./components/About";
import DashBoard from "./components/dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Poster />
      <Carboncrunch />
      <About />
      <DashBoard />
      <Footer />
    </div>
  );
};

export default App;
