import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 style={{ color: '#2d62e4' }}>My-HEALTH-APP</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/search" style={{ marginLeft: '1rem' }}>Search</Link>
      </div>
    </nav>
  );
}
