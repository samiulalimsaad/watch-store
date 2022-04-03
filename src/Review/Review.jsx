import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../hooks/useReviews";
import SingleReview from "./SingleReview";

const Review = () => {
    const reviews = useReviews();
    return (
        <div className="my-10">
            <h2 className="text-5xl text-center">Reviews(3)</h2>
            <div className="flex gap-4 overflow-x-auto">
                {reviews.slice(0, 3).map((review) => (
                    <SingleReview key={review.id} {...review} />
                ))}
            </div>
            <div className="flex justify-center">
                <Link
                    to="/reviews"
                    className="px-10 py-5 text-white bg-sky-600"
                >
                    All Reviews
                </Link>
            </div>
        </div>
    );
};

export default Review;
