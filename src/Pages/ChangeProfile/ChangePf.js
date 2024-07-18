import { useState , useEffect } from 'react';
import Setting from '../Setting/Setting';
import './ChangePf.css'

export default function ChangePf() {
  

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : {
      photo: null ,
      name: '',
      email: '',
      password: '',
    };
  });


  function changeData(event, Property) {
    setData({ ...data, [Property]: event.target.value });
    localStorage.setItem('userData', JSON.stringify(data));
    console.log(data);
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data])

  function updateBtn(e) {
    e.preventDefault();
    setData({
      photo: null,
      name: '',
      email: '',
      password: '',
    })
    console.log('Update Button Clicked');
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setData({ ...data, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={data.photo}
              alt="img"
            />
            <label htmlFor="photo">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="photo"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <label style={{ textAlign: "start" }}>Username</label>
          <input
            type="text"
            placeholder="maulik"
            name="name"
            id='name'
            value={data.name}
            onChange={(e) => changeData(e, 'name')} />
          <label style={{ textAlign: "start" }}>Email</label>
          <input
            type="email"
            placeholder="maulik@gmail.com"
            name="email"
            id='email'
            value={data.email}
            onChange={(e) => changeData(e, 'email')} />
          <label style={{ textAlign: "start" }}>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id='password'
            value={data.password}
            onChange={(e) => changeData(e, 'password')} />

          <button onClick={updateBtn} className="settingsSubmitButton" type="submit">
            Reset
          </button>
        </form>
      </div>
      <Setting  data={data}  onPhotoChange={handleFileChange}/>
    </div>
  );
}