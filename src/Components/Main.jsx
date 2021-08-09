import coffee from '../assets/images/coffee.png';

const Main = () => {
  return (
    <div className='container'>
      <div id='left'>
        <img src={coffee} alt='Jason Allen drinking some coffee in Iceland' />
        <div className='greeting'>
          <h1>Hello, there.</h1>
          <h1>I'm Jason.</h1>
        </div>
      </div>
      <div id='right'>Hi.</div>
    </div>
  );
};

export default Main;
