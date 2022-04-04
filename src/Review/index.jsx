import React from "react";
import useReviews from "../hooks/useReviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
    const reviews = useReviews();
    return (
        <section className="container mt-20 sm:p-20">
            <h1 className="mb-8 text-5xl text-center text-semibold">Reviews</h1>
            <hr />
            <div className="flex flex-wrap justify-center gap-4 mt-8 space-y-4">
                {reviews.map((review) => (
                    <SingleReview key={review.id} wide {...review} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
