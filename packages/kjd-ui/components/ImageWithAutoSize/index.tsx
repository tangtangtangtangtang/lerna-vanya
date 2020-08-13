import React, { useState } from 'react';


export default ({ src, className = '', style = {} }) => {
    const [widthFullOrHeight, setWidthFullOrHeight] = useState('widthFull');
    return (
        <img
            src={src}
            className={className}
            onLoad={e => {
                if (e.target?.naturalWidth > e.target?.naturalHeight) {
                    setWidthFullOrHeight('heightFull');
                } else {
                    setWidthFullOrHeight('widthFull');
                }
            }}
            style={
                widthFullOrHeight === 'widthFull'
                    ? {
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'auto',
                        height: '100%',
                        ...style
                    }
                    : {
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        width: '100%',
                        height: 'auto',
                        ...style
                    }
            }
        />
    );
};
