import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate = useNavigate(); //Here navigate is a function retured by hook
  return (
    <form onSubmit={(event)=> {
        event.preventDefault();
        //Redirect user to home page
        navigate('/')
    }}>
        <button className="btn btn-primary">submit</button>
    </form>
  )
}

export default ContactPage