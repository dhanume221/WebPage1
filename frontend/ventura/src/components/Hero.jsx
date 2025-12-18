const Hero = () => {
    return (
        <div className="hero">
            <div
                className="hero-bg"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')`,
                }}
            >
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">Luxury Living, <br /> Exceptional Hospitality</h1>
                <p className="hero-subtitle">
                    Experience the finest curated stays across the world's most prestigious locations.
                </p>

                <div className="search-widget">
                    <div className="search-field">
                        <label className="search-label">Destination</label>
                        <select className="search-input" defaultValue="">
                            <option value="" disabled>Select Destination</option>
                            <option>Palm Jumeirah</option>
                            <option>Downtown Dubai</option>
                            <option>Dubai Marina</option>
                        </select>
                    </div>
                    <div className="search-field">
                        <label className="search-label">Check In</label>
                        <input
                            type="text"
                            placeholder="Add Date"
                            className="search-input"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => { if (!e.target.value) e.target.type = "text" }}
                        />
                    </div>
                    <div className="search-field">
                        <label className="search-label">Check Out</label>
                        <input
                            type="text"
                            placeholder="Add Date"
                            className="search-input"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => { if (!e.target.value) e.target.type = "text" }}
                        />
                    </div>
                    <div className="search-field">
                        <label className="search-label">Guests</label>
                        <select className="search-input">
                            <option>2 Guests</option>
                            <option>4 Guests</option>
                            <option>6+ Guests</option>
                        </select>
                    </div>
                    <button className="search-btn">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
