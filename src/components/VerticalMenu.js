import React from 'react';

function VerticalMenuColumn(props) {
  const { items } = props;
  let i = 1;
  const menu = items.map((item) => (
    <li key={i++}>
      <a href={item[0]}>{item[1]}</a>
    </li>
  ));
  return (
    <ul>{menu}</ul>
  );
}

function VerticalMenu(props) {
  const { headerMenu } = props;
  let i = 1;
  const cols = headerMenu.map((items) => (
    <VerticalMenuColumn key={i++} items={items} />
  ));

  return (
    <div>{cols}</div>
  );
}
export default VerticalMenu;
