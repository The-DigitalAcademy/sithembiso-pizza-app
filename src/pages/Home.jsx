import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.avif";
import "../styles/Home.css";

function Home() {
  
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> S'thembiso's Pizza </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
        <h2>065 388 6768</h2>
      </div>
    </div>
  );
}

export default Home;


























// import React from "react";
// import { Link } from "react-router-dom";
// import BannerImage from "../assets/pizza.jpeg";
// import "../styles/Home.css";

// function Home() {
//   return (
//     <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
//       <div className="headerContainer">
//         <h1> S'thembiso's Debonairs Pizza </h1>
//         <p> PIZZA TO FIT ANY TASTE</p>
//         <Link to="/menu">
//           <button> ORDER NOW </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;