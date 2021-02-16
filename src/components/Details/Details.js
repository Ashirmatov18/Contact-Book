import { lighten } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { contactContext } from '../../contexts/ContactContext';

const Details = () => {
    const { details } = useContext(contactContext);


    return (
        <>  
            {details ? (
                <div>
                    <h1>{details.details}</h1>
                </div>
            ) : (
                    <h1>...</h1>
            )}
        </>

    );
};

export default Details;