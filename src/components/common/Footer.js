import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

      <footer className="bg-light">
        <div className="container  text-center py-5 ">

          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <b className="copyright">
                Developer By <i className="fa fa-code text-primary mt-3"></i> Gemar Kode<br />
              </b>

              <p className="copyright text-muted mt-3 col-lg-11 mx-auto">Kabupaten Pemalang <i className="fa fa-heart text-danger"></i> Indonesia</p>


            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
