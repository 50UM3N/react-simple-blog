import PostCard from "./PostCard";

const PostList = ({ posts }) => {
    return (
        <div className="row g-3">
            {posts.map((post) => (
                <div className="col-md-3" key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostList;
