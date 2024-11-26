import type { Service } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchServicesData = async (): Promise<Service[]> => {
  const response = await fetch(`${API_BASE_URL}/services`);
  if (!response.ok) {
    throw new Error('Failed to fetch service data');
  }
  const data: Service[] = await response.json();
  return data;
};