import React from 'react';

let DefaultHeader = props => <header className={props.className}>
  {props.children}
</header>;

export default DefaultHeader;