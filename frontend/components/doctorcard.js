export default function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization} | {doctor.experience} yrs experience</p>
      <p>{doctor.clinic} - {doctor.location}</p>
      <p>Fee: ₹{doctor.fee} | Rating: {doctor.rating}% | {doctor.stories} Patient Stories</p>
      {doctor.available && <p style={{ color: 'green' }}>Available Today</p>}
      <button style={{ marginRight: '0.5rem' }}>Book Clinic Visit</button>
      <button>Contact Clinic</button>
    </div>
  );
}
