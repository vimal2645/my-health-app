import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DoctorCard from '../components/doctorcard';

export default function Search() {
  const router = useRouter();
  const { city, specialization } = router.query;

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Run fetch only when both city and specialization are available
  useEffect(() => {
    if (!city || !specialization) return;

    let apiURL = `http://localhost:4000/api/doctors?city=${city}&specialization=${specialization}`;

    setLoading(true);
    fetch(apiURL)
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(() => setDoctors([]))
      .finally(() => setLoading(false));
  }, [city, specialization]);

  return (
    <>
      <Navbar />
      <main className="main-container">
        {(!city || !specialization) ? (
          <h2>Please select a city and specialization from the home page to search.</h2>
        ) : (
          <>
            <h2>
              Doctors (Specialization: {specialization}, City: {city})
            </h2>
            {loading && <p>Loading doctors...</p>}
            {!loading && doctors.length === 0 && <p>No doctors found.</p>}
            {!loading &&
              doctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
