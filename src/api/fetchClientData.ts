// FILE: api.ts
import type { Client } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Replace with your actual API endpoint

export const fetchClientData = async (): Promise<Client> => {
  const response = await fetch(`${API_BASE_URL}/client`);
  if (!response.ok) {
    throw new Error('Failed to fetch client data');
  }
  const data: Client = await response.json();
  return data;
};