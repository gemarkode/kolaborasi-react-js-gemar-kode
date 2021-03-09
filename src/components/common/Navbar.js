import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
  render(){
    return (

         <nav class="navbar  navbar-expand-lg navbar-light py-3 bg-white static-top ">
           <div class="container">
             <a class="navbar-brand text-secondary fonttwo" href="/">GEMAR KODE</a>
             <button class="navbar-toggler border-white" type="button" data-toggle="collapse" data-target="#navbarResponsive"
               aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <i class="fa fa-align-right"></i>
             </button>
             <div class="collapse navbar-collapse" id="navbarResponsive">
               <ul class="navbar-nav ml-auto">
                 <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
                 </li>
                 <li class="nav-item">
                  <Link class="nav-link" to="/about/">About</Link>
                 </li>
                 <li class="nav-item">
                <Link class="nav-link" to="/community/">Community</Link>
                 </li>
                 <li class="nav-item">
                <Link class="nav-link" to="/developer/">Developer</Link>
                 </li>
                 <li class="nav-item">
                <Link class="nav-link" to="/blog/">blog</Link>
                 </li>
               </ul>
             </div>
           </div>
         </nav>

        )
  }
}

export default Navbar;
