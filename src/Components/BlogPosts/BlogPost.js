import {useNavigate , Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './BlogPost.css'

const BlogPost =  ()=> {

  const navigate = useNavigate();


  function readmore(){
    navigate('/postdetail');
  };

  return (
<div className="post">
      <img
        className="postImg"
        src={"https://picsum.photos/200/300?random=1"}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <br/>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
          <br/>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      <Button  variant="primary" onClick={readmore} className="Button">Read more</Button>{' '}
    </div>
  );
};

export default BlogPost;
