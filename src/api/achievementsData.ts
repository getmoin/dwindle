// FILE: api/achievements.ts
import type { Achievement } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchAchievementsData = async (): Promise<Achievement[]> => {
  const response = await fetch(`${API_BASE_URL}/achievements`);
  if (!response.ok) {
    throw new Error('Failed to fetch achievements data');
  }
  const data: Achievement[] = await response.json();
  return data;
};