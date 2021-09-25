import { useHistory, useParams } from "react-router";
import { useFetch } from "../Hooks/useFetch";
import FetchHandler from "../components/FetchHandler";
const Post = ({ post }) => {
    const history = useHistory();
    const handleClick = () => {
        fetch("http://localhost:8080/posts/" + post.id, {
            method: "DELETE",
        }).then((res) => {
            history.push("/");
        });
    };

    return (
        <>
            <h2 className="text-center mb-3 text-primary">{post.title}</h2>
            <p>{post.body}</p>
            <button className="btn btn-primary" onClick={handleClick}>
                Delete
            </button>
        </>
    );
};
const SingleBlog = () => {
    const { postId } = useParams();
    const [data, isPending, error] = useFetch("/posts/" + postId);
    return (
        <div className="container py-5">
            <FetchHandler
                isPending={isPending}
                error={error}
                data={data}
                Component={Post}
            ></FetchHandler>
        </div>
    );
};

export default SingleBlog;
