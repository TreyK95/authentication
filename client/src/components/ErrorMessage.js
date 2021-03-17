
import FormattedMessage from "./FormattedMessage"

const ErrorMessage = ({error, fullError} ) =>{
    return (
        <FormattedMessage type='alert'>
          {fullError && <pre>{JSON.stringify(error,null,2)}</pre>}
          {!fullError && <pre>{error.message}</pre>}
        </FormattedMessage>
    )
}

export default ErrorMessage