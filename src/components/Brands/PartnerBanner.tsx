import partnersBg from '../../assets/images/partners-bg.jpg'
import './PartnerBanner.scss'

export function PartnerBanner() {
  return (
    <section className="partner-banner" aria-label="Parceiros">
      <div className="container">
        <div className="partner-banner__grid">
          {[0, 1].map((i) => (
            <article key={i} className="partner-banner__card">
              <img src={partnersBg} alt="Parceiros" className="partner-banner__img" />
              <div className="partner-banner__overlay">
                <h3 className="partner-banner__title">Parceiros</h3>
                <p className="partner-banner__desc">Lorem ipsum dolor sit amet, consectetur</p>
                <button type="button" className="partner-banner__btn">CONFIRA</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
