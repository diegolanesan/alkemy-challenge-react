import { getSuperHeroes } from '../../services/getSuperHeroes'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Search.scss'

const Search = ({ setSearchResults }) => {
  return (
    <div className="search-form-container">
      <h1> Build your team! </h1>
      <Formik
        initialValues={{ searchValue: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.searchValue) {
            errors.searchValue = 'Enter a superhero'
          }
          return errors
        }}
        onSubmit={(values) => {
          getSuperHeroes(values.searchValue).then((results) => {
            setSearchResults(results)
          })
        }}
      >
        {({ handleChange, values }) => (
          <Form className="search-form">
            <div className="search-form__input">
              <Field
                name="searchValue"
                onChange={handleChange}
                value={values.searchValue}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
            <ErrorMessage
              name="searchValue"
              component="div"
              className="search-form__error"
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Search
