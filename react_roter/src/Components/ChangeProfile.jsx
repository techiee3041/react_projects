import { useContext } from "react";
import { AppContext } from "../Providers/AppContext";
import { useState } from "react";

function ChangeProfile() {
    const { setUserName } = useContext(AppContext);
    const [newUserName, setNewUserName] = useState('');
  return (
    <div>
      <h1>Change Profile</h1>
      <input
        type="text"
        onChange={(e) => {
            setNewUserName(e.target.value);
        }}
      />
      <button onClick={() => {setUserName(newUserName)}}>change userName</button>
    </div>
  );
}

export default ChangeProfile;