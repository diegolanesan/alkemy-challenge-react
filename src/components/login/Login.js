import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signIn } from '../../services/signIn'
import './Login.scss'

const Login = () => {
  return (
    <div className="login_form">
      <h1 className="login_form__title">Sign in</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Enter your mail'
          }
          if (!values.password) {
            errors.password = 'Enter your password'
          }
          return errors
        }}
        onSubmit={(values) => {
          signIn(values).then(() => {
            window.location.href = '/'
          })
        }}
      >
        {({ handleChange }) => (
          <Form>
            <div className="form-floating mb-3">
              <Field
                className="form-control"
                type="email"
                name="email"
                id="floatingEmail"
                placeholder="Your email"
                onChange={handleChange}
              />
              <label htmlFor="floatingEmail">Email</label>
              <ErrorMessage name="email" component="div" className="login_form__error" />
            </div>
            <div className="form-floating mb-3">
              <Field
                className="form-control"
                type="password"
                name="password"
                id="floatingPassword"
                placeholder="Your password"
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword"> Password </label>
              <ErrorMessage
                name="password"
                component="div"
                className="login_form__error"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 login_form__btn">
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
