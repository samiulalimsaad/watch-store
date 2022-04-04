import React from "react";

const Blog = () => {
    return (
        <section className="container flex justify-center p-20 mt-20">
            <table class="border-collapse table-fixed w-full border border-sky-500 text-slate-900">
                <thead className="text-white bg-sky-500">
                    <tr>
                        <th class="border p-4 border-sky-900 ">Block </th>
                        <th class="border p-4 border-sky-900 ">Inline</th>
                        <th class="border p-4 border-sky-900 ">Inline-Block</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-sky-900 p-4">
                            Take the entire horizontal width
                        </td>
                        <td class="border border-sky-900 p-4">
                            take only content height and width
                        </td>
                        <td class="border border-sky-900 p-4">
                            Compared to inline, inline-block allows to set a
                            width and height on the element.
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-900 p-4">
                            Always starts on a new line
                        </td>
                        <td class="border border-sky-900 p-4">
                            depends on content height and width
                        </td>
                        <td class="border border-sky-900 p-4">
                            act like block and inline elements
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-900 p-4">
                            Only one element can take a line
                        </td>
                        <td class="border border-sky-900 p-4">
                            does not add line break
                        </td>
                        <td class="border border-sky-900 p-4">
                            does not add line break
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-900 p-4">
                            Can contain block, inline, inline-block element
                        </td>
                        <td class="border border-sky-900 p-4">
                            Can't contain block element
                        </td>
                        <td class="border border-sky-900 p-4">
                            Can contain inline, inline-block element
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-sky-900 p-4">
                            p, h1-h6, div, section, main, table form, header,
                            footer
                        </td>
                        <td class="border border-sky-900 p-4">
                            a,span, b, i, u, em, strong, sup, sub, big, small
                        </td>
                        <td class="border border-sky-900 p-4">
                            define by css display property
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Blog;
