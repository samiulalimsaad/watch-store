import React from "react";
import { Link } from "react-router-dom";
import Review from "../Review/Review";

const Home = () => {
    return (
        <>
            <section className="container flex items-center justify-center mt-20 sm:p-20">
                <div className="flex flex-col-reverse items-center justify-between px-2 sm:flex-row">
                    <div>
                        <h1 className="text-5xl font-extrabold duration-500 text-sky-700 md:text-9xl hover:text-sky-400">
                            Watch Store
                        </h1>
                        <h4 className="flex justify-center my-4 text-lg sm:w-2/3">
                            Watch can do what your other devices can’t because
                            it’s on your wrist. When you wear it, you get a
                            fitness partner that measures all the ways you move,
                            meaningful health insights, and a connection to the
                            people and things you care about most. And it’s
                            always just a glance away.
                        </h4>
                        <div className="flex justify-center sm:justify-start">
                            <Link
                                to="/dashboard"
                                className="inline-block px-10 py-5 mt-10 text-white duration-500 rounded-md bg-sky-500 hover:bg-sky-600"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="sm:w-1/2 sm:animate-bounce">
                        <img src="watch.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="sm:container sm:px-20">
                <Review />
            </section>
        </>
    );
};

export default Home;
