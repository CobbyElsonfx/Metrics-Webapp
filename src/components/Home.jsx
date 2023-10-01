import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import asia from '../Assets/asia.png';
import america from '../Assets/america.png';
import europe from '../Assets/europe.png';
import africa from '../Assets/africa.png';
import oceania from '../Assets/oceania.png';
import globe from '../Assets/earth-globe.png';
import microphone from '../Assets/microphone (1).png';
import settings from '../Assets/settings.png';

const Home = () => {
  const backgroundColor = 'linear-gradient(rgba(3, 1, 4, 0.7) 0%, rgba(3, 1, 8, 0.8) 100%)';
  const regionList = [
    { name: 'Europe', backgroundImage: `${backgroundColor}, url(${europe})` },
    { name: 'Africa', backgroundImage: `${backgroundColor}, url(${africa})` },
    { name: 'Oceania', backgroundImage: `${backgroundColor}, url(${oceania})` },
    { name: 'Asia', backgroundImage: `${backgroundColor}, url(${asia})` },
    { name: 'America', backgroundImage: `${backgroundColor}, url(${america})` },
    { name: 'Caribbean', backgroundImage: `${backgroundColor}, url(${america})` },
  ];

  return (
    <>
      <header className="header">
        <div className="navbar">
          <nav className="navItems">
            <div className="logo">
              -B
              <span className="q-text">Q</span>
              A
              <span className="theme">
                Breath
                <span className="q-text-title5.
                  "
                >
                  {' '}
                  Quality Air
                </span>
              </span>
            </div>
            <div className="icons">
              <img src={microphone} alt="microphone" />
              <img src={settings} alt="settings" />
            </div>
          </nav>
        </div>
        <div className="header-title">
          <img src={globe} alt="earthGlobe" className="earthGlobe" />
          <h2> Breath Quality Air</h2>
          <p>Access Real-Time Air Quality Information Accros the Globe</p>
        </div>
      </header>
      <div className="region-title">Regions of the World</div>
      <div className="region">
        {regionList.map((region) => (
          <div
            key={region.name}
            className="region-box"
            style={{ backgroundImage: region.backgroundImage }}
          >
            <div className="back">
              <BsArrowRightCircle className="back-icon" />
              {' '}
            </div>
            <button type="button" className="region-button">
              <Link to={`/${region.name}`}>{region.name}</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
