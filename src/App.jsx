import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { register } from "swiper/element/bundle";
import Footer from "./components/Footer";

const App = () => {
  register();
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
