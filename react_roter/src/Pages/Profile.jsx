import {useNavigate, useParams} from 'react-router-dom'
import ChangeProfile from '../Components/ChangeProfile';
import { AppContext } from '../Providers/AppContext';
import { useContext } from 'react';
const Profile = () => {
    const { userName } = useContext(AppContext);
    let navigate = useNavigate();
    const {name} = useParams();
  return (
    <div>Hello! Welcome {name}
        <button onClick={() => {
            navigate('/about');
        }}>go to about</button>
        <ChangeProfile />
        <p>I am now {userName}</p>
    </div>
  )
}

export default Profile