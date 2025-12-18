import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchMyBookings } from '../api';
import { properties as staticProperties } from '../data/properties';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }

        const getBookings = async () => {
            try {
                const data = await fetchMyBookings(token);
                // Enhance bookings with property details from static data
                const enhancedBookings = data.map(booking => {
                    const property = staticProperties.find(p => p._id === booking.propertyId);
                    return { ...booking, property };
                });
                setBookings(enhancedBookings.reverse()); // Show newest first
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getBookings();
    }, [navigate]);

    return (
        <div className="my-bookings-page" style={{ minHeight: '100vh', backgroundColor: 'var(--luxury-light)' }}>
            <Navbar />

            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            <main className="container-custom py-16">
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>My Reservations</h1>
                    <p style={{ color: 'var(--text-muted)' }}>View and manage your upcoming stays with Ventura.</p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '5rem 0' }}>Loading your bookings...</div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '5rem 0', color: 'red' }}>{error}</div>
                ) : bookings.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '5rem 0', backgroundColor: 'var(--white)', border: '1px solid #eee' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>You haven't made any reservations yet.</p>
                        <Link to="/properties" className="btn-luxury">Explore Properties</Link>
                    </div>
                ) : (
                    <div className="bookings-list" style={{ display: 'grid', gap: '2rem' }}>
                        {bookings.map((booking) => (
                            <div key={booking._id} style={{
                                display: 'grid',
                                gridTemplateColumns: '300px 1fr',
                                backgroundColor: 'var(--white)',
                                border: '1px solid #eee',
                                overflow: 'hidden',
                                borderRadius: '2px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ height: '200px' }}>
                                    <img
                                        src={booking.property?.image || 'https://via.placeholder.com/300x200'}
                                        alt={booking.property?.title || 'Property'}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>{booking.property?.title || 'Unknown Property'}</h3>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                fontWeight: '800',
                                                textTransform: 'uppercase',
                                                padding: '0.3rem 0.8rem',
                                                backgroundColor: '#e6fffa',
                                                color: '#2c7a7b',
                                                border: '1px solid #81e6d9',
                                                borderRadius: '20px'
                                            }}>
                                                {booking.status}
                                            </span>
                                        </div>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                            📍 {booking.property?.location || 'Location unspecified'}
                                        </p>

                                        <div style={{ display: 'flex', gap: '3rem' }}>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Dates</div>
                                                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                                                    {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Guests</div>
                                                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{booking.guests} Adults</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.3rem' }}>Total Amount</div>
                                                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--luxury-dark)' }}>AED {booking.totalPrice}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                                        <Link to={`/property/${booking.propertyId}`} style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            View Property Details →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default MyBookings;
