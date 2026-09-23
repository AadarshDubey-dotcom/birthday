import React from 'react';
import ScrollExpand from '../ScrollExpand/ScrollExpand.jsx';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <ScrollExpand
        src="khushi.png"
        alt="Product hero"
        title="Hello Khushi"
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
  <h2>Happy Birthday</h2>
  <p className="hero-para">Making her birthday unforgettable with joy and love</p>
</ScrollExpand>

<div style={{ height: '520px' }}>
  <ScrollExpand src="/hero.jpg" title="Built to scale"
  startWidth={42}
  startHeight={58}
  startRadius={24}
  endRadius={0}
  mediaZoom={1.35}
  scrollDistance={1.2}
  holdDistance={0.35}
  smoothing={0.1}
  overlayScrim={0.45}
  enabled
/>
</div> 
    </section>
  );
}