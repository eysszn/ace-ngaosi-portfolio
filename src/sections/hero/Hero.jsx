import ShinyOutlineText from '../../components/ShinyOutlineText/ShinyOutlineText';

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
        <h1 className="font-[family-name:var(--font-hero)] flex flex-col font-black text-[7rem] sm:text-[8rem] md:text-[10rem] leading-[0.85] uppercase tracking-tighter">
          <ShinyOutlineText text="Ace" />
          <ShinyOutlineText text="Ngaosi" />
        </h1>
        <p className="ml-2 font-semibold text-[var(--color-accent)] text-lg md:text-3xl">
          Aspiring Software Engineer
        </p>
      </div>

      {/* Photo */}
      <div className="relative flex-1 md:flex-[0_0_35%] min-h-[50vh] md:min-h-screen hero-photo">
        <img src="/hero_photo.jpg" alt="Ace Ngaosi" className="object-top" />
      </div>
    </section>
  )
}