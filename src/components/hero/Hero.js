import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = ({ hero, onDelete }) => {
  return (
    <>
      {hero && (
        <div className="hero">
          <img src={hero.image.url} alt={hero.name} />
          <div className="hero__info">
            <div className="hero__info__stats">
              <h1>{hero.name}</h1>
              {Object.keys(hero.powerstats).map((power) => {
                return (
                  <span key={power} className="badge bg-dark">
                    {power} {hero.powerstats[power]}
                  </span>
                )
              })}
            </div>
            <div className="hero__info__actions">
              <Link to={`/hero/${hero.id}`}>
                <button className="btn btn-primary"> Details </button>
              </Link>
              <button className="btn btn-danger" onClick={() => onDelete(hero.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
