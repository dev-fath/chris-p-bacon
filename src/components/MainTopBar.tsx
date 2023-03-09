import React, { useState } from 'react';

const MainTopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return <div></div>;
};

export default MainTopBar;
