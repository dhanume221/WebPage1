import { useState } from 'react';

const Hero = ({ onSearch }) => {
    const [searchData, setSearchData] = useState({
        destination: '',
        checkIn: '',
        checkOut: '',
        guests: '2'
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Strict validation: all fields must be filled
        if (!searchData.destination || !searchData.checkIn || !searchData.checkOut || !searchData.guests) {
            alert('Please fill in all search fields before searching.');
            return;
        }

        // Validate check-out is after check-in
        if (searchData.checkIn && searchData.checkOut) {
            const checkInDate = new Date(searchData.checkIn);
            const checkOutDate = new Date(searchData.checkOut);

            if (checkOutDate <= checkInDate) {
                alert('Check-out date must be after check-in date.');
                return;
            }
        }

        if (onSearch) {
            onSearch(searchData);
        }
    };

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

                <form className="search-widget" onSubmit={handleSubmit}>
                    <div className="search-field">
                        <label className="search-label">Destination</label>
                        <select
                            className="search-input"
                            value={searchData.destination}
                            onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                            required
                        >
                            <option value="">Select Destination</option>
                            <option>Palm Jumeirah</option>
                            <option>Downtown Dubai</option>
                            <option>Dubai Marina</option>
                        </select>
                    </div>
                    <div className="search-field">
                        <label className="search-label">Check In</label>
                        <input
                            type="date"
                            className="search-input"
                            value={searchData.checkIn}
                            onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                            required
                        />
                    </div>
                    <div className="search-field">
                        <label className="search-label">Check Out</label>
                        <input
                            type="date"
                            className="search-input"
                            value={searchData.checkOut}
                            onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                            required
                        />
                    </div>
                    <div className="search-field">
                        <label className="search-label">Guests</label>
                        <select
                            className="search-input"
                            value={searchData.guests}
                            onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                            required
                        >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="6">6+ Guests</option>
                        </select>
                    </div>
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;
