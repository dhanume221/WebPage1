const API_URL = 'http://84.235.250.22';

const getAuthHeaders = (includeContentType = false) => {
    const token = localStorage.getItem('token');
    const headers = {};
    if (includeContentType) headers['Content-Type'] = 'application/json';
    if (token) headers['Authorization'] = `Bearer ${token}`;
    return headers;
};

export const fetchProperties = async () => {
    try {
        const response = await fetch(`${API_URL}/properties`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        if (!response.ok) throw new Error('Failed to fetch properties');
        return await response.json();
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

export const fetchPropertyById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/properties/${id}`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        if (!response.ok) throw new Error('Property not found');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching property ${id}:`, error);
        return null;
    }
};

export const createBooking = async (bookingData) => {
    try {
        const headers = getAuthHeaders(true);

        const response = await fetch(`${API_URL}/bookings`, {
            method: 'POST',
            headers: headers,
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
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: getAuthHeaders(true),
            body: JSON.stringify(credentials),
        });

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            // Include the raw string in the error if parsing fails
            throw new Error(`Server returned invalid JSON: ${responseText.substring(0, 100)}...`);
        }

        if (!response.ok) throw new Error(data.message || 'Login failed');
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/Register`, {
            method: 'POST',
            headers: getAuthHeaders(true),
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

export const fetchMyBookings = async () => {
    try {
        const headers = getAuthHeaders();

        const response = await fetch(`${API_URL}/bookings/my-bookings`, {
            method: 'GET',
            headers: headers
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch bookings');
        return data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

export const fetchSplashToken = async () => {
    try {
        const response = await fetch(`${API_URL}/splash`, {
            method: 'GET'
        });
        const result = await response.json();
        if (result.status === 'success' && result.data && result.data.token) {
            return result.data.token;
        }
        throw new Error('Failed to retrieve splash token');
    } catch (error) {
        console.error('Error fetching splash token:', error);
        throw error;
    }
};
