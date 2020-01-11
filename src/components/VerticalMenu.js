import React from 'react';

function VerticalMenuColumn(props) {
  const { items } = props;
  const menu = items.map((item) => (
    <li key={item[0]}>
      <a href={item[1]}>{item[2]}</a>
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
