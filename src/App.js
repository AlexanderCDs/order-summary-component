/** 
* @author: Alexander Chi
* @description:
* @date: 30/Agosto/2021
**/
import './App.scss';
import illustration from './assets/svgs/illustration-hero.svg';
import music from './assets/svgs/icon-music.svg'; 
import {Card, Item} from './components/cards';

function App() {
  return (
    <div className="container">
      <div className="content">
        <Card 
          header={illustration}
          title="Order Summary" 
          description="Tou can now listen to millons of song, audiobooks, and podcasts on any device anywhere you like!" 
          body="" 
          buttons={[
              {text: 'Proceed to Paymment'},
              {text: 'Cancel Order', type: 'secondary'},
          ]}>
            <Item 
              icon={music} 
              name={'Annual Plan'} 
              price={'55.99'} 
              buttons={[{text: 'Cancel', type: 'link'}]}></Item>
        </Card>
      </div>
    </div>
  );
}

export default App;
