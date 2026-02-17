import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <h1>Oops! An error occured.</h1>
      {error && <p>{error.data}</p>}
    </div>
  )
}

export default ErrorPage