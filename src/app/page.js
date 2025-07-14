'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#000000',
        padding: '2rem',
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>Oi, Bitio 💖</h1>
      <p style={{ marginBottom: '2rem' }}>Fiz esse site só pra ti!</p>
      <button
        onClick={() => router.push('/retrospectiva')}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#f06292',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
      >
        Abrir Retrospectiva
      </button>
    </main>
  );
}
