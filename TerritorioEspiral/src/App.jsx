import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
    </>
  );
}

export default App;
