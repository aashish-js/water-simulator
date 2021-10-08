import React from "react";

import "./Header.scss";

function Header({ headerText }) {
  return (
    <header>
      <p className="Header">{headerText}</p>
    </header>
  );
}

export default React.memo(Header);
