import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';

class Post extends React.Component {
    // UML diagrams? https://mermaid-js.github.io/mermaid/#/
    constructor(props){
        super(props);
        this.state = {
            newProps: {...props,
            plugins: [
                
            ],
            renderers: {
              ...props.renderers,
              math: (props) => 
                <MathJax.Node formula={props.value} />,
              inlineMath: (props) =>
                <MathJax.Node inline formula={props.value} />
            }
          }
        }
    }
    render(){
      return (
        <div className="post_container">
            <MathJax.Provider input="tex">
                <ReactMarkdown {...this.state.newProps}/>
            </MathJax.Provider>
        </div>
      );
    }
}
  
export default Post;