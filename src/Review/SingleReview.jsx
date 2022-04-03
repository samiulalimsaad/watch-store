import { StarIcon } from "@heroicons/react/solid";
import React from "react";
const SingleReview = ({ name, image, description, rating, wide }) => {
    let stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<StarIcon className="w-6 h-6 text-yellow-500" key={i} />);
    }
    return (
        <div
            className={`p-10 my-10 space-y-4 border rounded-md border-slate-300 ${
                wide ? "w-2/3" : "w-1/3"
            }`}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-32 overflow-hidden rounded-lg">
                        <img className="object-cover" src={image} alt="" />
                    </div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                </div>
                <div className="flex">{stars}</div>
            </div>
            <p className="text-justify text-clip text-slate-700">
                {description}
            </p>
        </div>
    );
};

export default SingleReview;
