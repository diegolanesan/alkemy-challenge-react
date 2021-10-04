import { useState, useEffect } from 'react'

const useTeamStats = (team) => {
  const [teamStats, setteamStats] = useState([])
  const [teamAppearance, setTeamAppearance] = useState({})

  useEffect(() => {
    const calculateTeamStats = () => {
      let stats = {}
      team.forEach((hero) => {
        Object.keys(hero.powerstats).map((power) => {
          if (stats[power]) {
            return (stats[power] += Number(hero.powerstats[power]))
          } else {
            return (stats[power] = Number(hero.powerstats[power]))
          }
        })
      })
      setteamStats(stats)
    }
    calculateTeamStats()
  }, [team])

  useEffect(() => {
    const calculateAppearance = () => {
      let appearance = {
        height: 0,
        weight: 0
      }
      team.forEach((hero) => {
        const height = Number(hero.appearance.height[1].slice(0, 3))
        const weight = Number(hero.appearance.weight[1].slice(0, 3))
        appearance.height += height / team.length
        appearance.weight += weight / team.length
      })
      setTeamAppearance(appearance)
    }
    calculateAppearance()
  }, [team])

  return { teamStats, teamAppearance }
}

export default useTeamStats
