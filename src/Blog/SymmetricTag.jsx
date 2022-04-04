import React from "react";

const SymmetricTag = () => {
    return (
        <div className="my-20 text-slate-900">
            <h2 className="mb-8 text-5xl text-center text-semibold">
                Symmetric Tag
            </h2>
            <div className="space-y-4">
                <p>Symmetric Tags are meaningful and self describe</p>
                <p>Symmetric Tags are HTML5 feature</p>
                <ol className="ml-10 list-disc">
                    <li>article</li>
                    <li>details</li>
                    <li>header</li>
                    <li>nav</li>
                    <li>section</li>
                    <li>footer</li>
                    <li>main</li>
                </ol>
                <p>
                    Before Symmetric Tag developers used div tag with a
                    meaningful id or class names
                </p>
                <p>it's increase Accessibility</p>
                <p>
                    By section tag we can understand that this part is a section
                    and contain few things.
                </p>
                <p>Easy to understand by developers.</p>
            </div>
        </div>
    );
};

export default SymmetricTag;
