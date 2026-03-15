import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserDashboard = () => {
    const navigate = useNavigate();
    let user = null;
    try {
        const userString = localStorage.getItem('user');
        if (userString && userString !== "undefined") {
            user = JSON.parse(userString);
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            navigate('/');
        }
    } catch (e) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    if (!user) return null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className="dashboard-page" style={{ minHeight: '100vh', backgroundColor: 'var(--luxury-light)' }}>
            <Navbar />
            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            <main className="container-custom py-16">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                            Welcome, {user.username.toUpperCase() || user.userid || 'Guest'}
                        </h1>
                        <p style={{ color: 'var(--text-muted)' }}>Manage your Ventura One profile and reservations.</p>
                    </div>
                    <button onClick={handleLogout} className="btn-luxury" style={{ backgroundColor: 'transparent', color: 'var(--error, #e53e3e)', border: '1px solid #e53e3e', fontSize: '0.8rem', padding: '0.5rem 1.5rem' }}>
                        LOG OUT
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* User Profile Card */}
                    <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.5rem' }}>Profile Information</h3>

                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>User ID</label>
                            <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{user.userid}</div>
                        </div>

                        {/* If other details are passed in the future, display them here */}
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Status</label>
                            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6fffa', color: '#2c7a7b', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                Active Member
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions Card */}
                    <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.5rem' }}>Quick Actions</h3>

                        <Link to="/properties" style={{ display: 'flex', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--luxury-light)', marginBottom: '1rem', borderRadius: '4px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s ease' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🏨</span>
                            <div>
                                <div style={{ fontWeight: '600' }}>Book a Stay</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Explore our exclusive properties</div>
                            </div>
                        </Link>

                        <Link to="/my-bookings" style={{ display: 'flex', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--luxury-light)', borderRadius: '4px', textDecoration: 'none', color: 'inherit', transition: 'all 0.2s ease' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📅</span>
                            <div>
                                <div style={{ fontWeight: '600' }}>My Reservations</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>View and manage upcoming trips</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;
