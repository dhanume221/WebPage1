import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PropertyGrid from '../components/PropertyGrid';
import { properties as staticProperties } from '../data/properties';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setProperties(staticProperties);
        setLoading(false);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="properties-page">
            <Navbar />

            {/* Header spacing */}
            <div style={{ height: '6rem', backgroundColor: 'var(--luxury-dark)' }}></div>

            <main>
                <div className="container-custom" style={{ paddingTop: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>All Properties</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Browse our complete collection of luxury residences and exclusive holiday homes.
                    </p>
                </div>

                {/* We pass a prop to hide the internal header of PropertyGrid or we refactor PropertyGrid */}
                <PropertyGrid properties={properties} loading={loading} hideHeader={true} />
            </main>
        </div>
    );
};

export default Properties;
