import CodeBlock from "./CodeBlock";
import coffee from "../assets/images/jason-1.jpg";
import email from "../assets/images/email.svg";
import gitHub from "../assets/images/github.svg";
import linkedIn from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

const Main = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="image">
          <img src={coffee} alt="Jason Allen drinking some coffee in Iceland" />
          <div className="greeting">
            <h2>Hello, there.</h2>
            <h1>I'm Jason.</h1>
          </div>
        </div>
      </div>
      <div className="right">
        <CodeBlock />
        {/* <div className='blurb'>
          <h4 className='subtitle'>&lt;coder&gt;</h4>
          <h3>
            Using elegant code to craft
            <span className='clean'> beautifully simple</span> web experiences.
          </h3>
          <h4 className='subtitle'>&lt;/coder&gt;</h4>
        </div> */}
        <div className="contact">
          <h2>Connect</h2>
          <div className="social">
            <div className="social-link">
              <a href="http://www.github.com/jallend1/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z" />
                  </g>
                </svg>
                {/* <img src={gitHub} alt="GitHub" /> */}
              </a>
            </div>
            <div className="social-link">
              <a href="http://linkedin.com/in/jallend1/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <g data-name="linkedin">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      />
                      <path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
                      <path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z" />
                      <path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                    </g>
                  </g>
                </svg>
                {/* <img src={linkedIn} alt="LinkedIn" /> */}
              </a>
            </div>
            <div className="social-link">
              {/* <img src={email} alt="email" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="Layer 2">
                  <g data-name="email">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="social-link">
              <a href="http://www.twitter.com/jallend1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <g data-name="twitter">
                      <polyline points="0 0 24 0 24 24 0 24" opacity="0" />
                      <path d="M8.51 20h-.08a10.87 10.87 0 0 1-4.65-1.09A1.38 1.38 0 0 1 3 17.47a1.41 1.41 0 0 1 1.16-1.18 6.63 6.63 0 0 0 2.54-.89 9.49 9.49 0 0 1-3.51-9.07 1.41 1.41 0 0 1 1-1.15 1.35 1.35 0 0 1 1.43.41 7.09 7.09 0 0 0 4.88 2.75 4.5 4.5 0 0 1 1.41-3.1 4.47 4.47 0 0 1 6.37.19.7.7 0 0 0 .78.1A1.39 1.39 0 0 1 21 7.13a6.66 6.66 0 0 1-1.28 2.6A10.79 10.79 0 0 1 8.51 20zm0-2h.08a8.79 8.79 0 0 0 9.09-8.59 1.32 1.32 0 0 1 .37-.85 5.19 5.19 0 0 0 .62-1 2.56 2.56 0 0 1-1.91-.85A2.45 2.45 0 0 0 15 6a2.5 2.5 0 0 0-1.79.69 2.53 2.53 0 0 0-.72 2.42l.26 1.14-1.17.08a8.3 8.3 0 0 1-6.54-2.4 7.12 7.12 0 0 0 3.73 6.46l.95.54-.63.9a5.62 5.62 0 0 1-2.68 1.92A8.34 8.34 0 0 0 8.5 18zM19 6.65z" />
                    </g>
                  </g>
                </svg>
                {/* <img src={twitter} alt="twitter" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
