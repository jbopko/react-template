import React from 'react';

function Introduction() {
  // <li>A = π r2</li>
  // <li>...or, when you know the Diameter:  A = (π/4) × D2</li>
  // <li>...or, when you know the Circumference:  A = C2 / 4π</li></ol> */}
  // <p className='mtop'>π This is my playground  π</p>

  return (
    <section className="App-section">
      <div className="App-section-slice App-Intro">
        <h3>
&pi; r
          <sup>2</sup>
        </h3>
        <ol>
          <li>The area of a circle</li>
          <li>Pi times Radius squared</li>
        </ol>
      </div>
    </section>
  );
}
export default Introduction;
