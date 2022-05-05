import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SidebarStates } from '../../model/enums';

import './styles.scss';

interface ComponentInterface {
  id: string;
  state: SidebarStates;
  children: React.ReactNode;
}

const Portal = ({ id, state, children }: ComponentInterface) => {
  const portalRoot = document.getElementById('sidebars') as HTMLDivElement;
  const rootEl = document.createElement('div') as HTMLDivElement;
  rootEl.id = id;
  const { current } = useRef<HTMLDivElement>(rootEl);

  const openSidebar = (sidebar: HTMLDivElement) => {
    setTimeout(() => {
      sidebar.classList.add('active');
      document.body.classList.add('sidebar-open');
    }, 50);
  };

  const closeSidebar = (sidebar: HTMLDivElement) => {
    setTimeout(() => {
      sidebar.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    }, 50);
  };

  useEffect(() => {
    state ? openSidebar(current) : closeSidebar(current);

    portalRoot!.appendChild(current);
    return () => void portalRoot!.removeChild(current);
  });

  return createPortal(children, current);
};

export default Portal;
