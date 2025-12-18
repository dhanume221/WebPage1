import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const PropertyGrid = ({ properties, loading, hideHeader = false }) => {
    if (loading) {
        return (
            <div className="container-custom py-20">
                <div className="property-grid">
                    {[1, 2, 3].map((n) => (
                        <div key={n} style={{ opacity: 0.5 }}>
                            <div style={{ backgroundColor: '#eee', aspectRatio: '4/3', width: '100%', marginBottom: '1rem' }}></div>
                            <div style={{ height: '1rem', backgroundColor: '#eee', width: '75%', marginBottom: '0.5rem' }}></div>
                            <div style={{ height: '1rem', backgroundColor: '#eee', width: '50%' }}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container-custom py-20">
            {!hideHeader && (
                <div className="grid-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Featured Properties</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Discover our hand-picked selection of luxury stays.</p>
                    </div>
                    <Link to="/properties" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--luxury-dark)', fontWeight: '600', borderBottom: '2px solid var(--primary-gold)', paddingBottom: '0.2rem' }}>
                        View All Stay Experience
                        <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="arrow" style={{ width: '12px', height: '12px' }} />
                    </Link>
                </div>
            )}

            <div className="property-grid">
                {properties.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default PropertyGrid;
