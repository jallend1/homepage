import javascript from '../assets/images/shields/javascript.svg';
import css3 from '../assets/images/shields/css3.svg';
import reactjs from '../assets/images/shields/react.svg';
import html5 from '../assets/images/shields/html5.svg';
import markdown from '../assets/images/shields/markdown.svg';
import next from '../assets/images/shields/Next.svg';
import node from '../assets/images/shields/node.svg';
import '../styles/CodeBlock.css';

const CodeBlock = () => {
  return (
    <div className='codeblock'>
      <div>
        <span className='declarations'>const</span>
        <span className='variables'> jasonAllen </span>
        <span className='delimiter'> = </span>
        <span className='declarations'>{'{'}</span>
      </div>
      <div className='objectContents'>
        <div className='key'>
          <span className='properties'>pronouns</span>
          <span className='delimiter'>: </span>
        </div>
        <div>
          <span className='values'>&quot;he&quot;</span>
          <span className='declarations'> || </span>
          <span className='values'>&quot;him&quot;</span>
          <span className='delimiter'>, </span>
        </div>
        <div className='key'>
          <span className='properties'>location</span>
          <span className='delimiter'>: </span>
        </div>
        <div>
          <span className='values'>&quot;Seattle, WA&quot;</span>
          <span className='delimiter'>, </span>
        </div>
        <div className='key'>
          <span className='properties'>tooling</span>
          <span className='delimiter'>: </span>
        </div>
        <div>
          <span className='variables'>[</span>
          <span className='values'>&quot;Git&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;Firebase&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;Figma&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;VSCode&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;MaterialUI&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;Bootstrap&quot;</span>
          <span className='variables'>]</span>
          <span className='delimiter'>, </span>
        </div>
        <div className='key'>
          <span className='properties'>languages</span>
          <span className='delimiter'>: </span>
        </div>
        <div className="skills">
          <img src={javascript} alt="JavaScript" />
          <img src={reactjs} alt="React JS" />
          <img src={next} alt="Next JS"/>
          <img src={node} alt="Node JS"/>
          <img src={css3} alt="CSS3"/>
          <img src={markdown} alt="Markdown"/>
          <img src={html5} alt="HTML 5"/>
          {/* <span className='variables'>[</span>
          <span className='values'>&quot;JavaScript&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;React&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;Next.js&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;Node.js&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;Markdown&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;CSS&quot;</span>
          <span className='delimiter'>, </span>
          <span className='values'>&quot;HTML&quot;</span>
          <span className='variables'>]</span>
          <span className='delimiter'>, </span> */}
        </div>
      </div>
      <div>
        <span className='declarations'>{'}'}</span>
      </div>
    </div>
  );
};

export default CodeBlock;
