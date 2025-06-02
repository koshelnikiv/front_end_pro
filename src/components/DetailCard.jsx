import React from 'react';

function DetailCard() {
  return (
    <div className="card">
      <div className="card-header">
        Деталі ресурсу
      </div>
      <div className="card-body">
        <p className="card-text text-muted">Оберіть ресурс, щоб побачити його вміст.</p>
      </div>
    </div>
  );
}

export default DetailCard;
