import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <div className="card">
            <Link to={`/property/${property._id}`}>
                <div className="card-img-wrapper">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="card-img"
                    />
                    <div className="card-tag">
                        {property.location}
                    </div>
                </div>
            </Link>

            <div className="card-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <Link to={`/property/${property._id}`}>
                    <h3 className="card-title" style={{ fontSize: '1.25rem' }}>{property.title}</h3>
                </Link>
                <div className="rating" style={{ fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--primary-gold)' }}>★</span> {property.rating}
                </div>
            </div>

            <div className="card-meta" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {property.features.bedrooms} BR · {property.features.bathrooms} BA · {property.features.area} Sq Ft
            </div>

            <div className="card-price" style={{ fontWeight: '500' }}>
                From <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>AED {property.price}</span> / Night
            </div>
        </div>
    );
};

export default PropertyCard;
