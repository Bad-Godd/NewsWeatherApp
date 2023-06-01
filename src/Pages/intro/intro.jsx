import './intro.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {

    const navigate = useNavigate();

    const [hiddenState, setHiddenState] = useState(false);
    const [leftState, setLeftState] = useState(false);

    function hideIntroBlock() {
        setHiddenState(true);
        setLeftState(true);
        setTimeout(() => {
            navigate(`/weather`);
        }, 2000);

    }

    return(
        <div className="weather">

            <div className={`weather__logo ${leftState ? 'goLeft' : ''}`}></div>

            <div className={`intro__block ${hiddenState ? 'hidden' : ''}`}>
                <h1 className='intro__greeting'>Hi there!</h1>
                
                <p className='intro__text'>It's a weather-news-app. It can show you the current weather conditions and agricultural news based on the weather.</p>
                <button className={`intro__btn ${leftState ? 'goLeft' : ''}`} onClick={hideIntroBlock}>
            Try!
          </button>            
            </div>
            
        </div>
    )
} 

export default Intro;