import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Texts from "./components/info_text/Texts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Texts />
      <div className="btn-container">
        <button className="cta-btn">Download Now</button>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
