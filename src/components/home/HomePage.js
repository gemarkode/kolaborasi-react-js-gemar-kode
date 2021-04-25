import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="py-5 bg-one text-center" id="home">
          <div className="container py-5 mt-5 mb-3 col-lg-6 mx-auto">
            <h1 className="text-dark mt-3">GEMAR KODE</h1>
            <p className="lead text-dark col-lg-12">Membangun ekosistem programmer dikalangan remaja yang terbiasa dengan open source, dan terbiasa menggunakan sistem operasi berbasis linux</p>
            <p>

              <a href="./about/" className="mb-5 btn btn-secondary my-2">Learn Mode</a>
            </p>
          </div>
        </section>
        <div className="bg-white py-5" id="about">
          <div className="container py-5">
            <div className="row align-items-center ">
              <div className="col-lg-7 order-2 order-lg-1">
                <h2 className="font-weight-light">OVERVIEW</h2>
                <p className="font-italic text-muted mb-4">Gemar Kode merupakan komunitas penggiat kode atau komunitas programmer. Gemar Kode dibentuk oleh sekumpulan Remaja di Kabupaten Pemalang dan memiliki anggota yang tersebar di berbagai kota di Indonesia.</p>

              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img src="../img/about.png" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            </div>
          </div>
        </div>
        <div className="bg-light py-5">
          <div className="container py-5">

            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto"><img src="../img/3.png" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
              <div className="col-lg-6">
                <h2 className="font-weight-light">LEARN TO CODE</h2>
                <p className="font-italic text-muted">Selain belajar pemrograman bersama, Gemar Kode juga mengkampanyekan kepada para programmer khususnya remaja untuk menggunakan sistem operasi berbasis linux, dan lebih cenderung untuk terjun kedunia open source. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center ">
              <div className="col-lg-7 order-2 order-lg-1">
                <h2 className="font-weight-light">FREE TIME TO STUDY</h2>
                <p className="font-italic text-muted mb-4">Gemar Kode aktif mengisi waktu luang dengan mengerjakan project bersama anggota lainya.
         kamu juga bisa mengerjakan project pribadi bersama-sama dengan aggota lainya, agar anggota lain juga belajar apa yang telah kamu pelajari.</p>

              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img src="../img/2.png" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            </div>
          </div>
        </div>
        <div className="bg-light py-5" id="community">
          <div className="col-lg-5 mx-auto">
            <h1 className="text-dark fontone mt-4 text-center">KOMUNITAS GEMAR KODE</h1>
            <p className="fontwo text-muted text-center">Bergabung dan menjadi bagian dari komunitas Gemar Kode, dan mulailah buat sesuatu yang berguna untuk banyak orang.</p>

          </div>
          <div className="row py-5 col-lg-6 mx-auto">

            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
              <div className="card rounded border-0 bg-white">
                <a href="https://web.facebook.com/gemarkode/">
                  <div className="card-body p-5 text-center"><i className="fab fa-facebook fa-3x  mb-3 text-primary"></i>
                    <h5 className="text-dark">Facebook</h5>
                    <p className="small text-muted font-italic">Gemar Kode</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
              <div className="card rounded border-0 bg-white">
                <div className="card-body p-5 text-center"><i className="fab fa-instagram fa-3x  mb-3 text-muted"></i>
                  <h5>Instagram</h5>
                  <p className="small text-muted font-italic">Coming Soon</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-three py-5" id="developer">
          <div className="col-lg-5 mx-auto">
            <h1 className="text-dark fontone mt-4 text-center">GEMAR KODE FOR EVERYONE</h1>
            <p className="fontwo text-muted text-center">Project kami bisa dipakai oleh siapapun, dan dikembangkan secara bebas.</p>

          </div>
          <div className="row py-5 col-lg-10 mx-auto">

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="card rounded border-0 bg-light">
                <div className="card-body p-5 text-center"><i className="fa fa-users fa-3x  mb-3 text-success"></i>
                  <h5>Kontribusi Project</h5>
                  <p className="small text-muted font-italic">Kamu bisa berkontribusi dalam project team apapun bersama dengan Developer Gemar Kode melalui Github Kami</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="card rounded border-0 bg-light">
                <div className="card-body p-5 text-center"><i className="fab fa-linux fa-3x  mb-3 text-success"></i>
                  <h5>Linux Untuk Semua</h5>
                  <p className="small text-muted font-italic">Dalam mengembangkan project Open Source, Gemar Kode menyarankan kamu untuk memakai sistem operasi berbasis linux</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="card rounded border-0 bg-light">
                <div className="card-body p-5 text-center"><i className="fa fa-clock fa-3x  mb-3 text-success"></i>
                  <h5>Waktu Yang Bebas</h5>
                  <p className="small text-muted font-italic">Kami aktif saat waktu luang, memanfaatkan waktu luang untuk belajar pemrograman, dan tidak menggangu aktifitas anggota lain</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-two py-5">
          <div className="container py-5">
            <div className="row align-items-center mx-auto col-lg-8">
              <div className="col-lg-12 order-2 order-lg-1 text-center">
                <h2 className="font-weight-light">DEVELOPER GEMAR KODE</h2>
                <p className="font-italic text-muted mb-4">Gemar Kode berkolaborasi di Github dalam setiap projectnya. kamu bisa bergabung dengan kami dan mulai membangun open source bersama kami.</p>
                <a href="https://github.com/gemarkode" className="btn btn-dark my-2"><i className="fab fa-github"></i> Github</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
