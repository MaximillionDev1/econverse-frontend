import './Newsletter.scss'

export function Newsletter() {
  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__left">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__desc">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
            da Econverse.
          </p>
        </div>

        <div className="newsletter__right">
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="nl-name" className="sr-only">Seu nome</label>
            <input
              id="nl-name"
              type="text"
              placeholder="Digite seu nome"
              className="newsletter__input"
            />
            <label htmlFor="nl-email" className="sr-only">Seu e-mail</label>
            <input
              id="nl-email"
              type="email"
              placeholder="Digite seu e-mail"
              className="newsletter__input"
            />
            <button type="submit" className="newsletter__btn">INSCREVER</button>
          </form>
          <label className="newsletter__terms">
            <input type="checkbox" className="newsletter__check" />
            <span>Aceito os termos e condições</span>
          </label>
        </div>
      </div>
    </section>
  )
}
