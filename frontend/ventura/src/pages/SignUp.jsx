import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { register, fetchSplashToken } from '../api';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        phone: 0,
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-z\s]+$/;
        const usernameRegex = /^[A-Za-z0-9_]+$/;

        if (!formData.name) {
            newErrors.name = "Name is required";
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Letters and spaces only";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Minimum 6 characters";
        }

        if (!formData.username) {
            newErrors.username = "Username is required";
        } else if (!usernameRegex.test(formData.username)) {
            newErrors.username = "Alphanumeric and underscores only";
        }

        if (!formData.phone) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d+$/.test(String(formData.phone))) {
            newErrors.phone = "Phone number must be digits";
        }

        if (!formData.agree) {
            newErrors.agree = "You must accept our terms";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const splashToken = await fetchSplashToken();
                const data = await register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    username: formData.username,
                    phone: Number(formData.phone),
                    token: splashToken
                });
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data));
                navigate('/dashboard');
            } catch (err) {
                setErrors({ submit: err.message });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="signup-page">
            <Navbar darkText={true} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
                {/* Visual Side */}
                <div className="visual-side" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                        src="/assets/photo-1600607687920-4e2a09cf159d.webp"
                        alt="Luxury Interior"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }}></div>
                    <div style={{ position: 'absolute', bottom: '5rem', left: '5rem', color: 'var(--white)', maxWidth: '400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Elevate Your Journey</h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                            Join Ventura One today and unlock exclusive access to the world's most prestigious residences.
                        </p>
                    </div>
                </div>

                {/* Form Side */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--white)', padding: '5rem' }}>
                    <div style={{ width: '100%', maxWidth: '450px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.4em', marginBottom: '1rem', marginTop: '1rem' }}>VENTURA</div>
                            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>Become a Member</h1>
                            <p style={{ color: 'var(--text-muted)' }}>Experience hospitality without compromise.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="form-label" style={{ marginBottom: '0.2rem' }}>Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                                        placeholder="Alexander Vance"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>
                                <div className="form-group" style={{ marginBottom: 0 }}>
                                    <label className="form-label" style={{ marginBottom: '0.2rem' }}>Username</label>
                                    <input
                                        name="username"
                                        type="text"
                                        className={`form-input ${errors.username ? 'input-error' : ''}`}
                                        placeholder="alexv"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && <span className="error-text">{errors.username}</span>}
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label">Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                                    placeholder="1234567890"
                                    value={formData.phone || ''}
                                    onChange={handleChange}
                                />
                                {errors.phone && <span className="error-text">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                                    placeholder="alex@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Create Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className={`form-input ${errors.password ? 'input-error' : ''}`}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className="error-text">{errors.password}</span>}
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <input
                                        name="agree"
                                        type="checkbox"
                                        style={{ marginTop: '0.3rem' }}
                                        checked={formData.agree}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: errors.agree ? '#ff4d4d' : 'inherit' }}>I agree to the Terms of Service and Privacy Policy.</span>
                                </label>
                            </div>

                            {errors.submit && <div style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{errors.submit}</div>}

                            <button className="btn-luxury" style={{ width: '100%' }} type="submit" disabled={loading}>
                                {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
                            </button>

                            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Already have an account? <Link to="/" style={{ color: 'var(--luxury-dark)', fontWeight: '700' }}>Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
