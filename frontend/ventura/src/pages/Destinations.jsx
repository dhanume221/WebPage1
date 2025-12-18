import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Destinations = () => {
    const destinations = [
        {
            name: "Palm Jumeirah",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            count: 12,
            description: "An iconic man-made island offering world-class luxury villas and beachfront living."
        },
        {
            name: "Downtown Dubai",
            image: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop",
            count: 8,
            description: "The heart of Dubai, home to the Burj Khalifa and prestigious high-rise penthouses."
        },
        {
            name: "Dubai Marina",
            image: "https://images.unsplash.com/photo-1559762717-99c81ac85459?q=80&w=1974&auto=format&fit=crop",
            count: 15,
            description: "A vibrant waterfront community with stunning skylines and luxury apartments."
        },
        {
            name: "Arabian Ranches",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            count: 5,
            description: "Peaceful desert-themed villas with lush greenery and family-centric amenities."
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="destinations-page">
            <Navbar />

            {/* Header spacing */}
            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            <main className="container-custom py-20">
                <div className="text-center mb-16">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our Destinations</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Explore our curated selection of properties across the most prestigious and vibrant locations in Dubai and beyond.
                    </p>
                </div>

                <div className="destinations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {destinations.map((dest, idx) => (
                        <div key={idx} className="destination-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px', height: '500px' }}>
                            <img
                                src={dest.image}
                                alt={dest.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', transition: 'background-color 0.3s' }}></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem', color: 'var(--white)' }}>
                                <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--primary-gold)', display: 'block', marginBottom: '0.5rem' }}>
                                    {dest.count} Properties
                                </span>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{dest.name}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    {dest.description}
                                </p>
                                <Link to="/" style={{ color: 'var(--white)', fontWeight: '600', borderBottom: '2px solid var(--primary-gold)', paddingBottom: '0.2rem', display: 'inline-block' }}>
                                    Explore Properties
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Destinations;
