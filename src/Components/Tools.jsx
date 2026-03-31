import React, { use } from 'react';
import Tool from './Tool';

const Tools = ({ toolsApi }) => {
    const data = use(toolsApi);

    return (
        <div className='mx-auto w-11/12'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-500'>
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>
            </div>

            <h3 className='text-center mt-4'>Total Tools: {data.length}</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 '>
                {
                    data.map(tool => (
                        <Tool key={tool.id} tool={tool} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tools;