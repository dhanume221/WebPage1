import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPropertyById } from '../api';
import Navbar from '../components/Navbar';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProperty = async () => {
            setLoading(true);
            const data = await fetchPropertyById(id);
            setProperty(data);
            setLoading(false);
        };
        getProperty();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
    if (!property) return <div className="h-screen flex items-center justify-center">Property not found.</div>;

    return (
        <div className="property-details-page">
            <Navbar />

            {/* Header spacing */}
            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            <main className="container-custom py-16">
                <Link to="/" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    ← Back to all properties
                </Link>

                <div className="details-layout split-section" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '3rem' }}>
                    {/* Main Content */}
                    <div className="details-main">
                        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>{property.title}</h1>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '0.5rem' }}>📍</span> {property.location}
                        </p>

                        <div className="details-gallery" style={{ aspectRatio: '16/9', width: '100%', borderRadius: '2px', overflow: 'hidden', marginBottom: '2rem' }}>
                            <img src={property.image} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        <div className="details-specs" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                            gap: '1rem',
                            textAlign: 'center',
                            borderTop: '1px solid #f0f0f0',
                            borderBottom: '1px solid #f0f0f0',
                            padding: '1.5rem 0',
                            marginBottom: '2rem'
                        }}>
                            <div>
                                <div style={{ color: '#aaa', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Guests</div>
                                <div style={{ fontWeight: '600' }}>{property.features.guests}</div>
                            </div>
                            <div>
                                <div style={{ color: '#aaa', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Bedrooms</div>
                                <div style={{ fontWeight: '600' }}>{property.features.bedrooms}</div>
                            </div>
                            <div>
                                <div style={{ color: '#aaa', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Bathrooms</div>
                                <div style={{ fontWeight: '600' }}>{property.features.bathrooms}</div>
                            </div>
                            <div>
                                <div style={{ color: '#aaa', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Area</div>
                                <div style={{ fontWeight: '600' }}>{property.features.area} sqft</div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'italic' }}>Description</h3>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
                            {property.description || "No description provided."}
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'italic' }}>Amenities</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                            {property.amenities.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', color: '#555' }}>
                                    <span style={{ color: 'var(--primary-gold)', marginRight: '0.5rem' }}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="details-sidebar">
                        <div style={{ position: 'sticky', top: '8rem', backgroundColor: 'var(--white)', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', padding: '2rem', borderRadius: '2px' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>AED {property.price}</span>
                                <span style={{ color: 'var(--text-muted)', marginLeft: '0.2rem' }}>/ Night</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Check In</label>
                                    <input
                                        type="text"
                                        placeholder="Add Date"
                                        onFocus={(e) => (e.target.type = 'date')}
                                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #eee', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Check Out</label>
                                    <input
                                        type="text"
                                        placeholder="Add Date"
                                        onFocus={(e) => (e.target.type = 'date')}
                                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #eee', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Guests</label>
                                <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #eee', outline: 'none', background: 'transparent' }}>
                                    {[...Array(property.features.guests)].map((_, i) => (
                                        <option key={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>

                            <button className="btn-luxury" style={{ width: '100%', textTransform: 'uppercase' }}>
                                Reserve Now
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#aaa', marginTop: '1rem', fontStyle: 'italic' }}>
                                You won't be charged yet
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PropertyDetails;
