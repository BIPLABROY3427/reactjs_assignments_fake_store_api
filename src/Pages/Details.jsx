import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import star from '../img/starrating.svg'
import staroff from '../img/star.svg'
import axios from 'axios';
import { Helmet } from "react-helmet";
const Details = () => {
    const navigate=useNavigate();
    const [widhlist, setWidhlist] = useState(false);
    const [mainimagesrc, setmainimagesrc] = useState('');
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        response.data.length < 1 && navigate('/');
        setDetails(response.data);
        response.data.image && setmainimagesrc(response.data.image);
    }
    useEffect(() => {
        fetchData();
    }, []);
    let INR = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });
    return (
        <>
            <Helmet>
                {/* //seo  */}
                {details.title && <title>{details.title}</title>}
                {details.title && <meta name="description" content={details.description} />}
                {/* //seo  */}
            </Helmet>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{details.category && details.category}</li>
                    </ol>
                </nav>
                <div className="row justify-content-center align-items-start g-2">
                    <div className="col-12 col-md-6">
                        <div className="productparent card">
                            <img src={mainimagesrc} className="pddetailsimage" alt="..." />
                            <i className={widhlist ? 'fa-solid fa-heart pdwishlist pointer fs-3 text-danger' : 'fa-regular fa-heart pdwishlist pointer fs-3 text-danger'} onClick={() => setWidhlist(!widhlist)}></i>
                        </div>
                        <div className="d-flex justify-content-center align-items-center g-2">
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70&crop=false" className="pdmoreimage" alt="moreimage" onMouseOver={() => setmainimagesrc("https://rukminim2.flixcart.com/image/416/416/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70&crop=false")} />
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/a/w/p/-original-imagfdeqqe6kkuxw.jpeg?q=70&crop=false" className="pdmoreimage" alt="moreimage" onMouseOver={() => setmainimagesrc("https://rukminim2.flixcart.com/image/416/416/xif0q/computer/a/w/p/-original-imagfdeqqe6kkuxw.jpeg?q=70&crop=false")} />
                            <img src={details.image && details.image} className="pdmoreimage" alt="moreimage" onMouseOver={() => setmainimagesrc(details.image)} />
                            <img src={details.image && details.image} className="pdmoreimage" alt="moreimage" onMouseOver={() => setmainimagesrc(details.image)} />
                        </div>
                        <div className="d-flex justify-content-between align-items-center g-2">
                            <button className="btn w-100 bg-danger text-light mx-2">BUY NOW</button>
                            <button className="btn w-100 bg-success text-light mx-2">ADD TO CART</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h1 className="card-title fs-4">{details.title && details.title}</h1>
                                </div>
                                <div className="d-flex justify-content-start align-items-center g-2">
                                    {details.rating && details.rating && Array.apply(null, { length: Math.trunc(details.rating.rate) }).map((e, i) => (
                                        <img src={star} alt="rating" key={i} />
                                    ))}
                                    {details.rating && details.rating && Array.apply(null, { length: (5 - Math.trunc(details.rating.rate)) }).map((e, i) => (
                                        <img src={staroff} alt="rating" key={i} />
                                    ))}
                                </div>
                                <p className='fs-6'>{details.rating && details.rating.count && details.rating.count} products sold</p>
                                <p className='fs-3'><span className="fs-3 fw-bold">{INR.format(details.price && details.price)}</span></p>
                            </div>
                            <div className="card-footer">
                                <p className='fs-5'>PRODUCT DETAILS</p>
                                <p>{details.description && details.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details