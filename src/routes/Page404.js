import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="container py-4">
            <p>404 not found</p>
            <Link to="/">Go to home page</Link>
        </div>
    );
};

export default Page404;
