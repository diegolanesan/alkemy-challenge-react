import axios from 'axios'

export const signIn = (user) => {
  return axios
    .post('http://challenge-react.alkemy.org/', user)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
    })
    .catch((err) => {
      alert('there was an error, please try again.')
    })
}
