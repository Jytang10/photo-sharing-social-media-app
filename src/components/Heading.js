import React from 'react';

function Heading() {
  return (
    <div className="home">
      <div className="homeLogo">
        <h3>Photo App</h3>
      </div>
      <form>
        <input type="text" placeholder="Search..." value="search" onChange={() => console.log()}/>
      </form>
    </div>
  )
}

export default Heading;
