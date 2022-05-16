import '../App.css';

import DaysCard from './DaysCard';
import Dropdown from './Dropdown';
import Header from './Header';

function Container() {
  return (
    <>
      <Header />

      <Dropdown />
      <div className="section">
        <div className="container">
          <DaysCard />
        </div>
      </div>
    </>
  );
}

export default Container;
