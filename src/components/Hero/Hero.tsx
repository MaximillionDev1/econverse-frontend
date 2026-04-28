import bannerBg from '../../assets/images/banner-bg.jpg'
import './Hero.scss'

export function Hero() {
  return (
    <section className="hero" aria-label="Banner principal">
      <img
        src={bannerBg}
        alt="Black Friday - 50% off nos produtos"
        className="hero__bg"
      />
      <div className="hero__overlay">
  <div className="container">         
    <div className="hero__content"> 
      <h1 className="hero__title">
        Venha conhecer nossas<br/>promoções
      </h1>
      <p className="hero__subtitle">
        <span className="hero__percent">50% Off</span> nos produtos
      </p>
      <button className="hero__btn" type="button">
        Ver produto
      </button>
    </div>
  </div>
</div>
    </section>
  )
}
