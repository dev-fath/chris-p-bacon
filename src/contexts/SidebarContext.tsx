import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

interface SideBarContextInterface {
  isOpen: boolean;
  handleToggleSidebar: () => void;
}

export const SidebarContext = createContext<SideBarContextInterface>({
  isOpen: false,
  handleToggleSidebar: () => {
    return;
  },
});

export interface SidebarContextPropsInterface {
  children: ReactNode;
}

const SidebarProvider = ({ children }: SidebarContextPropsInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleToggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
