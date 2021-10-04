import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default ProtectedRoute
