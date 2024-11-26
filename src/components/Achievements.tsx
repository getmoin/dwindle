import { Award, Heart, Shield, Clock, Users, ThumbsUp, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    id: '1',
    title: 'Experience',
    value: '20+',
    description: 'Years Serving',
    icon: Clock
  },
  {
    id: '3',
    title: 'Customers',
    value: '50K+',
    description: 'Satisfied Clients',
    icon: ThumbsUp
  },
  {
    id: '4',
    title: 'Warranty',
    value: '2 Yr',
    description: 'Guarantee',
    icon: Shield
  },
  {
    id: '5',
    title: 'Awards',
    value: '15+',
    description: 'Industry Awards',
    icon: Trophy
  },
  {
    id: '6',
    title: 'Rating',
    value: '4.9',
    description: 'Customer Rating',
    icon: Star
  },
  {
    id: '7',
    title: 'Services',
    value: '20+',
    description: 'Types Offered',
    icon: Award
  },
  {
    id: '8',
    title: 'Team',
    value: '30+',
    description: 'Professionals',
    icon: Users
  },
  {
    id: '9',
    title: 'Support',
    value: '24/7',
    description: 'Available',
    icon: Heart
  }
];

export function Achievements() {
  return (
    <section className="bg-sky-50 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div
              key={achievement.id}
              className="text-center p-6 bg-white rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {achievement.title}
              </div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}