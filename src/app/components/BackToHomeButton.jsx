'use client';

export default function BackToHomeButton() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        padding: '0.8rem 1.2rem',
        fontSize: '1rem',
        backgroundColor: '#f06292',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d81b60')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f06292')}
    >
      Voltar Para o Início 💌
    </button>
    </div>
  );
}
