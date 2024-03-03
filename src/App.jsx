import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { register } from "swiper/element/bundle";
import Footer from "./components/Footer";
import SearchBooks from "./components/SearchBooks";

const App = () => {
  register();
  return (
    <div>
      <Header />
      <span className="appSerchBar">
        <SearchBooks />
      </span>

      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
