'use client';

import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Fotos() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
        } catch (err) {
          console.warn('Autoplay bloqueado pelo navegador:', err);
        }
      };
      playAudio();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const fotos = [
    '/fotos/foto1.JPEG',
    '/fotos/foto2.JPEG',
    '/fotos/foto3.jpg',
  ];

  return (
    <main
      style={{
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: '#fffafc',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>
        Nossos Momentos 💕
      </h2>

      <div style={{ width: '90%', margin: '0 auto', borderRadius: '1rem' }}>
        <Slider {...settings}>
          {fotos.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Foto ${index + 1}`}
                style={{
                  width: '100%',
                  maxHeight: '450px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <h3 style={{ marginTop: '2rem', fontSize: '1.2rem' }}>Nossa música 🎶</h3>
      <audio ref={audioRef} controls style={{ marginTop: '0.5rem', width: '90%' }}>
        <source src="/callonme.mp3" type="audio/mpeg" />
        Seu navegador não suporta o player de áudio.
      </audio>
      <button
        onClick={() => window.location.href = '/'}
        style={{
            marginTop: '2rem',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#f06292',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'background 0.3s',
        }}
        >
        Voltar Para o Início 💌
        </button>
    </main>
  );
}
