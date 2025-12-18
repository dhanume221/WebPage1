import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const VenturaOne = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tiers = [
        {
            name: "Silver",
            color: "#C0C0C0",
            benefits: ["5% off on all bookings", "Dedicated support", "Early check-in (subject to availability)"]
        },
        {
            name: "Gold",
            color: "#FFD700",
            benefits: ["10% off on all bookings", "24/7 Personal concierge", "Free room upgrades", "Late check-out"]
        },
        {
            name: "Platinum",
            color: "#E5E4E2",
            benefits: ["15% off on all bookings", "Private airport transfers", "Complimentary private chef for one night", "Exclusive event invites"]
        }
    ];

    return (
        <div className="ventura-one-page">
            <Navbar />

            {/* Header spacing to ensure content starts below fixed navbar */}
            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            {/* Dark Hero Section for sense of exclusivity */}
            <div className="hero" style={{
                height: '70vh',
                backgroundColor: 'var(--luxury-dark)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
                    <span style={{
                        color: 'var(--primary-gold)',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '0.3em',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Exclusive Loyalty Program
                    </span>
                    <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)' }}>Ventura One</h1>
                    <p className="hero-subtitle">
                        Elevate your travel experience with our signature membership. Unlock worlds of privilege and bespoke hospitality.
                    </p>
                    <Link to="/signup">
                        <button className="btn-luxury">
                            JOIN THE INNER CIRCLE
                        </button>
                    </Link>
                </div>
                {/* Decorative background element */}
                <div style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    border: '1px solid rgba(255,208,117,0.1)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1
                }}></div>
            </div>

            <main className="container-custom py-20">
                <div className="text-center mb-16">
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Tiered Excellence</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Tailored benefits designed to exceed your expectations at every level.</p>
                </div>

                <div className="tiers-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {tiers.map((tier, idx) => (
                        <div key={idx} style={{
                            border: '1px solid #eee',
                            padding: '3rem',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                        >
                            <div style={{
                                width: '60px',
                                height: '2px',
                                backgroundColor: tier.color,
                                margin: '0 auto 2rem'
                            }}></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>{tier.name}</h3>
                            <ul style={{ textAlign: 'left', padding: 0 }}>
                                {tier.benefits.map((benefit, bIdx) => (
                                    <li key={bIdx} style={{
                                        marginBottom: '1rem',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ color: 'var(--primary-gold)', marginRight: '0.75rem' }}>✦</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>

            <section style={{ backgroundColor: '#fafafa', padding: '8rem 0' }}>
                <div className="container-custom split-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ padding: '0 1rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', marginBottom: '1.5rem' }}>A World of Privileges</h2>
                        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            At Ventura Stays, we believe that true luxury is personal. Ventura One is more than just a loyalty program; it is your passport to a collection of elite services and exclusive access.
                            <br /><br />
                            From curated private experiences to seamless travel logistics, our members enjoy a level of hospitality that goes far beyond the stay.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-gold)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>200+</h4>
                                <p style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global Destinations</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-gold)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>15k</h4>
                                <p style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Member Community</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '2px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1541971875076-8f97a344391d?q=80&w=1974&auto=format&fit=crop"
                            alt="Luxury Experience"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VenturaOne;
