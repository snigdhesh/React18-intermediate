import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    return isRouteErrorResponse(error) ? 'Page not found' : 'Unexpected Error occurred'
}

export default ErrorPage