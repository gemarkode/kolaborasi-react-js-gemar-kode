import React, {Component} from 'react';

class CommunityPage extends Component{
  render(){
    return (
      <div>
      <div class="bg-light py-5">
      <div class="col-lg-5 mx-auto">
      <h1 class="text-dark fontone mt-4 text-center">KOMUNITAS GEMAR KODE</h1>
      <p class="fontwo text-muted text-center">Bergabung dan menjadi bagian dari komunitas Gemar Kode, dan mulailah buat sesuatu yang berguna untuk banyak orang.</p>

      </div>
 <div class="row py-5 col-lg-6 mx-auto">

     <div class="col-lg-6 col-md-6 mb-4 mb-lg-0">
         <div class="card rounded border-0 bg-white">
         <a href="https://web.facebook.com/gemarkode/">
             <div class="card-body p-5 text-center"><i class="fab fa-facebook fa-3x  mb-3 text-primary"></i>
                 <h5 class="text-dark">Facebook</h5>
                 <p class="small text-muted font-italic">Gemar Kode</p>
             </div>
             </a>
         </div>
     </div>

     <div class="col-lg-6 col-md-6 mb-4 mb-lg-0">
         <div class="card rounded border-0 bg-white">
             <div class="card-body p-5 text-center"><i class="fab fa-instagram fa-3x  mb-3 text-muted"></i>
                 <h5>Instagram</h5>
                 <p class="small text-muted font-italic">Coming Soon</p>
             </div>
         </div>
     </div>

 </div>
 </div>
  </div>)
  }
}

export default CommunityPage;
