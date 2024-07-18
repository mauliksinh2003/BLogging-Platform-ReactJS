import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCoffee, faImage } from '@fortawesome/free-solid-svg-icons';
import './AddPost.css';

function AddPost({ onAddPost }) {

  const navigate = useNavigate();

  const [post, setPost] = useState({
    photo: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPost({ ...post, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost(post);
    navigate('/');
  };
  return (

    <div className='body'>
    <div className='Add'>

      <form onSubmit={handleSubmit}>

      <div>

      <div className="mb-3">
        <h3 className='label'>Add an image</h3>
          <label htmlFor="photo"><FontAwesomeIcon icon={faImage}className='InsertPic' /></label>
          <input type="file" className="Addfile" id="photo" name="photo" onChange={handleFileChange} accept="image/*" required />
          <br/>
          {post.photo && (
            <img src={post.photo} alt="Preview" className='AddImg' style={{ marginTop: '10px' }} />
          )}
        </div>

        
        <h3 htmlFor="title" className="label">Title</h3>
        <input className='txt AddInput' type='text' placeholder='Title' id="title" name="title" value={post.title} onChange={handleChange} required />
        <br></br>
        <h3 htmlFor="description" className="label">Description</h3>
        <textarea className='txt AddText' placeholder='Write your post here...' id="description" name="description" value={post.description} onChange={handleChange} rows="4" required/>
        <br></br>
        <button className='Addbtn'>POST</button>
      </div>

      </form>

    </div>
    </div>
  )
}

export default AddPost;

