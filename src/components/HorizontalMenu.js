import React from 'react';
import './HorizontalMenu.scss';

function HorizontalMenu(props) {
  const { items } = props;
  const listItems = items.map((number) => (
    <li key={number[0]}>
      <a href={number[1]}>{number[2]}</a>
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
}
export default HorizontalMenu;
