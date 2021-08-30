import logo from './logo.svg';
import './App.scss';
import illustration from './assets/svgs/illustration-hero.svg';
import music from './assets/svgs/icon-music.svg';


function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <div className="card__head">
            <img src={illustration}/>
          </div>
          <div className="card__content">
            <h2 className="card__title">
              Order Summary
            </h2>
            <p className="card__description">
              Tou can now listen to millons of song, 
              audiobooks, and podcasts on any device
              anywhere you like!
            </p>
            <div className="card__body">
              <div className="card__item">
                <div className="card__icon">
                  <img src={music} className="card__img"/>
                </div>
                <div className="card__text"> 
                  <span className="title">Annual Plan</span>
                  <p className="price">$55.99/year</p>
                </div>
                <div className="card__btns">
                  <button className="btn__link">Change</button>
                </div>
              </div>
            </div> 
            <div className="card__footer">
              <button className="btn btn__primary">Proceed to Paymment</button>
              <button className="btn btn__secondary">Cancel Order</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
