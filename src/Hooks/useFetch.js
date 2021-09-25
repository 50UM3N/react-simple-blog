import { useState, useEffect } from "react";

const useFetch = (locator) => {
    const baseURL = "http://localhost:8080";
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(baseURL + locator, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok)
                    throw Error("Could not fetch the data from server !!");
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
            })
            .catch((err) => {
                if (err.name === "AbortError") return;
                setError(err.message);
                setIsPending(false);
            });
        return () => abortCont.abort();
    }, [locator]);

    return [data, isPending, error];
};

// const usePostFetch = (locator) => {
//     const baseURL = "http://localhost:8080";
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [isPending, setIsPending] = useState(true);

//     const PostFetch = () => {
//         useEffect(() => {
//             const abortCont = new AbortController();
//             fetch(baseURL + locator, { signal: abortCont.signal })
//                 .then((res) => {
//                     if (!res.ok)
//                         throw Error("Could not fetch the data from server !!");
//                     return res.json();
//                 })
//                 .then((data) => {
//                     setData(data);
//                     setIsPending(false);
//                 })
//                 .catch((err) => {
//                     if (err.name === "AbortError") return;
//                     setError(err.message);
//                     setIsPending(false);
//                 });
//             return () => abortCont.abort();
//         }, [locator]);
//     };

//     return [data, isPending, error, PostFetch];
// };

export { useFetch };
