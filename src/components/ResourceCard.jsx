import React from 'react';

function ResourceCard({ title, description }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <button className="btn btn-primary mt-3" >Переглянути</button>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
