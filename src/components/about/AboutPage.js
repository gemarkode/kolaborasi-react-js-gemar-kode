import React, {Component} from 'react';

class AboutPage extends Component{
  render(){
    return (
<div>
      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center ">
            <div class="col-lg-7 order-2 order-lg-1">
              <h2 class="font-weight-light">OVERVIEW</h2>
              <p class="font-italic text-muted mb-4">Gemar Kode merupakan komunitas penggiat kode atau komunitas programmer. Gemar Kode dibentuk oleh sekumpulan Remaja di Kabupaten Pemalang dan memiliki anggota yang tersebar di berbagai kota di Indonesia.</p>

            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src="../img/about.png" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
          </div>
        </div>
      </div>
<div class="bg-light py-5">
<div class="container py-5">

  <div class="row align-items-center">
    <div class="col-lg-5 px-5 mx-auto"><img src="../img/3.png" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    <div class="col-lg-6">
      <h2 class="font-weight-light">LEARN TO CODE</h2>
      <p class="font-italic text-muted">Selain belajar pemrograman bersama, Gemar Kode juga mengkampanyekan kepada para programmer khususnya remaja untuk menggunakan sistem operasi berbasis linux, dan lebih cenderung untuk terjun kedunia open source. </p>
    </div>
  </div>
</div>
</div>
<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center ">
      <div class="col-lg-7 order-2 order-lg-1">
        <h2 class="font-weight-light">FREE TIME TO STUDY</h2>
        <p class="font-italic text-muted mb-4">Gemar Kode aktif mengisi waktu luang dengan mengerjakan project bersama anggota lainya.
         kamu juga bisa mengerjakan project pribadi bersama-sama dengan aggota lainya, agar anggota lain juga belajar apa yang telah kamu pelajari.</p>

      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
        <img src="../img/2.png" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
    </div>
  </div>
</div>
</div>
        )
  }
}

export default AboutPage;
