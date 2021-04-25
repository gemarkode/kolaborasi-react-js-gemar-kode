import React, { Component } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './components/home/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Page404 = ({ location }) => (
  <div className="App">
    <section className="py-5  bg-light text-center mt-5 mb-5">
      <div className="container mt-5 mb-5 py-5 col-lg-6 mx-auto">
        <h1 className="text-dark mt-3">404 Page Not Found</h1>
        <p className="lead text-muted col-lg-12">
          Maaf halaman yang anda cari tidak ditemukan. silahkan kembali ke halaman sebelumnya atau menuju ke halaman utama.
      </p>
        <p>

        </p>
      </div>
    </section>

  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>

            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route component={Page404} />
            </Switch>

          </div>
        </BrowserRouter>
        
        <Footer />
      </div>
    );
  }
}

export default App;
