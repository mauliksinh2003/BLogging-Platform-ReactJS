import BlogPostList from '../../Components/BlogPostList/BlogPostList';


const BlogPage = ({posts}) => {

    return (
        <div className="BlogPage">
          <BlogPostList posts={posts}/>
        </div>
    );
};

export default BlogPage;
