import React from 'react';

function VerticalMenu(props) {
  const { items } = props;
  const listItems = items.map((menuItem) => (
    <li key={menuItem[0]}>
      <a href={menuItem[1]}>{menuItem[2]}</a>
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
}
export default VerticalMenu;
