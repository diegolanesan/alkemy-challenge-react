import './searchResults.scss'
import { addToTeam } from '../../services/addToTeam'

const SearchResults = ({ searchResults, team, setTeam }) => {
  return (
    <div className="search-results">
      {searchResults &&
        searchResults.map((hero) => {
          return (
            <div className="search-results__card" key={hero.id}>
              <img src={hero.image.url} alt={hero.name} />
              <span> {hero.name} </span>
              <button
                onClick={() => addToTeam(hero, team, setTeam)}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default SearchResults
