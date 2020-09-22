import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/vs2015.css';

hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'));

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newProps: {...props,
                escapeHtml:false,
                className:"test_container",
                plugins: [
                    
                ],
            }
        }
        console.log("Post created");
    }

    componentDidMount(){
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    }

    render(){
      return (
        <div className="post_container">
            <ReactMarkdown {...this.state.newProps}/>
        </div>
      );
    }
}
  
export default Post;