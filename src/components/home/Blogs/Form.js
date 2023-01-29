// import React from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';



const Form = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    return (
        <div className='my-9'>
            <input type="text" placeholder="Title" className="input input-bordered input-lg w-full mb-4" />

            <input type="text" placeholder="Image Link" className="input input-bordered input-lg w-full mb-4" />

            <input type="text" placeholder="Reading Time" className="input input-bordered input-lg w-full mb-4" />

            <input type="text" placeholder="Category" className="input input-bordered input-lg w-full mb-4" />

            <JoditEditor
			ref={editor}
			value={content}
			// config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>

        </div>
    );
};

export default Form;