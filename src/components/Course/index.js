import {Link} from 'react-router-dom'
import './index.css'

const Course = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails

  return (
    <Link to={`courses/${id}`} className="link-item">
      <li className="list-item">
        <div>
          <img src={logoUrl} alt={name} />
        </div>
        <p className="para">{name}</p>
      </li>
    </Link>
  )
}
export default Course
