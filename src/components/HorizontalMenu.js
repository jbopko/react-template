import React from 'react';
import './HorizontalMenu.scss';

function HorizontalMenu(props) {
  const { items } = props;
  let i = 1;
  const listItems = items.map((menuItem) => (
    <li key={i++}>
      <a href={menuItem[0]}>{menuItem[1]}</a>
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
}
export default HorizontalMenu;
