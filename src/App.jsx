import "./App.css";
import Airbnb from "./pages/Airbnb";
import { Route, Routes } from "react-router-dom";
import Icon from "./components/Icon";
import Omg from "./components/Omg";
import Lakefront from "./components/Lakefront";
import Castles from "./components/Castles";
import Farms from "./components/Farms";
import Cabin from "./components/Cabin";
import Rooms from "./components/Rooms";
import Treehouse from "./components/Treehouse";
import Containers from "./components/Containers";
import Amazingview from "./components/Amazingview";
import Amazingpools from "./components/Amazingpools";
import Beachfront from "./components/Beachfront";
import Luxe from "./components/Luxe";
import Product_deatails from "./components/Product_deatails";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Airbnb />}>
          <Route index element={<Icon />} />
          <Route path="/omg" element={<Omg />} />
          <Route path="/lakefront" element={<Lakefront />} />
          <Route path="/castle" element={<Castles />} />
          <Route path="/farms" element={<Farms />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/amazingview" element={<Amazingview />} />
          <Route path="/amazingpool" element={<Amazingpools />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/cabin" element={<Cabin />} />
          <Route path="/beachfront" element={<Beachfront />} />
          <Route path="/treehouse" element={<Treehouse />} />
          <Route path="/luxe" element={<Luxe />} />
          <Route path="/product_deatails/:id" element={<Product_deatails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
