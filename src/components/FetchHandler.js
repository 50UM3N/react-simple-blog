const FetchHandler = ({
    isPending,
    error,
    data,
    children,
    Component = null,
}) => {
    return (
        <>
            {isPending && <p>Loading..</p>}
            {error && <p>{error}</p>}
            {Component && data ? <Component post={data} /> : null}
            {data && children}
        </>
    );
};

export default FetchHandler;
