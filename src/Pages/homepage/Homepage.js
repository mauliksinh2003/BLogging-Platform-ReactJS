import React from 'react'
import TopBar from '../../Components/Topbar/TopBar';
import { Card , CardImg ,CardImgOverlay ,CardTitle ,CardText  } from 'reactstrap';
import BlogPage from '../BlogPage/BlogPage';
import AddPost from '../AddPost/AddPost';

function Homepage({posts}) {
  return (
    <div className='home'>
      <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://camo.githubusercontent.com/1f2b99d9ff2aac4d8b4a52382c1ea0696cfca5a05fbcbfba7b722b959fea00d2/68747470733a2f2f7777772e6469676974616c736f6c7574696f6e73657276696365732e636f6d2f696d672f73657276696365732f77656273697465312e676966"
      style={{
        marginTop: 40 ,
        height: 470
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Post Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>

      <div className='post'>
        <BlogPage posts={posts}/>
      </div>
    </div>
  )
}

export default Homepage;
