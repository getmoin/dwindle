// FILE: components/Achievements.tsx
import React, { useEffect, useState } from 'react';
import { fetchAchievementsData } from '../api/achievementsData';
import type { Achievement } from '../types';
import * as Icons from 'lucide-react';

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAchievementsData = async () => {
      try {
        const data = await fetchAchievementsData();
        setAchievements(data);
        console.log(data);
      } catch (err) {
        setError("err");
      } finally {
        setLoading(false);
      }
    };

    getAchievementsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-sky-50 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {achievements.map((achievement) => {
        const IconComponent = Icons[achievement.icon as keyof typeof Icons] as React.ElementType; // Dynamically import the icon
        return (
          <div key={achievement.id} className="p-4 bg-white shadow-lg border rounded-lg">
            {IconComponent && <IconComponent className="h-8 w-8 mb-2" />}
            <h3 className="text-xl font-semibold">{achievement.title}</h3>
            <p className="text-2xl font-bold">{achievement.value}</p>
            <p className="text-gray-500">{achievement.description}</p>
          </div>
        );
      })}
    </div>
    </section>
  );
};

export { Achievements };