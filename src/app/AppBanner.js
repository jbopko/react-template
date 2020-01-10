import React from 'react';
import './AppBanner.scss';

const AppBanner = () => {
  const header = 'πr';
  const addendum = '2';
  const liArea = 'The area of a circle';
  const liRadius = 'Pi times radius squared';
  const playground = 'π This is my playground π';

  return (
    <section>
      <div>
        <h3>
          {header}
          <sup>{addendum}</sup>
        </h3>
        <ol>
          <li>{liArea}</li>
          <li>{liRadius}</li>
        </ol>
      </div>
      <p>{playground}</p>
    </section>
  );
};
export default AppBanner;
