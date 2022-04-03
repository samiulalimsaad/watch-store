import React from "react";
import Review from "../Review/Review";

const Home = () => {
    return (
        <>
            <section className="container flex items-center justify-center p-20 mt-20">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="font-extrabold text-sky-700 text-9xl">
                            Watch Store
                        </h1>
                        <h4 className="flex justify-center w-2/3 my-4 text-lg">
                            Watch can do what your other devices can’t because
                            it’s on your wrist. When you wear it, you get a
                            fitness partner that measures all the ways you move,
                            meaningful health insights, and a connection to the
                            people and things you care about most. And it’s
                            always just a glance away.
                        </h4>
                    </div>
                    <div className="w-1/2 animate-bounce">
                        <img src="watch.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="container px-20">
                <Review />
            </section>
        </>
    );
};

export default Home;
