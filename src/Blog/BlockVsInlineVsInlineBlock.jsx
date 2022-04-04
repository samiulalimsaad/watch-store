import React from "react";

const BlockVsInlineVsInlineBlock = () => (
    <div>
        <h2 className="mb-8 text-5xl text-center text-semibold">
            Block Vs Inline Vs InlineBlock
        </h2>
        <table className="w-full border border-collapse table-fixed border-sky-500 text-slate-900">
            <thead className="text-white bg-sky-500">
                <tr>
                    <th className="p-4 border border-sky-900 ">Block </th>
                    <th className="p-4 border border-sky-900 ">Inline</th>
                    <th className="p-4 border border-sky-900 ">Inline-Block</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-4 border border-sky-900">
                        Take the entire horizontal width
                    </td>
                    <td className="p-4 border border-sky-900">
                        take only content height and width
                    </td>
                    <td className="p-4 border border-sky-900">
                        Compared to inline, inline-block allows to set a width
                        and height on the element.
                    </td>
                </tr>
                <tr>
                    <td className="p-4 border border-sky-900">
                        Always starts on a new line
                    </td>
                    <td className="p-4 border border-sky-900">
                        depends on content height and width
                    </td>
                    <td className="p-4 border border-sky-900">
                        act like block and inline elements
                    </td>
                </tr>
                <tr>
                    <td className="p-4 border border-sky-900">
                        Only one element can take a line
                    </td>
                    <td className="p-4 border border-sky-900">
                        does not add line break
                    </td>
                    <td className="p-4 border border-sky-900">
                        does not add line break
                    </td>
                </tr>
                <tr>
                    <td className="p-4 border border-sky-900">
                        Can contain block, inline, inline-block element
                    </td>
                    <td className="p-4 border border-sky-900">
                        Can't contain block element
                    </td>
                    <td className="p-4 border border-sky-900">
                        Can contain inline, inline-block element
                    </td>
                </tr>
                <tr>
                    <td className="p-4 border border-sky-900">
                        p, h1-h6, div, section, main, table form, header, footer
                    </td>
                    <td className="p-4 border border-sky-900">
                        a,span, b, i, u, em, strong, sup, sub, big, small
                    </td>
                    <td className="p-4 border border-sky-900">
                        define by css display property
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default BlockVsInlineVsInlineBlock;
