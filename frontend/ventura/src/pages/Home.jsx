import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import { properties as staticProperties } from '../data/properties';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setProperties(staticProperties);
        setLoading(false);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <main>
                <PropertyGrid properties={properties} loading={loading} />

                <section className="why-us" style={{ backgroundColor: 'var(--luxury-light)', padding: '5rem 0' }}>
                    <div className="container-custom text-center">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontStyle: 'italic' }}>Why Book With Us</h2>
                        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                            <div>
                                <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=200&auto=format&fit=crop" alt="Loyalty" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.5rem', border: '2px solid var(--primary-gold)' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Loyalty Program</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Exclusive rewards for our frequent guests.</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=200&auto=format&fit=crop" alt="Best Rates" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.5rem', border: '2px solid var(--primary-gold)' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Best Rates</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Guaranteed best pricing for direct bookings.</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=200&auto=format&fit=crop" alt="Concierge" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.5rem', border: '2px solid var(--primary-gold)' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>24/7 Concierge</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Professional support whenever you need it.</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=200&auto=format&fit=crop" alt="Hand-picked" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1.5rem', border: '2px solid var(--primary-gold)' }} />
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Hand-picked</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Only the finest properties make our list.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
