// import styles from "./styles.module.css";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>IndiGo ✈️</h1>
				
// 				<nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
    
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Book
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Flight</a></li>
//             <li><a class="dropdown-item" href="#">Group-Booking</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Hotels</a></li>
//           </ul>
//         </li>
// 		<li class="nav-item">
//           <a class="nav-link" href="#">ChekIn</a>
//         </li>
// 		<li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Manage
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Edit Booking</a></li>
//             <li><a class="dropdown-item" href="#">Change Flight</a></li>
// 			<li><a class="dropdown-item" href="#">Baggage Tag</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Plane B</a></li>
//           </ul>
//         </li>
        
// 		<li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Info
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Destination</a></li>
//             <li><a class="dropdown-item" href="#">Flight Status</a></li>
// 			<li><a class="dropdown-item" href="#">Cargo Service</a></li>
//             <li><a class="dropdown-item" href="#">Conditions of Carriage</a></li>
// 			<li><a class="dropdown-item" href="#">Fees & Charge</a></li>
// 			<li><a class="dropdown-item" href="#">Add-ons & Service</a></li>
// 			<li><a class="dropdown-item" href="#">Baggage</a></li>
//           </ul>
//         </li>
// 		<li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Login
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Costmer Login</a></li>
//             <li><a class="dropdown-item" href="#">Partner Login</a></li>
// 			<li><a class="dropdown-item" href="#">Sme Login</a></li>
           
//           </ul>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav> 
// 		</div>
// 	);
// };

// export default Main;
// import React, { useEffect, useState } from 'react';
// import styles from "./styles.module.css";
// import axios from "axios";

// const Main = () => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("No token found");

//         const response = await axios.get("http://localhost:8080/api/auth/me", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         console.log("User data fetched: ", response.data); // Log the user data
//         setUserData(response.data);
//       } catch (error) {
//         console.log("Error fetching user data", error);
//       }
//     };

//     getUser();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   return (
//     <div className={styles.main_container}>
//       <nav className={styles.navbar}>
//         <h1>IndiGo ✈️</h1>
        
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Book
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Flight</a></li>
//                     <li><a className="dropdown-item" href="#">Group-Booking</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="#">Hotels</a></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">CheckIn</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Manage
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Edit Booking</a></li>
//                     <li><a className="dropdown-item" href="#">Change Flight</a></li>
//                     <li><a className="dropdown-item" href="#">Baggage Tag</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="#">Plane B</a></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Info
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Destination</a></li>
//                     <li><a className="dropdown-item" href="#">Flight Status</a></li>
//                     <li><a className="dropdown-item" href="#">Cargo Service</a></li>
//                     <li><a className="dropdown-item" href="#">Conditions of Carriage</a></li>
//                     <li><a className="dropdown-item" href="#">Fees & Charges</a></li>
//                     <li><a className="dropdown-item" href="#">Add-ons & Services</a></li>
//                     <li><a className="dropdown-item" href="#">Baggage</a></li>
//                   </ul>
//                 </li>
//               </ul>
//               <form className="d-flex" role="search">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//               </form>
//             </div>
//           </div>
//         </nav>

//         <ul className="navbar-nav">
//           {userData && Object.keys(userData).length > 0 ? (
//             <>
//               <li style={{ color: "black", fontWeight: "bold" }}>{userData.firstName} {userData.lastName}</li>
//               <li>
//                   <img src={userdata.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
//                 </li>
//             </>
//           ) : (
//             <li>No user data found</li>
//           )}
//         </ul>
//         <button className={styles.white_btn} onClick={handleLogout}>
//                 Logout
//               </button>
//       </nav>
//     </div>
//   );
// };

// export default Main;

import React, { useEffect, useState, useRef } from 'react';
import styles from "./styles.module.css";
import axios from "axios";

const Main = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const userImageRef = useRef(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await axios.get("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("User data fetched: ", response.data);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching user data", error);
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>IndiGo ✈️</h1>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Book
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Flight</a></li>
                    <li><a className="dropdown-item" href="#">Group-Booking</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Hotels</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CheckIn</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Manage
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Edit Booking</a></li>
                    <li><a className="dropdown-item" href="#">Change Flight</a></li>
                    <li><a className="dropdown-item" href="#">Baggage Tag</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Plane B</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Info
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Destination</a></li>
                    <li><a className="dropdown-item" href="#">Flight Status</a></li>
                    <li><a className="dropdown-item" href="#">Cargo Service</a></li>
                    <li><a className="dropdown-item" href="#">Conditions of Carriage</a></li>
                    <li><a className="dropdown-item" href="#">Fees & Charges</a></li>
                    <li><a className="dropdown-item" href="#">Add-ons & Services</a></li>
                    <li><a className="dropdown-item" href="#">Baggage</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <ul className="navbar-nav">
          {loading ? (
            <li>Loading...</li>
          ) : userData && Object.keys(userData).length > 0 ? (
            <>
              <li style={{ color: "black", fontWeight: "bold" }}>{userData.firstName} {userData.lastName}</li>
              <li>
                <img 
                  ref={userImageRef}
                  src={userData.image || "default-image-url.png"} 
                  style={{ width: "50px", borderRadius: "50%" }} 
                  alt="User profile" 
                  onError={(e) => e.target.src = "default-image-url.png"} 
                />
              </li>
            </>
          ) : (
            <li>No user data found</li>
          )}
        </ul>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;

