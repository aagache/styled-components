import React from 'react';

let DefaultTitle = props => {
  const Heading = (props.type) ? `${props.type}` : 'h1';

  return <div className={props.className}>
    <Heading>{props.children}</Heading>
  </div>;
};

export default DefaultTitle;