import { Link } from 'react-router-dom';

const ProductItem = ({ item, index }) => {
    return (
        <>
            <Link to={`product/${item.id}`} key={index} target='_blank' className='card productcard'>
                <div className="imagebg">
                    <img src={item.image} className="card-img-top image-fluid cardimage" alt="..." />
                    <div className="ratingcount">
                        {item.rating.rate} <i className="fa-solid fa-star"></i> | {item.rating.count}
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-title fs-6 product-title">{item.title}</p>
                    <p className="card-text">Price: {item.price}</p>
                </div>
            </Link>
        </>
    )
}

export default ProductItem