import FetchHandler from "../components/FetchHandler";
import PostList from "../components/PostList";
import { useFetch } from "../Hooks/useFetch";
const Home = () => {
    const [data, isPending, error] = useFetch("/posts");

    return (
        <div className="container my-3">
            <FetchHandler isPending={isPending} error={error} data={data}>
                <PostList posts={data} />
            </FetchHandler>
        </div>
    );
};

export default Home;
