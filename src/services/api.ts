import axios from 'axios';
import { ApiResponse } from '../types';

const API_URL = 'https://app.ftoyd.com/fronttemp-service/fronttemp';

export const fetchMatches = async (): Promise<ApiResponse> => {
    try {
        const response = await axios.get<ApiResponse>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
};