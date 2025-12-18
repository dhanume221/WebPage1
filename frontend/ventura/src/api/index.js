const API_URL = 'http://localhost:5000/api';

export const fetchProperties = async () => {
    try {
        const response = await fetch(`${API_URL}/properties`);
        if (!response.ok) throw new Error('Failed to fetch properties');
        return await response.json();
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

export const fetchPropertyById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/properties/${id}`);
        if (!response.ok) throw new Error('Property not found');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching property ${id}:`, error);
        return null;
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData),
        });
        if (!response.ok) throw new Error('Booking failed');
        return await response.json();
    } catch (error) {
        console.error('Error creating booking:', error);
        return null;
    }
};
