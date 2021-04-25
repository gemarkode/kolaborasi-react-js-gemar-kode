import React, {Component} from 'react';
class Navbar extends Component {
  render(){
    return (

         <nav className="navbar  navbar-expand-lg navbar-light py-3 bg-white fixed-top ">
           <div className="container">
             <a className="navbar-brand text-secondary fonttwo" href="/">GEMAR KODE</a>
             <button className="navbar-toggler border-white" type="button" data-toggle="collapse" data-target="#navbarResponsive"
               aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fa fa-align-right"></i>
             </button>
             <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item active">
                <a className="nav-link" href="#home">Home</a>
                 </li>
                 <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                 </li>
                 <li className="nav-item">
                <a className="nav-link" href="#community">Community</a>
                 </li>
                 <li className="nav-item">
                <a className="nav-link" href="#developer">Developer</a>
                 </li>
              
               </ul>
             </div>
           </div>
         </nav>

        )
  }
}

export default Navbar;
