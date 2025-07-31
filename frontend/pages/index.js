import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  const [cities, setCities] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [city, setCity] = useState('');
  const [specialization, setSpecialization] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Fetch cities
    fetch('http://localhost:4000/api/cities')
      .then(res => res.json())
      .then(data => {
        setCities(data);
        if (data.length > 0) {
          setCity(typeof data[0] === 'string' ? data[0] : data[0].name);
        }
      })
      .catch(() => {
        setCities([]);
        setCity('');
      });

    // Fetch specializations
    fetch('http://localhost:4000/api/specializations')
      .then(res => res.json())
      .then(data => {
        setSpecializations(data);
        if (data.length > 0) {
          setSpecialization(typeof data[0] === 'string' ? data[0] : data[0].name);
        }
      })
      .catch(() => {
        setSpecializations([]);
        setSpecialization('');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect with city and specialization query params
    if (city && specialization) {
      router.push(`/search?city=${city}&specialization=${specialization}`);
    }
  };

  return (
    <>
      <Navbar />
      <main className="main-container" style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <h1>Your home for health</h1>
        <form onSubmit={handleSubmit} className="search-form" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <select
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          >
            {cities.map((c, idx) => (
              <option key={idx} value={typeof c === 'string' ? c : c.name}>
                {typeof c === 'string' ? c : c.name}
              </option>
            ))}
          </select>

          <select
            value={specialization}
            onChange={e => setSpecialization(e.target.value)}
            required
          >
            {specializations.map((spec, idx) => (
              <option key={idx} value={typeof spec === 'string' ? spec : spec.name}>
                {typeof spec === 'string' ? spec : spec.name}
              </option>
            ))}
          </select>

          <button type="submit">Search</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
