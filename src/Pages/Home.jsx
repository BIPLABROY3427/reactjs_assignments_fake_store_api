import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductItem from '../Components/ProductItem';
import { Helmet } from "react-helmet";
const Home = () => {
  const [data, setData] = useState([]);
  const [Jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  // const fetchDatas = async () => {
  //   const response = await axios.get('https://fakestoreapi.com/products');
  //   const Jewelery = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  //   const menres = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  //   const womenres = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing");
  //   const electronicsproduct = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  //   setData(response.data);
  //   setJewelery(Jewelery.data);
  //   setElectronics(electronicsproduct.data);
  //   setMen(menres.data);
  //   setWomen(womenres.data);
  // }
  const fetchData = async () => {
    try {
      const [allProducts, jewelery, menClothing, womenClothing, electronics] = await Promise.all([
        axios.get('https://fakestoreapi.com/products'),
        axios.get('https://fakestoreapi.com/products/category/jewelery'),
        axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing'),
        axios.get("https://fakestoreapi.com/products/category/women's%20clothing"),
        axios.get('https://fakestoreapi.com/products/category/electronics')
      ]);
      setData(allProducts.data);
      setJewelery(jewelery.data);
      setMen(menClothing.data);
      setWomen(womenClothing.data);
      setElectronics(electronics.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //Promise.all fast response
  useEffect(() => {
    fetchData();
  }, []);
  const settings = {
    items: 1,
    margin: 4,
    nav: false,
    loop: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    smartSpeed: 1000,
    stagePadding: 0,
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      375: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 4
      },
      1400: {
        items: 5
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>Athena Infonomics</title>
        <meta name="description" content="Athena Infonomics is an impact solutions group that applies social science research, data analytics, and technology to advance global development." />
      </Helmet>
      <div className="container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" className="d-block w-100" alt="carousel1" />
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20" className="d-block w-100" alt="carousel2" />
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20" className="d-block w-100" alt="carousel3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card mt-3">
          <div className="card-header">
            <h5 className='fs-5 mb-0'>All Product</h5>
          </div>
          <div className="card-body productitems">
            <OwlCarousel {...settings}>
              {Array.isArray(data) && data.map((item, index) => {
                return (
                  <ProductItem item={item} index={index} />
                )
              })}
            </OwlCarousel>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">
            <h5 className='fs-5 mb-0'>Jewelery</h5>
          </div>
          <div className="card-body productitems">
            <OwlCarousel {...settings}>
              {Array.isArray(Jewelery) && Jewelery.map((item, index) => {
                return (
                  <ProductItem item={item} index={index} />
                )
              })}
            </OwlCarousel>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">
            <h5 className='fs-5 mb-0'>Electronics</h5>
          </div>
          <div className="card-body productitems">
            <OwlCarousel {...settings}>
              {Array.isArray(electronics) && electronics.map((item, index) => {
                return (
                  <ProductItem item={item} index={index} />
                )
              })}
            </OwlCarousel>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">
            <h5 className='fs-5 mb-0'>Men</h5>
          </div>
          <div className="card-body productitems">
            <OwlCarousel {...settings}>
              {Array.isArray(men) && men.map((item, index) => {
                return (
                  <ProductItem item={item} index={index} />
                )
              })}
            </OwlCarousel>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">
            <h5 className='fs-5 mb-0'>Women</h5>
          </div>
          <div className="card-body productitems">
            <OwlCarousel {...settings}>
              {Array.isArray(women) && women.map((item, index) => {
                return (
                  <ProductItem item={item} index={index} />
                )
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home