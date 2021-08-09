import coffee from '../assets/images/coffee.png';
import CodeBlock from './CodeBlock';

const Main = () => {
  return (
    <div className='container'>
      <div id='left'>
        <img src={coffee} alt='Jason Allen drinking some coffee in Iceland' />
        <div className='greeting'>
          <h2>Hello, there.</h2>
          <h1>I'm Jason.</h1>
        </div>
      </div>
      <div id='right'>
        <CodeBlock />
      </div>
    </div>
  );
};

export default Main;
