import React from "react";
import ticket from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/t.png";
import ap from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/ap.jpg";
import omg from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/omg.jpg";
import arctic from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/arctic.jpg";
import av from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/av.jpg";
import bc from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/b&c.jpg";
import barn from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/barn.jpg";
import beach from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/beach.jpg";
import bf from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/bf.jpg";
import boat from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/boat.jpg";
import bowl from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/bowl.jpg";
import cabin from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/cabin.jpg";
import campervan from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/campervan.jpg";
import cassas from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/cassas.jpg";
import cave from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/cave.jpg";
import chefhat from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/chef hat.jpg";
import chesstower from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/chess tower.jpg";
import container from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/container.jpg";
import craetive from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/craetive.jpg";
import cs from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/cs.jpg";
import cycladic from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/cycladic.jpg";
import desert from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/desert.jpg";
import design from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/design.jpg";
import dome from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/dome.jpg";
import eh from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/eh.jpg";
import farm from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/farm.jpg";
import golf from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/golf.jpg";
import hanok from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/hanok.jpg";
import houseboat from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/houseboat.jpg";
import island from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/island.jpg";
import lake from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/lake.jpg";
import lf from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/lf.jpg";
import luxe from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/luxe.jpg";
import mansion from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/mansion.jpg";
import palm from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/palm.jpg";
import piano from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/piano.jpg";
import pissatwr from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/pissatwr.jpg";
import riads from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/riads.jpg";
import room from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/room.jpg";
import ryokans from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/ryokans.jpg";
import shephard from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/shephard.jpg";
import skii from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/skii.jpg";
import skiinout from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/ski-in-out.jpg";
import surfing from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/surfing.jpg";
import tent from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/tent.jpg";
import th from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/th.jpg";
import minus from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/minus.jpg";
import tiny from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/tiny.jpg";
import top from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/top.jpg";
import tower from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/tower.jpg";
import trending from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/trending.jpg";
import trianglehouse from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/triangle house.jpg";
import trulli from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/trulli.jpg";
import vine from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/vine.jpg";
import wall from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/wall.jpg";
import wheelchair from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/wheelchair.jpg";
import windmill from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/windmill.jpg";
import yurts from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/yurts.jpg";
import offthegrid from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/off-the-grid.jpg";

