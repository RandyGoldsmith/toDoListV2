import React, {useEffect} from 'react';

const Alert = ({type, message, removeAlert, list }) => {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeOut);
    }, [list])


    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default Alert;