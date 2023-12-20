import React, { useState } from 'react'
import { useMetaData } from '../../../hooks/useMetaData';
import './text_alerts_styles.css'


export const TextAlerts = () => {
    const {switchMetadataHandlerLogin, switchMetadataHandlerSignUp } = useMetaData()

    console.log(switchMetadataHandlerLogin + " #####################")
    return (
        <div>
            {switchMetadataHandlerLogin && (
                <p className="error-message">Incorrect credentials entered. Please try again.</p>
            )}

            {switchMetadataHandlerSignUp && (
                <p className="success-message">User created successfully!</p>
            )}
        </div>
    );
}
