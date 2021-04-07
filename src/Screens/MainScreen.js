
import React from 'react';
import { Link } from 'react-router-dom';
import SigninScreen from './SigninScreen';



function MainScreen() {
  return (
    <div className="Main">
      <div className="main-wrapper">
        {/* <!-- header wrapper --> */}
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 navbar p-0">
                        <a href="index.html" className="logo" >
                        <img src="images/logo.png" alt="logo" className="light" />
                        <img src="images/logo.png" alt="logo" className="dark" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav nav-menu float-none text-center">
                                <li className="nav-item"><a className="nav-link" href="landing.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="season.html">Movies</a></li>
                                <li className="nav-item"><a className="nav-link" href="single.html">Web Series</a></li>
                                <li className="nav-item"><a className="nav-link" href="search.html">Music</a></li>
                                <li className="nav-item"><a className="nav-link" href="video.html">Short Movies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        
                        <div className="user-avater">
                            <img src="https://via.placeholder.com/50x50.png" alt="user" />
                            <div className="user-menu">
                                <ul>
                                    <li><Link to='/signin'><i className="ti-power-off"></i>Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-div">
                            <input type="text" placeholder="Seacrh"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- header wrapper -->
        <!-- banenr wrapper --> */}
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <span className="rnd">PREMIUM</span>
                                        <h2>Mother of  <br/>Brooklyn</h2>
                                        <span className="tag"><b>Rating</b></span>
                                        <span className="tag">4.0</span>
                                        <span className="tag"><b>Duration</b></span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>Radhe is a singing prodigy determined to follow in the classNameical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
                                        <a href="#" className="btn btn-lg btn-video"><img src="images/play.png" alt="icn" />Watch now</a>
                                    </div>
                                    <div className="right-wrap" style={{backgroundImage: "url(https://via.placeholder.com/700x500.png)"}}></div>
                                </div>
                            </div>

                            <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <h2>Mother of  <br/>Brooklyn</h2>
                                        <span className="tag"><b>Rating</b></span>
                                        <span className="tag">4.0</span>
                                        <span className="tag"><b>Duration</b></span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>Radhe is a singing prodigy determined to follow in the classNameical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
                                        <a href="#" className="btn btn-lg btn-video">
                                          <img src="images/play.png" alt="icn" />Watch now</a>
                                    </div>
                                    <div className="right-wrap" style={{backgroundImage: "url(https://via.placeholder.com/700x500.png)"}}></div>
                                </div>
                            </div>
                            
                            
                            <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <span className="rnd">PREMIUM</span>
                                        <h2>Mother of  <br/>Brooklyn</h2>
                                        <span className="tag"><b>Rating</b></span>
                                        <span className="tag">4.0</span>
                                        <span className="tag"><b>Duration</b></span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>Radhe is a singing prodigy determined to follow in the classNameical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
                                        <a href="#" className="btn btn-lg btn-video"><img src="images/play.png" alt="icn" />Watch now</a>
                                    </div>
                                    <div className="right-wrap" style={{backgroundImage: "url(https://via.placeholder.com/700x500.png)"}}></div>
                                </div>

                            </div>
                            <div className="owl-items">

                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <h2>Mother of  <br/>Brooklyn</h2>
                                        <span className="tag"><b>Rating</b></span>
                                        <span className="tag">4.0</span>
                                        <span className="tag"><b>Duration</b></span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>Radhe is a singing prodigy determined to follow in the classNameical footsteps of his grandfather. Tamanna is a YouTube pop sensation desperate to become .</p>
                                        <a href="#" className="btn btn-lg btn-video"><img src="images/play.png" alt="icn"/>Watch now</a>
                                    </div>
                                    <div className="right-wrap" style={{backgroundImage: "url(https://via.placeholder.com/700x500.png)"}}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- banenr wrapper -->
        <!-- slider wrapper --> */}
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-4">
                        <h2>Latest Movies</h2>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="slide-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Made in haven <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classNameical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Gravity <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Inspector <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Sky Staar <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>

                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Inspector <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Sky Staar <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider wrapper -->
        <!-- slider wrapper --> */}
        <div className="category-wrapper slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Movies byLanguage</h2>
                    </div>
                     
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="category-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <a href="search.html" className="category-wrap" style={{backgroundImage: "url(images/gb1.png)"}}><span>Assamese</span></a>
                            </div>

                            <div className="owl-items">
                                <a href="search.html" className="category-wrap" style={{backgroundImage: "url(images/gb2.png)"}}><span>Bodo</span></a>
                            </div>
                            <div className="owl-items">
                                <a href="search.html" className="category-wrap" style={{backgroundImage: "url(images/gb3.png)"}}><span>Khasi</span></a>
                            </div>
                            <div className="owl-items">
                                <a href="search.html" className="category-wrap" style={{backgroundImage: "url(images/gb4.png)"}}><span>Manipuri</span></a>
                            </div>

                            <div className="owl-items">
                                <a href="search.html" className="category-wrap" style={{backgroundImage: "url(images/gb2.png)"}}><span>Nepali</span></a>
                            </div>

                            <div className="owl-items">
                                <a href="search.html" className="category-wrap" style={{backgroundImage: "url(images/gb3.png)"}}><span>Mising</span></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>            
        </div>
        {/* <!-- slider wrapper -->
        <!-- slider wrapper --> */}
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Latest Music</h2>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="slide-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Second Man Earth <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image" /></div>
                                    <div className="slide-content">
                                        <h2>Defective Area <img src="images/plus.png" className="add-wishlist" alt="icon" /></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Law of Order <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Ravata of Sky <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>

                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Inspector <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image"><img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Sky Staar <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider wrapper -->
        <!-- crew wrapper --> */}
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Movies by Artists</h2>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="team-slider-full owl-carousel owl-theme">
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>David Wenham</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Johnny Depp</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Javier Bardem</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Brenton T</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Kaya Scodelario</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Kevin McNally</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>McNally</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Wenham</span></a>
                            </div>
                            <div className="owl-items"><a href="#" className="crew-wrap">
                              <img src="https://via.placeholder.com/400x400.png" alt="team"/>
                              <span>Kaya Scodelario</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- crew wrapper -->
        <!-- slider wrapper --> */}
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Latest Series</h2>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="slide-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <a className="slide-one slide-two" href="#">
                                    <div className="slide-image" style={{backgroundImage: "url(https://via.placeholder.com/400x400.png)"}}></div>
                                    <div className="slide-content">
                                        <h2>Batman Knight 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one slide-two" href="#">
                                    <div className="slide-image" style={{backgroundImage: "url(https://via.placeholder.com/400x400.png)"}}></div>
                                    <div className="slide-content">
                                        <h2>Gimini Man 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one slide-two" href="#">
                                    <div className="slide-image" style={{backgroundImage: "url(https://via.placeholder.com/400x400.png)"}}></div>
                                    <div className="slide-content">
                                        <h2>Create of Shadow 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one slide-two" href="#">
                                    <div className="slide-image" style={{backgroundImage: "url(https://via.placeholder.com/400x400.png)"}}></div>
                                    <div className="slide-content">
                                        <h2>Jusy Cry yourself 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>

                            <div className="owl-items">
                                <a className="slide-one slide-two" href="#">
                                    <div className="slide-image" style={{backgroundImage: "url(https://via.placeholder.com/400x400.png)"}}></div>
                                    <div className="slide-content">
                                        <h2>Create of Shadow 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one slide-two" href="#">
                                    <div className="slide-image" style={{backgroundImage: "url(https://via.placeholder.com/400x400.png)"}}></div>
                                    <div className="slide-content">
                                        <h2>Jusy Cry yourself 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider wrapper -->
        <!-- slider wrapper --> */}
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Latest Short Movies</h2>
                    </div>
                     
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="slide-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Second Man Earth 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Defective Area 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Law of Order 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Ravata of Sky 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>

                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Law of Order 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a className="slide-one" href="single.html">
                                    <div className="slide-image">
                                      <img src="https://via.placeholder.com/400x400.png" alt="image"/></div>
                                    <div className="slide-content">
                                        <h2>Ravata of Sky 
                                          <img src="images/plus.png" className="add-wishlist" alt="icon"/></h2>
                                        <p>Radhe is a singing prodigy determined to follow in the classical footsteps of his grandfather.</p>
                                        <span className="tag">2 h 20 min</span>
                                        <span className="tag">2020</span>
                                        
                                        <span className="tag"><b>16+</b></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- slider wrapper -->
        <!-- footer wrapper --> */}
        <div className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 lower-footer"></div>
                    <div className="col-sm-6">
                        <p className="copyright-text">© 2020 copyright. All rights reserved.</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <p className="float-right copyright-text">
                        <a href="#">Privacy Policy</a> | 
                        <a href="#">Terms of Use</a> | 
                        <a href="#">Refund Policy</a> | 
                        <a href="#">Help</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer wrapper --> */}

    </div>

    <div className="player-container lightbox" style={{display: "none" }}>
        <a href="#" className="close-video-player btn-lightbox-close"><i className="ti-close"></i></a>
        <div className="player">
            <video id='video' src='https://via.placeholder.com/1330x666.png' playsinline></video>
                    <div className='play-btn-big'></div>
                    <div className='controls'>
                        <div className="time"><span className="time-current"></span><span className="time-total"></span></div>
                        <div className='progress'>
                            <div className='progress-filled'></div>
                        </div>
                        <div className='controls-main'>
                            <div className='controls-left'>
                                <div className='volume'>
                                    <div className='volume-btn loud'>
                                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.75497 17.6928H2C0.89543 17.6928 0 16.7973 0 15.6928V8.30611C0 7.20152 0.895431 6.30611 2 6.30611H6.75504L13.9555 0.237289C14.6058 -0.310807 15.6 0.151473 15.6 1.00191V22.997C15.6 23.8475 14.6058 24.3098 13.9555 23.7617L6.75497 17.6928Z" transform="translate(0 0.000518799)" fill="white"/>
                                            <path id="volume-low" d="M0 9.87787C2.87188 9.87787 5.2 7.66663 5.2 4.93893C5.2 2.21124 2.87188 0 0 0V2C1.86563 2 3.2 3.41162 3.2 4.93893C3.2 6.46625 1.86563 7.87787 0 7.87787V9.87787Z" transform="translate(17.3333 7.44955)" fill="white"/>

                                            <path id="volume-high" d="M0 16.4631C4.78647 16.4631 8.66667 12.7777 8.66667 8.23157C8.66667 3.68539 4.78647 0 0 0V2C3.78022 2 6.66667 4.88577 6.66667 8.23157C6.66667 11.5773 3.78022 14.4631 0 14.4631V16.4631Z" transform="translate(17.3333 4.15689)" fill="white"/> 
                                    <path id="volume-off" d="M1.22565 0L0 1.16412L3.06413 4.0744L0 6.98471L1.22565 8.14883L4.28978 5.23853L7.35391 8.14883L8.57956 6.98471L5.51544 4.0744L8.57956 1.16412L7.35391 0L4.28978 2.91031L1.22565 0Z" transform="translate(17.3769 8.31403)" fill="white"/>
                                        </svg>

                                    </div>
                                    <div className='volume-slider'>
                                        <div className='volume-filled'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='play-btn paused'></div>
                            <div className="controls-right">
                                <div className='speed'>
                                    <ul className='speed-list'>
                                        <li className='speed-item' data-speed='0.5'>0.5x</li>
                                        <li className='speed-item' data-speed='0.75'>0.75x</li>
                                        <li className='speed-item active' data-speed='1'>1x</li>
                                        <li className='speed-item' data-speed='1.5'>1.5x</li>
                                        <li className='speed-item' data-speed='2'>2x</li>
                                    </ul>
                                </div>
                                <div className='fullscreen'>
                                    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0V-1.5H-1.5V0H0ZM0 18H-1.5V19.5H0V18ZM26 18V19.5H27.5V18H26ZM26 0H27.5V-1.5H26V0ZM1.5 6.54545V0H-1.5V6.54545H1.5ZM0 1.5H10.1111V-1.5H0V1.5ZM-1.5 11.4545V18H1.5V11.4545H-1.5ZM0 19.5H10.1111V16.5H0V19.5ZM24.5 11.4545V18H27.5V11.4545H24.5ZM26 16.5H15.8889V19.5H26V16.5ZM27.5 6.54545V0H24.5V6.54545H27.5ZM26 -1.5H15.8889V1.5H26V-1.5Z" transform="translate(2 2)" fill="white"/>
                                    </svg>

            </div>
            </div>


            </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default MainScreen;
