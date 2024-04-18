import React from 'react';

import './sidebar.scss';

const Sidebar = (props) => {
  const { children, title } = props;

  return (
    <section className="sidebar">
      <h2 className="sidebar__header">
        {title}
      </h2>
      <div className="sidebar__content">
        {children}
      </div>
    </section>
  );
}

export default Sidebar;
