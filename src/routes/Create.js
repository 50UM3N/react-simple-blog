import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const [inputFiend, setInput] = useState({
        name: "",
        nameError: null,
        title: "",
        titleError: null,
        body: "",
        bodyError: null,
    });
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (value.length <= 0)
            setInput((prev) => ({
                ...prev,
                [name + "Error"]: "Field can not be empty!",
            }));
        else {
            setInput((prev) => ({
                ...prev,
                [name + "Error"]: null,
            }));
        }
        setInput((prev) => ({ ...prev, [name]: value }));
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        let oldState = { ...inputFiend };
        for (let [key, value] of Object.entries(inputFiend)) {
            if (value === "") {
                oldState[key + "Error"] = "Field can not be empty!";
            }
        }
        if (JSON.stringify(oldState) !== JSON.stringify(inputFiend)) {
            setInput(oldState);
            return;
        }
        setIsPending(true);

        // fetch
        fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(filterError({ ...inputFiend })),
        }).then((res) => {
            setInput({
                name: "",
                nameError: null,
                title: "",
                titleError: null,
                body: "",
                bodyError: null,
            });
            setIsPending(false);
            history.push("/");
        });
        // if there is an error to submit the from in the place then handle it later
    };

    const filterError = (data) => {
        let filtered = {};
        for (let [key, value] of Object.entries(data)) {
            if (!key.includes("Error")) filtered[key] = value;
        }
        return filtered;
    };
    return (
        <div className="container my-5" style={{ maxWidth: "500px" }}>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="name"
                        className={
                            inputFiend.nameError
                                ? "form-control is-invalid"
                                : "form-control "
                        }
                        placeholder="Full Name"
                        value={inputFiend.name}
                    />
                    {inputFiend.nameError && (
                        <div className="invalid-feedback">
                            {inputFiend.nameError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Post Title</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="title"
                        className={
                            inputFiend.titleError
                                ? "form-control is-invalid"
                                : "form-control "
                        }
                        placeholder="Title of the post"
                        value={inputFiend.title}
                    />
                    {inputFiend.titleError && (
                        <div className="invalid-feedback">
                            {inputFiend.titleError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <textarea
                        className={
                            inputFiend.bodyError
                                ? "form-control is-invalid"
                                : "form-control "
                        }
                        name="body"
                        onChange={handleChange}
                        rows="4"
                        value={inputFiend.body}
                    ></textarea>
                    {inputFiend.bodyError && (
                        <div className="invalid-feedback">
                            {inputFiend.bodyError}
                        </div>
                    )}
                </div>
                {isPending ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Loading...
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
};

export default Create;
