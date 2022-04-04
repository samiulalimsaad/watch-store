import React from "react";
import BlockVsInlineVsInlineBlock from "./BlockVsInlineVsInlineBlock";
import ContextApi from "./ContextApi";
import SymmetricTag from "./SymmetricTag";

const Blog = () => {
    return (
        <section className="flex justify-center p-1 mt-24 sm:p-20 sm:container">
            <div className="space-y-8">
                <ContextApi />
                <SymmetricTag />
                <BlockVsInlineVsInlineBlock />
            </div>
        </section>
    );
};

export default Blog;
