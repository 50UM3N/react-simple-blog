import { Link } from "react-router-dom";
const PostCard = ({ post }) => {
    return (
        <div className="card">
            <img
                src={`https://picsum.photos/seed/${post.id}/300/150`}
                className="card-img-top"
                alt={post.id}
            />
            <div className="card-body">
                <h5 className="card-title el">{post.title}</h5>
                <p className="card-text el">{post.body}</p>
                <Link
                    to={`/post/${post.id}`}
                    className="btn btn-primary btn-sm"
                >
                    Expand
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
