import React from 'react'
import DashbordIcon from '@/app/assets/images/menu/dashboard.svg';
import ProfileIcon from '@/app/assets/images/menu/perfil.svg'
import LogoutIcon from '@/app/assets/images/menu/corner-up-left.svg';
import MenuButton from './MenuButton';
import GroupSideBar from './GroupSideBar';

const Menu = () => {
  const items = [
    {
      icon: DashbordIcon,
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: ProfileIcon,
      title: 'Perfil',
      path: '/profile'
    }
  ]

  return (
    <div>
      <GroupSideBar hasBorder={true}>
        {items.map((item) => <MenuButton key={crypto.randomUUID()} {...item} />)}
      </GroupSideBar>
      <GroupSideBar>
        <MenuButton icon={LogoutIcon} title={'Sair'} path={'/logout'} />
      </GroupSideBar>
    </div>
  )
}

export default Menu