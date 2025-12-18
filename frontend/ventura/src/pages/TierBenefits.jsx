import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const TierBenefits = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        { feature: "Booking Discount", silver: "5%", gold: "10%", platinum: "15%" },
        { feature: "Early Check-in", silver: "Subject to availability", gold: "Priority", platinum: "Guaranteed" },
        { feature: "Late Check-out", silver: "Subject to availability", gold: "Priority", platinum: "Guaranteed" },
        { feature: "Personal Concierge", silver: "Email Support", gold: "24/7 Dedicated", platinum: "Private Assistant" },
        { feature: "Airport Transfers", silver: "-", gold: "Discounted", platinum: "Complimentary" },
        { feature: "Room Upgrades", silver: "-", gold: "Subject to availability", platinum: "Priority" },
        { feature: "Private Chef Service", silver: "-", gold: "-", platinum: "One Night Complimentary" },
        { feature: "Exclusive Event Access", silver: "-", gold: "Standard Events", platinum: "VIP Gala & Private Events" }
    ];

    return (
        <div className="tier-benefits-page">
            <Navbar />

            {/* Header spacing */}
            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            <main className="container-custom py-20">
                <div className="text-center mb-16">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Tier Benefits</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Compare our membership levels and discover the extraordinary privileges that come with being a Ventura One member.
                    </p>
                </div>

                <div className="tier-table-wrapper">
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        textAlign: 'left',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem'
                    }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--luxury-dark)' }}>
                                <th style={{ padding: '2rem', fontSize: '1.1rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Features & Privilege</th>
                                <th style={{ padding: '2rem', textAlign: 'center', color: '#C0C0C0', fontSize: '1.2rem' }}>SILVER</th>
                                <th style={{ padding: '2rem', textAlign: 'center', color: '#FFD700', fontSize: '1.2rem' }}>GOLD</th>
                                <th style={{ padding: '2rem', textAlign: 'center', color: '#E5E4E2', fontSize: '1.2rem' }}>PLATINUM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {benefits.map((row, idx) => (
                                <tr key={idx} style={{
                                    borderBottom: '1px solid #eee',
                                    backgroundColor: idx % 2 === 0 ? 'transparent' : '#fafafa'
                                }}>
                                    <td style={{ padding: '1.5rem 2rem', fontWeight: '500' }}>{row.feature}</td>
                                    <td style={{ padding: '1.5rem 2rem', textAlign: 'center', color: '#666' }}>{row.silver}</td>
                                    <td style={{ padding: '1.5rem 2rem', textAlign: 'center', color: '#666' }}>{row.gold}</td>
                                    <td style={{ padding: '1.5rem 2rem', textAlign: 'center', color: '#666' }}>{row.platinum}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="split-section" style={{
                    backgroundColor: 'var(--luxury-light)',
                    padding: '4rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 300px',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontStyle: 'italic' }}>Elevate Your Status</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            Status is earned based on your total annual stay value or the number of nights experienced with Ventura Stays. Join today and start your journey towards the ultimate travel lifestyle.
                        </p>
                    </div>
                    <div>
                        <button className="btn-primary" style={{ width: '100%', padding: '1.2rem', fontWeight: '700', letterSpacing: '0.1em' }}>
                            LEARN HOW TO JOIN
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TierBenefits;
