import './Hero.css';

function Hero({
  title = 'Discover Premium Tech',
  subtitle = 'Curated gadgets that elevate your everyday. Free shipping on orders over $50.',
  ctaText = 'Shop Now',
  backgroundImage = 'https://placehold.co/1200x400/1d1d1f/ffffff?text=GadgetGrove',
}) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-cta" type="button">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;