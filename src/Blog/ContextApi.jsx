import React from "react";

const ContextApi = () => (
    <div className="text-slate-900">
        <h2 className="mb-8 text-5xl text-center text-semibold">Context Api</h2>
        <div className="space-y-4">
            <p>
                Context api allow passing data from one component to entire
                component tree of it's children without props drilling.
            </p>
            <p>
                Props drilling is a very painful method to pass data to a
                particular component.
            </p>
            <p>There has few steps to use Context Api</p>
            <ol className="mt-2 ml-10 space-y-2 list-disc">
                <li>Create Context</li>
                <li>Context Provider</li>
                <li>Context Consumer</li>
            </ol>
            <p>
                Context Provider allow to pass a value property as props which
                is actual data.
            </p>
            <p>
                Context must be exported. otherwise Context Consumer wouldn't
                able to use it.
            </p>
        </div>
    </div>
);

export default ContextApi;
