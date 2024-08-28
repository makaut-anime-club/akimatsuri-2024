import React from 'react';
import './LoadingScreen.css'; // Assuming you have a separate CSS file for styling
import loadingGif from '../../assets/tekku.gif'; // Import the GIF if it's in the src folder

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <img src={loadingGif} alt="Loading..." />
        </div>
    );
};

export default LoadingScreen;