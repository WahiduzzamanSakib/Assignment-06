import React, { use } from 'react';
import Tool from './Tool';



const Tools = ({ toolsApi, carts, setCarts }) => {
    const data = use(toolsApi);

    return (
        <div className='mx-auto w-11/12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 '>
                {
                    data.map(tool => (
                        <Tool key={tool.id} carts={carts} setCarts= {setCarts} tool={tool} />
                    ))
                }
            </div>
        </div>
    );
};

export default Tools;