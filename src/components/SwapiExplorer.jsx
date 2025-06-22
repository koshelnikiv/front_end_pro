import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapiData, clearData } from '../redux/actions';
import './SwapiExplorer.css';

const SwapiExplorer = () => {
  const [endpoint, setEndpoint] = useState('people/1');
  const dispatch = useDispatch();
  const { data, loading, error, lastEndpoint } = useSelector(state => state);

  const handleFetch = () => {
    if (endpoint.trim()) {
      dispatch(fetchSwapiData(endpoint));
    }
  };

  const handleClear = () => {
    dispatch(clearData());
  };

  // ✨ Розбиваємо на частини
  const endpointParts = lastEndpoint ? lastEndpoint.split('/') : [];

  return (
    <div className="explorer-container">
      <h1>SWAPI</h1>

      <div className="input-row">
        <span className="base-url">https://swapi.info/api/</span>
        <input
          type="text"
          value={endpoint}
          onChange={e => setEndpoint(e.target.value)}
          placeholder="people/1"
        />
        <button onClick={handleFetch}>Get Info</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {data && (
        <>
          <div className="response-block">
            <div className="response-header">
              {endpointParts.map((part, index) => (
                <span key={index} className="endpoint-part">{part}</span>
              ))}
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>

          {/* Винесена кнопка Clear */}
          <div className="clear-container">
            <button className="clear-btn" onClick={handleClear}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SwapiExplorer;
