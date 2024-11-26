// FILE: api.ts
import type { Location } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchLocationData = async (): Promise<Location> => {
  const response = await fetch(`${API_BASE_URL}/location`);
  if (!response.ok) {
    throw new Error('Failed to fetch client data');
  }
  const data: Location = await response.json();
  return data;
};