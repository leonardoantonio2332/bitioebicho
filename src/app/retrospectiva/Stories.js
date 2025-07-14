'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

// Lista de slides (texto + imagem intercalados)
const stories = [
  { type: 'text', content: 'Meu mundo mudou quando te conheci 🌍💘' },
  { type: 'image', src: '/fotos/foto1.JPEG', alt: 'Foto 1' },

  { type: 'text', content: 'Lembro de cada detalhe daquele dia... até do frio na barriga 😳❤️' },
  { type: 'image', src: '/fotos/foto2.jpg', alt: 'Foto 2' },

  { type: 'text', content: 'Teus olhos trouxeram cor pros meus dias mais cinzas 💚' },
  { type: 'image', src: '/fotos/foto3.jpg', alt: 'Foto 3' },

  { type: 'text', content: 'Cada momento contigo é especial ✨' },
  { type: 'image', src: '/fotos/foto4.jpg', alt: 'Foto 4' },

  { type: 'text', content: 'Cada abraço teu é um abrigo 🌙' },
  { type: 'image', src: '/fotos/foto5.jpg', alt: 'Foto 5' },

  { type: 'text', content: 'Se eu pudesse, reviveria cada momento ao teu lado 💭' },
  { type: 'image', src: '/fotos/foto6.jpg', alt: 'Foto 6' },

  { type: 'text', content: 'Nosso amor merece ser lembrado assim, com carinho 💌' },
  { type: 'image', src: '/fotos/foto7.jpg', alt: 'Foto 7' },

  { type: 'text', content: 'Cada foto é um capítulo da nossa história 📷💕' },
  { type: 'image', src: '/fotos/foto8.jpg', alt: 'Foto 8' },

  { type: 'text', content: 'Você é poesia onde só havia caos 🌻' },
  { type: 'image', src: '/fotos/foto9.jpg', alt: 'Foto 9' },

  { type: 'text', content: 'A gente é aquele tipo de amor que vale a pena guardar 💞' },
  { type: 'image', src: '/fotos/foto10.jpg', alt: 'Foto 10' },

  { type: 'text', content: 'Te Amo Muito Gostosa Veia ❤️' },
];


export default function Stories() {
  const progressRef = useRef([]);

  useEffect(() => {
    // Reinicia animações de progresso ao trocar de slide
    const observer = new MutationObserver(() => {
      progressRef.current.forEach((el) => {
        if (el) {
          el.classList.remove('animate');
          void el.offsetWidth; // força reflow
          el.classList.add('animate');
        }
      });
    });

    const swiperEl = document.querySelector('.swiper');
    if (swiperEl) {
      observer.observe(swiperEl, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#fffafc',
        padding: '1rem',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {stories.map((story, i) => (
          <SwiperSlide key={i}>
            {/* Barra de progresso no topo */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '5px',
                backgroundColor: '#eee',
                marginBottom: '1rem',
                overflow: 'hidden',
              }}
            >
              <div
                ref={(el) => (progressRef.current[i] = el)}
                className="progress-bar"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#d81b60',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                }}
              />
            </div>

            {/* Conteúdo do slide */}
            {story.type === 'text' ? (
              <p style={{ fontSize: '1.5rem', color: '#d81b60', marginTop: '3rem' }}>
                {story.content}
              </p>
            ) : (
              <img
                src={story.src}
                alt={story.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '400px',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  marginTop: '1rem',
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilo global da barra animada */}
      <style jsx>{`
        .progress-bar.animate {
          animation: fillBar 5s linear forwards;
        }

        @keyframes fillBar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </main>
  );
}
