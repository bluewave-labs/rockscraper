'use client';
import { useIsMobile } from '@src/hooks/use-mobile';
import { RoutesType } from '@src/utils/interfaces';
import { DISCORD, DOCUMENTATION } from '@src/utils/links';
import routeDescription from '@src/utils/route-description';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import style from './header.module.scss';

const Header = () => {
  const isMobile = useIsMobile();
  let pathname = usePathname();

  if (pathname === '/') {
    pathname = '/dashboard';
  }

  const info = routeDescription[pathname.replace('/', '') as RoutesType] || {
    title: 'Not Found',
    description: "This page doesn't exist",
  };

  return (
    <div className={`glassy-background-strong border-b border-b-gray-0/20 min-h-[64px] flex items-center justify-between px-4 py-2.5`}>
      <div className={style.header__left}>
        <h1 className={style['header__left--title']}>{info.title}</h1>
        <p className={style['header__left--desc']}>{info.description}</p>
      </div>
      <div className={style.header__right}>
        <Button asChild variant={'secondary'} size={isMobile ? 'xs' : 'default'}>
          <a className={style['header__right--btn']} href={DISCORD} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </Button>
        <Button asChild size={isMobile ? 'xs' : 'default'}>
          <a className={style['header__right--btn']} href={DOCUMENTATION} target="_blank" rel="noopener noreferrer">
            Documentation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Header;
