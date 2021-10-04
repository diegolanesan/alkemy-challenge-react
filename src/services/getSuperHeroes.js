import axios from 'axios'

export const getSuperHeroes = (searchValue) => {
  return axios
    .get(`https://superheroapi.com/api/10228694854898541/search/${searchValue}`)
    .then((res) => {
      return res.data.results
    })
}
