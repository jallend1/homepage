import "../styles/CodeBlock.css";

const CodeBlock = () => {
  return (
    <div className="codeblock">
      <div>
        <span className="declarations">const</span>
        <span className="variables"> jasonAllen </span>
        <span className="delimiter"> = </span>
        <span className="declarations">{"{"}</span>
      </div>
      <div className="codeline">
        <span className="properties">pronouns</span>
        <span className="delimiter">: </span>
        <span className="values">&quot;he&quot;</span>
        <span className="declarations"> || </span>
        <span className="values">&quot;him&quot;</span>
        <span className="delimiter">, </span>
      </div>
      <div className="codeline">
        <span className="properties">location</span>
        <span className="delimiter">: </span>
        <span className="values">&quot;Seattle, WA&quot;</span>
        <span className="delimiter">, </span>
      </div>
      <div className="codeline">
        <span className="properties">coding</span>
        <span className="delimiter">: </span>
        <span className="variables">[</span>
        <span className="values">&quot;JavaScript&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;React&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;Next.js&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;Node.js&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;CSS&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;HTML&quot;</span>
        <span className="variables">]</span>
        <span className="delimiter">, </span>
      </div>
      <div className="codeline">
        <span className="properties">tools</span>
        <span className="delimiter">: </span>
        <span className="variables">[</span>
        <span className="values">&quot;Git&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;Firebase&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;Figma&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;Netlify&quot;</span>
        <span className="delimiter">, </span>
        <span className="values">&quot;VSCode&quot;</span>
        <span className="variables">]</span>
        <span className="delimiter">, </span>
      </div>
      <div className="codeline">
        <span className="properties">social</span>
        <span className="delimiter">: </span>
        <span className="variables">[</span>
        <div className="codeline">
          <span className="declarations">{"{"}</span>
          <span className="properties">link</span>
          <span className="delimiter">: </span>
          <span className="values">&quot;LinkedIn&quot;</span>
          {/* <span className="delimiter">, </span>
          <span className="properties">link</span>
          <span className="delimiter">: </span>
          <span className="values">&quot;jallend1&quot;</span> */}
          <span className="declarations">{"}"}</span>
          <span className="delimiter">, </span>
        </div>
        <div className="codeline">
          <span className="declarations">{"{"}</span>
          <span className="properties">link</span>
          <span className="delimiter">: </span>
          <span className="values">&quot;Twitter&quot;</span>
          {/* <span className="delimiter">, </span>
          <span className="properties">link</span>
          <span className="delimiter">: </span>
          <span className="values">&quot;jallend1&quot;</span> */}
          <span className="declarations">{"}"}</span>
          <span className="delimiter">, </span>
        </div>
        <div className="codeline">
          <span className="declarations">{"{"}</span>
          <span className="properties">link</span>
          <span className="delimiter">: </span>
          <span className="values">&quot;GitHub&quot;</span>
          {/* <span className="delimiter">, </span>
          <span className="properties">link</span>
          <span className="delimiter">: </span>
          <span className="values">&quot;jallend1&quot;</span> */}
          <span className="declarations">{"}"}</span>
          <span className="variables">]</span>
        </div>
      </div>
      <div>
        <span className="declarations">{"}"}</span>
      </div>
    </div>
  );
};

export default CodeBlock;