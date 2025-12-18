import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import { properties as staticProperties } from '../data/properties';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setProperties(staticProperties);
        setLoading(false);
        window.scrollTo(0, 0);
    }, []);

    const handleSearch = (searchData) => {
        setIsSearching(true);
        setLoading(true);

        // Simulate a small delay for premium feel
        setTimeout(() => {
            const filtered = staticProperties.filter(property => {
                const matchDestination = !searchData.destination || property.location.includes(searchData.destination);
                const matchGuests = !searchData.guests || property.features.guests >= parseInt(searchData.guests);
                return matchDestination && matchGuests;
            });
            setFilteredProperties(filtered);
            setLoading(false);

            // Scroll to results
            const resultsSection = document.getElementById('search-results');
            if (resultsSection) {
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    };

    return (
        <>
            <Navbar />
            <Hero onSearch={handleSearch} />
            <main>
                {isSearching && (
                    <section id="search-results" className="py-20" style={{ backgroundColor: 'var(--white)' }}>
                        <div className="container-custom">
                            <div style={{ marginBottom: '3rem', borderLeft: '4px solid var(--primary-gold)', paddingLeft: '1.5rem' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Search Results</h2>
                                <p style={{ color: 'var(--text-muted)' }}>
                                    Found {filteredProperties.length} elite properties matching your criteria.
                                </p>
                            </div>
                            <PropertyGrid properties={filteredProperties} loading={loading} />
                        </div>
                    </section>
                )}

                {!isSearching && (
                    <section className="featured-selection py-20">
                        <div className="container-custom">
                            <PropertyGrid properties={properties.filter(p => p.featured)} loading={loading} />
                        </div>
                    </section>
                )}

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
