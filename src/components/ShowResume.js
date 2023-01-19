import React, { useContext } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
// import { ThemeContext } from '../contexts/ThemeProvider';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Worker
import { Worker } from '@react-pdf-viewer/core';
import { ThemeContext } from './contexts/ThemeProvider';

const ShowResume = () => {
    const { theme } = useContext(ThemeContext);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className='my-7'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                <Viewer theme={!theme ? 'dark' : ''} fileUrl="resume.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>
    );
};

export default ShowResume;