// import React, { useEffect, useState } from 'react'
// // import ReactDOM from "react-dom"
// import { Link } from 'react-router-dom'

// function Welcome() {
//     const [navLinks, setNavLinks] = useState([]);

//     useEffect(() => {
//         const navs = [
//             { name: "Bourbon", path: "/bourbon" },
//             { name: "Rye", path: "/rye" },
//             { name: "American", path: "/american" },
//             { name: "Irish", path: "/irish" },
//             { name: "Scotch", path: "/scotch" },
//             { name: "Full Stock", path: "/whiskey" },

//         ];
//         setNavLinks(navs);
//     }, []);


//     return (
//         <div>
//             <h1>The Spirit Within</h1>

//             <div className="btn-group">
//                 <button
//                     type="button"
//                     className="btn btn-primary dropdown-toggle"
//                     data-bs-toggle="dropdown"
//                     data-bs-display="static"
//                     aria-expanded="false"
//                 >
//                     Spirits
//                 </button>
//                 <ul className="dropdown-menu dropdown-menu-end">
//                     {navLinks.map((ele, index) => (
//                         <li key={index}>
//                             <Link to={ele.path}>
//                                 <button className="dropdown-item" type="button">
//                                     {ele.name}
//                                 </button>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//     </div>
// )};






//             export default Welcome

import React, { useEffect, useState } from 'react'
// import ReactDOM from "react-dom"
import { Link } from 'react-router-dom'
 
function Welcome() {
    const [navLinks, setNavLinks] = useState([]);
 
    useEffect(() => {
        const navs = [
            { name: "Bourbon", path: "/bourbon" },
            { name: "Rye", path: "/rye" },
            { name: "American", path: "/american" },
            { name: "Irish", path: "/irish" },
            { name: "Scotch", path: "/scotch" },
            { name: "Full Stock", path: "/whiskey" },
 
        ];
        setNavLinks(navs);
    }, []);
 
 
    return (
        <div>
            <h1 className="welcome">The Spirit Within</h1>
 
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                >
                    Spirits
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {navLinks.map((ele, index) => (
                        <li key={index}>
                            <Link to={ele.path}>
                                <button className="dropdown-item" type="button">
                                    {ele.name}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    </div>
)};
 
 
 
 
 
 
            export default Welcome