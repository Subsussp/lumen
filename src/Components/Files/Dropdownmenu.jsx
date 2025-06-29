import React from 'react';
import { Database, User,DoorClosed , Eye, BoxIcon, Paintbrush, Compass, Settings, Globe2, Moon, GraduationCap, HelpCircle, LifeBuoy, PersonStanding, Command } from 'lucide-react';
import { LiaShoppingBagSolid ,LiaFanSolid} from "react-icons/lia";

const menuItems = [
  // { icon: <BoxIcon size={20} />, label: 'Your Inventory',link: '/control',admin:true},
  // { icon: <User size={20} />, label: 'Profile' ,link: '/profile'},
  // { icon: <Database size={20} />, label: 'Dashboard',link: '/dashboard' },
  // { icon: <LiaShoppingBagSolid size={20} />, label: 'Cart',link: '/cart',require:true},
  // { icon: <Eye size={20} />, label: 'Watchlist',link: '' },
  // { icon: <BoxIcon size={20} />, label: 'Your orders',link: '' },
  
  // { icon: <DoorClosed size={20} />, label: 'Logout' ,link: '/logout',require:true},
  { icon: <Command size={20} />, label: 'Get started',href: 'https://form.jotform.com/250372428512048'},
    // { divider: true },
    // { icon: <Settings size={20} />, label: 'Settings' ,link: '/Settings'},
    // { icon: <Globe2 size={20}/>, label: 'Language', suffix: 'en >',link: '' },
    { icon: <GraduationCap size={20} />, label: 'About' ,link: '/details'},
    // { divider: true },
    // { icon: <HelpCircle size={20} />, label: 'Help center' ,link: '/proccess'},
    { icon: <LifeBuoy size={20} />, label: 'Contact',link: '/contact'}
  ];

export default menuItems