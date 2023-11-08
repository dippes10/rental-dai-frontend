// import React, { useState } from 'react';
// import Link  from 'next/link';

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header>
//       <div className="logo">
//         <Link to="/">Your Logo</Link>
//       </div>
//       <nav className={`nav-menu ${showMenu ? 'show' : ''}`}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           {/* Add more navigation items as needed */}
//         </ul>
//       </nav>
//       <button onClick={handleMenuToggle} className="menu-toggle">
//         Menu
//       </button>
//     </header>
//   );
// };

// export default Header;
