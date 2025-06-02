import React from 'react';
import ResourceCard from './components/ResourceCard';
import DetailCard from './components/DetailCard';

function App() {
  const resources = ['People', 'Planets', 'Films', 'Starships', 'Vehicles', 'Species'];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI Інтерфейс</h1>

      <div className="row">
        {resources.map((res, idx) => (
          <ResourceCard
            key={idx}
            title={res}
            description={`Короткий опис ресурсу ${res.toLowerCase()}.`}
          />
        ))}
      </div>

      <hr className="my-5" />

      <DetailCard />
    </div>
  );
}

export default App;
