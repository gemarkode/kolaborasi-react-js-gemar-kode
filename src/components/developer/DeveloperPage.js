import React, {Component} from 'react';

class DeveloperPage extends Component{
  render(){
    return (
    <div>

      <div class="bg-three py-5">
      <div class="col-lg-5 mx-auto">
      <h1 class="text-dark fontone mt-4 text-center">GEMAR KODE FOR EVERYONE</h1>
      <p class="fontwo text-muted text-center">Project kami bisa dipakai oleh siapapun, dan dikembangkan secara bebas.</p>

      </div>
 <div class="row py-5 col-lg-10 mx-auto">

     <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
         <div class="card rounded border-0 bg-light">
             <div class="card-body p-5 text-center"><i class="fa fa-users fa-3x  mb-3 text-success"></i>
                 <h5>Kontribusi Project</h5>
                 <p class="small text-muted font-italic">Kamu bisa berkontribusi dalam project team apapun bersama dengan Developer Gemar Kode melalui Github Kami</p>
             </div>
         </div>
     </div>
     <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
         <div class="card rounded border-0 bg-light">
             <div class="card-body p-5 text-center"><i class="fab fa-linux fa-3x  mb-3 text-success"></i>
                 <h5>Linux Untuk Semua</h5>
                 <p class="small text-muted font-italic">Dalam mengembangkan project Open Source, Gemar Kode menyarankan kamu untuk memakai sistem operasi berbasis linux</p>
             </div>
         </div>
     </div>
     <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
         <div class="card rounded border-0 bg-light">
             <div class="card-body p-5 text-center"><i class="fa fa-clock fa-3x  mb-3 text-success"></i>
                 <h5>Waktu Yang Bebas</h5>
                 <p class="small text-muted font-italic">Kami aktif saat waktu luang, memanfaatkan waktu luang untuk belajar pemrograman, dan tidak menggangu aktifitas anggota lain</p>
             </div>
         </div>
     </div>

 </div>
 </div>

<div class="bg-two py-5">
  <div class="container py-5">
    <div class="row align-items-center mx-auto col-lg-8">
      <div class="col-lg-12 order-2 order-lg-1 text-center">
        <h2 class="font-weight-light">DEVELOPER GEMAR KODE</h2>
        <p class="font-italic text-muted mb-4">Gemar Kode berkolaborasi di Github dalam setiap projectnya. kamu bisa bergabung dengan kami dan mulai membangun open source bersama kami.</p>
    <a href="https://github.com/gemarkode" class="btn btn-dark my-2"><i class="fab fa-github"></i> Github</a>
      </div>

    </div>
  </div>
</div>
        </div>)
  }
}

export default DeveloperPage;
