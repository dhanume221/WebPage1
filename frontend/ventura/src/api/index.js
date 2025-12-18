const API_URL = 'https://www.render.com/api';

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

export const createBooking = async (bookingData, token) => {
    try {
        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify(bookingData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Booking failed');
        return data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Registration failed');
        return data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

export const fetchMyBookings = async (token) => {
    try {
        const response = await fetch(`${API_URL}/bookings/my-bookings`, {
            method: 'GET',
            headers: {
                'x-auth-token': token
            }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch bookings');
        return data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};
