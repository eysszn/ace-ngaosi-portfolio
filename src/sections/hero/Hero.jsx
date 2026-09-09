import ShinyText from '../../components/ShinyText/ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="hero-section relative flex flex-col md:flex-row w-full overflow-hidden">
      <div
        className="hidden md:block absolute top-0 z-20 h-2"
        style={{
          left: '20%',
          width: '100%',
          top: '2.5%',
          background: 'var(--color-accent)',
          clipPath: 'polygon(2% 0, 100% 0, 88% 100%, 0% 100%)'
        }}
      />
      <div
        className="hidden md:block absolute bottom-0 z-20 h-16"
        style={{
          left: '0%',
          width: '65%',
          background: 'var(--color-accent)',
          clipPath: 'polygon(0 0, 88% 0, 82% 100%, 0% 100%)'
        }}
      />

      {/* Left panel — no overflow-hidden, no nested accent shapes anymore */}
      <div className="relative flex-1 md:flex-[0_0_65%] bg-[var(--color-bg-dark)] flex flex-col justify-center px-8 md:px-16 py-20">
        <h1 className="font-[family-name:var(--font-heading)] flex flex-col font-bold text-6xl sm:text-7xl md:text-9xl leading-[0.95] uppercase tracking-tight">
          <ShinyText 
            text="Ace" 
            className="block" 
            speed={3} 
            delay={2.5} 
            color="#F7F5F0" 
            shineColor="#5DCAA5" 
            spread={100} 
            direction="left" 
            pauseOnHover 
          />
          <ShinyText 
            text="Ngaosi" 
            className="block" 
            speed={3} 
            delay={2.5} 
            color="#F7F5F0" 
            shineColor="#5DCAA5" 
            spread={100} 
            direction="left" 
            pauseOnHover 
          />
        </h1>
        <p className="mt-6 font-semibold text-[var(--color-accent)] text-lg md:text-xl">
          Aspiring Software Engineer
        </p>
      </div>

      {/* Right panel — photo */}
      <div className="relative flex-1 md:flex-[0_0_35%] min-h-[50vh] md:min-h-screen hero-photo">
        <img src="/hero_photo.jpg" alt="Ace Ngaosi" className="object-top" />
      </div>
    </section>
  )
}