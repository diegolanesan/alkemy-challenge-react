import { useState, useEffect } from 'react'
import axios from 'axios'

const useHero = (heroId) => {
  const [hero, setHero] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getHeroDetails = async (heroId) => {
      return axios
        .get(`https://superheroapi.com/api/10228694854898541/${heroId}`)
        .then((res) => {
          setHero(res.data)
          setLoading(false)
        })
    }
    getHeroDetails(heroId)
  }, [heroId])

  return { hero, loading }
}

export default useHero
