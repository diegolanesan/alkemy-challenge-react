import useTeamStats from '../../hooks/useTeamStats'
import './TeamStats.scss'

const TeamStats = ({ team }) => {
  const { teamStats, teamAppearance } = useTeamStats(team)

  return (
    <>
      {' '}
      {team.length > 0 ? (
        <div className="team-data">
          <h2> Your team </h2>
          <div className="team-data__stats">
            {team.length > 0 &&
              Object.keys(teamStats)
                .sort((a, b) => teamStats[b] - teamStats[a])
                .map((power) => {
                  return (
                    <span className="badge bg-dark" key={power}>
                      {power} {teamStats[power]}
                    </span>
                  )
                })}
          </div>
          <div>
            {team.length > 0 &&
              Object.keys(teamAppearance).map((el) => {
                return (
                  <span className="badge bg-light text-dark" key={el}>
                    {el} {teamAppearance[el].toFixed(2)}
                    {el === 'height' ? 'cm' : 'kg'}
                  </span>
                )
              })}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default TeamStats
