import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { register } from "swiper/element/bundle";

const App = () => {
  register();
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
