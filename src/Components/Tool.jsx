import React from 'react';

const Tool = ({ tool }) => {
    console.log(tool)
    return (
        <div className=' rounded-md bg-base-200 shadow-sm p-3'>
            <div className='flex justify-between p-5 '>
                <p>{tool.icon}</p>
                <p><span className={`px-2 py-1 rounded-full font-semibold
    ${tool.tag === 'popular' && 'text-red-600 bg-red-100'}  
    ${tool.tag === 'new' && 'text-green-600 bg-green-100'}  
    ${tool.tag === 'best seller' && 'text-yellow-600 bg-yellow-100'}  
`}>
                    {tool.tag}
                </span></p>
            </div>
            <div>
                <h2 className="text-xl font-bold">{tool.name}</h2>
                <p className='text-gray-700'>{tool.description}</p>
                <p><span className="text-3xl font-bold">${tool.price}</span>/month</p>

                <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-700">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{tool.features[0]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{tool.features[1]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Custom integrations{tool.features[2]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Dedicated support{tool.features[3]}</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block grident rounded-full border-none">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;