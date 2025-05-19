// pages/index.tsx
import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      <Card
        title="Sample Property"
        description="A beautiful place to stay."
        imageUrl="/public/assets/booking.jpg"
      />
      <Button label="Book Now" onClick={() => alert('Booking clicked!')} />
    </main>
  );
};

export default Home;
