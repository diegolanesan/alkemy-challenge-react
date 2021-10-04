import useHero from '../../hooks/useHero'
import './HeroDetail.scss'

const HeroDetail = (props) => {
  const heroId = props.match.params.id
  const { hero, loading } = useHero(heroId)

  return (
    <div className="hero-container">
      <div className="hero-detail">
        {!!loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <img src={hero.image.url} alt={hero.name} />
            <div className="hero-detail__info">
              <h1>{hero.name}</h1>
              <h3> Alias </h3>
              <div className="hero-detail__info__aliases">
                {hero.biography.aliases.map((alias) => {
                  return <p key={alias}> {alias} </p>
                })}
              </div>
              <div className="hero-detail__info__appearance">
                <div>
                  <p> Weight </p>
                  <span className="badge bg-light text-dark">
                    {hero.appearance.weight[1]}
                  </span>
                </div>
                <div>
                  <p> Height </p>
                  <span className="badge bg-light text-dark">
                    {hero.appearance.height[1]}
                  </span>
                </div>
              </div>
              <div className="hero-detail__info__placework">
                <h3> Place of work </h3>
                <p>{hero.work.base}</p>
              </div>
              <div className="hero-detail__info__colors">
                <h3> Appearance </h3>
                <div>
                  <p>Eye color</p>
                  <span className="badge bg-secondary">
                    {hero.appearance['eye-color']}
                  </span>
                </div>
                <div>
                  <p>Hair color</p>
                  <span className="badge bg-secondary">
                    {hero.appearance['hair-color']}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default HeroDetail
