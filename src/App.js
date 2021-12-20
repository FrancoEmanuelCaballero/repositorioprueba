//styles:
import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components:
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SectionOne from "./components/Main/SeccionOne";

function App() {
  return (
    <div className="container-fluid text-center ">
      <Header />
      <main className="container-fluid">
        <SectionOne />
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
