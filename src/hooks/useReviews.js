import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios
            .get("/reviews.json")
            .then((res) => setState(res.data))
            .catch((e) => console.log(e));
    }, []);

    return state;
};

export default useReviews;
