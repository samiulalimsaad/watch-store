import { StarIcon } from "@heroicons/react/solid";
import React from "react";
const SingleReview = ({ name, image, description, rating, wide }) => {
    let stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<StarIcon className="w-6 h-6 text-yellow-500" key={i} />);
    }
    return (
        <div
            className={`p-10 border rounded-md border-slate-300 w-full ${
                wide ? "sm:w-2/3" : "sm:w-1/3"
            }`}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center w-full gap-4">
                    <div className="w-full overflow-hidden rounded-lg sm:w-32">
                        <img className="object-cover" src={image} alt="" />
                    </div>
                    <div className="flex flex-wrap items-center justify-between w-full sm:flex-nowrap">
                        <h3 className="text-2xl font-semibold">{name}</h3>
                        <div title={`${rating} star`} className="flex">
                            {stars}
                        </div>
                    </div>
                </div>
            </div>
            <p
                className="mt-8 text-justify text-clip text-slate-700"
                title={wide ? "" : description}
            >
                {wide ? description : description.substr(0, 400) + " ..."}
            </p>
        </div>
    );
};

export default SingleReview;
