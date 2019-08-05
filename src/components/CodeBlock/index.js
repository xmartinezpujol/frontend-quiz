import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock(props) {
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={twilight}>
      {value}
    </SyntaxHighlighter>
  );
}

CodeBlock.defaultProps = {
  language: 'javascript',
};

export default CodeBlock;
