import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const data = await login({ email, password });
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                onClose();
                window.location.reload(); // Refresh to update UI state
            } catch (err) {
                setErrors({ submit: err.message });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="modal-logo">
                    <img src="/ventura_logo.jpg" alt="Ventura" style={{ height: '40px', marginBottom: '1rem' }} />
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em' }}>Welcome Back</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Sign in to access your Ventura One benefits.
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-input ${errors.password ? 'input-error' : ''}`}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div style={{ textAlign: 'right', marginBottom: '2.5rem' }}>
                        <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: '600' }}>Forgot password?</a>
                    </div>

                    {errors.submit && <div style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{errors.submit}</div>}

                    <button className="btn-luxury" style={{ width: '100%' }} type="submit" disabled={loading}>
                        {loading ? 'SIGNING IN...' : 'SIGN IN'}
                    </button>

                    <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Don't have an account? <Link to="/signup" onClick={onClose} style={{ color: 'var(--luxury-dark)', fontWeight: '700' }}>Join Ventura One</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
