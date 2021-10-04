import { useState } from 'react'
import Team from '../team/Team'
import TeamStats from '../teamStats/TeamStats'
import Hero from '../hero/Hero'
import Search from '../search/Search'
import SearchResults from '../searchResults/SearchResults'
import './Home.scss'

const Home = () => {
  const [team, setTeam] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const deleteHero = (id) => {
    setTeam(team.filter((hero) => hero.id !== id))
  }
  return (
    <div className="home">
      <Search setSearchResults={setSearchResults} />
      <SearchResults
        searchResults={searchResults}
        team={team}
        setTeam={setTeam}
        loading={true}
      />
      <TeamStats team={team} />
      <Team>
        {team.length > 0 &&
          team.map((hero) => {
            return <Hero key={hero.id} hero={hero} onDelete={deleteHero} />
          })}
      </Team>
    </div>
  )
}

export default Home
