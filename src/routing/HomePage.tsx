import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe quisquam dolores est commodi repellat rerum molestias eveniet ad enim minus, voluptatum inventore quam dignissimos.</p>
        <Link to="/users">users</Link>
    </div>
  )
}

export default HomePage