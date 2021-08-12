import CodeBlock from './CodeBlock';
import coffee from '../assets/images/coffee.png';
import email from '../assets/images/email.svg';
import gitHub from '../assets/images/github.svg';
import linkedIn from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';

const Main = () => {
  return (
    <div className='container'>
      <div id='left'>
        <div className='image'>
          <img src={coffee} alt='Jason Allen drinking some coffee in Iceland' />
          <div className='greeting'>
            <h2>Hello, there.</h2>
            <h1>I'm Jason.</h1>
          </div>
        </div>
      </div>
      <div className='right'>
        <CodeBlock />
        {/* <div className='contact'>
          <button className='btn'>Explore.</button>
        </div> */}
        {/* <div className='blurb'>
          <h4 className='subtitle'>&lt;coder&gt;</h4>
          <h3>
            Using elegant code to craft
            <span className='clean'> beautifully simple</span> web experiences.
          </h3>
          <h4 className='subtitle'>&lt;/coder&gt;</h4>
        </div> */}
        <div className='contact'>
          <h2>Contact</h2>
          <div className='social'>
            <div className='social-link'>
              <a href='http://www.github.com/jallend1/'>
                <img src={gitHub} alt='GitHub' />
              </a>
            </div>
            <div className='social-link'>
              <a href='http://linkedin.com/in/jallend1/'>
                <img src={linkedIn} alt='LinkedIn' />
              </a>
            </div>
            <div className='social-link'>
              <img src={email} alt='email' />
            </div>
            <div className='social-link'>
              <a href='http://www.twitter.com/jallend1'>
                <img src={twitter} alt='twitter' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
