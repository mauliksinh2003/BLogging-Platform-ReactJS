import logo from './logo.svg';
import { useState } from'react';
import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import PostDetail from './Components/Postdetail/PostDetail';
import AddPost from './Pages/AddPost/AddPost';
import Setting from './Pages/Setting/Setting';
import ChangePf from './Pages/ChangeProfile/ChangePf';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';
import TopBar from './Components/Topbar/TopBar';
import Protected from './Components/Protected';




function App() {

  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path='/' element={<Homepage posts={posts} />} />
          <Route path='/Changeprofile' element={ <Protected Component={ChangePf}></Protected> } />
          <Route path='/about' element={<About />} />
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/postdetail' element={<PostDetail/>}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addpost' element={< AddPost onAddPost={addPost}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