import nationalpark from "../../assets/Airbnb _ Holiday rentals_ cabins_ beach houses _ more/logo/national park.jpg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="icons">
          <Link to={"/"}>
            <li className="ticket">
              <img src={ticket} alt="" />
              <div className="ticket-div">
                <p>Icons</p>
              </div>
            </li>
          </Link>
          <Link to={"/omg"}>
            <li className="ticket">
              <img src={omg} alt="" />
              <div className="ticket-div">
                <p>OMG!</p>
              </div>
            </li>
          </Link>
          <Link to={"/lakefront"}>
            <li className="ticket">
              <img src={lf} alt="" />
              <div className="ticket-div">
                <p>LakeFront</p>
              </div>
            </li>
          </Link>
          <Link to={"/castle"}>
            <li className="ticket">
              <img src={chesstower} alt="" />
              <div className="ticket-div">
                <p>Castles</p>
              </div>
            </li>
          </Link>
          <Link to={"/farms"}>
            <li className="ticket">
              <img src={farm} alt="" />
              <div className="ticket-div">
                <p>Farms</p>
              </div>
            </li>
          </Link>
          <Link to={"/containers"}>
            <li className="ticket">
              <img src={container} alt="" />
              <div className="ticket-div">
                <p>Containers</p>
              </div>
            </li>
          </Link>
          <Link to={"/amazingview"}>
            <li className="ticket">
              <img src={av} alt="" />
              <div className="ticket-div">
                <div className="flex gap-1">
                  <p>Amazing</p>
                  <p>views</p>
                </div>
              </div>
            </li>
          </Link>
          <Link to={"amazingpool"}>
            <li className="ticket">
              <img src={ap} alt="" />
              <div className="ticket-div">
                <div className="flex gap-1">
                  <p>Amazing</p>
                  <p>pools</p>
                </div>
              </div>
            </li>
          </Link>
          <Link to={"beachfront"}>
            <li className="ticket">
              <img src={bf} alt="" />
              <div className="ticket-div">
                <p>Beachfront</p>
              </div>
            </li>
          </Link>
          <Link to={"rooms"}>
            <li className="ticket">
              <img src={room} alt="" />
              <div className="ticket-div">
                <p>Rooms</p>
              </div>
            </li>
          </Link>
          <Link to={"treehouse"}>
            <li className="ticket">
              <img src={th} alt="" />
              <div className="ticket-div">
                <p>Treehouses</p>
              </div>
            </li>
          </Link>
          <Link to={"luxe"}>
            <li className="ticket">
              <img src={luxe} alt="" />
              <div className="ticket-div">
                <p>Luxe</p>
              </div>
            </li>
          </Link>
          <Link to={"cabin"}>
            <li className="ticket">
              <img src={cabin} alt="" />
              <div className="ticket-div">
                <p>Cabins</p>
              </div>
            </li>
          </Link>

          <li className="ticket">
            <img src={tiny} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>Tiny</p>
                <p>homes</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={island} alt="" />
            <div className="ticket-div">
              <p>Islends</p>
            </div>
          </li>
          <li className="ticket">
            <img src={cs} alt="" />
            <div className="ticket-div">
              <p>countryside</p>
            </div>
          </li>
          <li className="ticket">
            <img src={mansion} alt="" />
            <div className="ticket-div">
              <p>mansions</p>
            </div>
          </li>
          <li className="ticket">
            <img src={design} alt="" />
            <div className="ticket-div">
              <p>design</p>
            </div>
          </li>
          <li className="ticket">
            <img src={bc} alt="" />
            <div className="ticket-div">
              <p>bed&breackfast</p>
            </div>
          </li>
          <li className="ticket">
            <img src={eh} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>earth</p>
                <p>homes</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={offthegrid} alt="" />
            <div className="ticket-div">
              <div className="flex">
                <p>off</p>
                <p>-</p>
                <p>the</p>
                <p>-</p>
                <p>grid</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={arctic} alt="" />
            <div className="ticket-div">
              <p>arctic</p>
            </div>
          </li>
          <li className="ticket">
            <img src={pissatwr} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>top</p>
                <p>cities</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={top} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>top</p>
                <p>of</p>
                <p>the</p>
                <p>world</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={trending} alt="" />
            <div className="ticket-div">
              <p>trending</p>
            </div>
          </li>
          <li className="ticket">
            <img src={dome} alt="" />
            <div className="ticket-div">
              <p>domes</p>
            </div>
          </li>
          <li className="ticket">
            <img src={trianglehouse} alt="" />
            <div className="ticket-div">
              <div className="flex">
                <p>a</p>
                <p>-</p>
                <p>frames</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={piano} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>grand</p>
                <p>piano</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={palm} alt="" />
            <div className="ticket-div">
              <p>tropical</p>
            </div>
          </li>
          <li className="ticket">
            <img src={tent} alt="" />
            <div className="ticket-div">
              <p>camping</p>
            </div>
          </li>
          <li className="ticket">
            <img src={boat} alt="" />
            <div className="ticket-div">
              <p>boats</p>
            </div>
          </li>
          <li className="ticket">
            <img src={craetive} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>creative</p>
                <p>spaces</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={cave} alt="" />
            <div className="ticket-div">
              <p>caves</p>
            </div>
          </li>
          <li className="ticket">
            <img src={nationalpark} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>national</p>
                <p>parks</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={bowl} alt="" />
            <div className="ticket-div">
              <p>play</p>
            </div>
          </li>
          <li className="ticket">
            <img src={surfing} alt="" />
            <div className="ticket-div">
              <p>surfing</p>
            </div>
          </li>
          <li className="ticket">
            <img src={golf} alt="" />
            <div className="ticket-div">
              <p>golfing</p>
            </div>
          </li>
          <li className="ticket">
            <img src={barn} alt="" />
            <div className="ticket-div">
              <p>barns</p>
            </div>
          </li>
          <li className="ticket">
            <img src={vine} alt="" />
            <div className="ticket-div">
              <p>vineyard</p>
            </div>
          </li>
          <li className="ticket">
            <img src={houseboat} alt="" />
            <div className="ticket-div">
              <p>houseboats</p>
            </div>
          </li>
          <li className="ticket">
            <img src={chefhat} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>chef's</p>
                <p>kitchen</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={skii} alt="" />
            <div className="ticket-div">
              <p>skiing</p>
            </div>
          </li>
          <li className="ticket">
            <img src={ryokans} alt="" />
            <div className="ticket-div">
              <p>ryokans</p>
            </div>
          </li>
          <li className="ticket">
            <img src={wheelchair} alt="" />
            <div className="ticket-div">
              <p>adapted</p>
            </div>
          </li>
          <li className="ticket">
            <img src={windmill} alt="" />
            <div className="ticket-div">
              <p>windmills</p>
            </div>
          </li>
          <li className="ticket">
            <img src={skiinout} alt="" />
            <div className="ticket-div">
              <div className="flex">
                <p>ski</p>
                <p>-</p>
                <p>in</p>
                <p>/</p>
                <p>out</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={minus} alt="" />
            <div className="ticket-div">
              <p>minus</p>
            </div>
          </li>
          <li className="ticket">
            <img src={trulli} alt="" />
            <div className="ticket-div">
              <p>trulli</p>
            </div>
          </li>
          <li className="ticket">
            <img src={wall} alt="" />
            <div className="ticket-div">
              <p>dammusi</p>
            </div>
          </li>
          <li className="ticket">
            <img src={desert} alt="" />
            <div className="ticket-div">
              <p>desert</p>
            </div>
          </li>
          <li className="ticket">
            <img src={tower} alt="" />
            <div className="ticket-div">
              <p>towers</p>
            </div>
          </li>
          <li className="ticket">
            <img src={campervan} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>camper</p>
                <p>vans</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={hanok} alt="" />
            <div className="ticket-div">
              <p>hanoks</p>
            </div>
          </li>
          <li className="ticket">
            <img src={cycladic} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>cycladic</p>
                <p>homes</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={shephard} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>shepherd's</p>
                <p>hut</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={cassas} alt="" />
            <div className="ticket-div">
              <div className="flex gap-1">
                <p>casas</p>
                <p>particulares</p>
              </div>
            </div>
          </li>
          <li className="ticket">
            <img src={yurts} alt="" />
            <div className="ticket-div">
              <p>yurts</p>
            </div>
          </li>
          <li className="ticket">
            <img src={riads} alt="" />
            <div className="ticket-div">
              <p>riads</p>
            </div>
          </li>
          <li className="ticket">
            <img src={beach} alt="" />
            <div className="ticket-div">
              <p>beach</p>
            </div>
          </li>
          <li className="ticket">
            <img src={lake} alt="" />
            <div className="ticket-div">
              <p>lake</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
