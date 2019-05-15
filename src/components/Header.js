import React from 'react';

function Header(props) {
  return (
    <div className="p-3" style={{
      backgroundColor: '#1565c0',
    }}>
      <h2 style={{
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
      }}>{props.title}</h2>
    </div>
  );
}

export default Header;
