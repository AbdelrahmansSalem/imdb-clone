"use client"
import { useTheme } from 'next-themes'
import {MdLightMode,MdDarkMode} from 'react-icons/md'
export default function DarkModeSwitch() {
  const {theme ,setTheme,systemTheme}=useTheme()
  const currentTheme=theme ==='system'?systemTheme:theme
  return (
    <div>
      {currentTheme==='dark' ?
      <MdDarkMode onClick={()=>setTheme('light')} className='text-2xl cursor-pointer hover:text-amber-500' />
      :<MdLightMode onClick={()=>setTheme('dark')} className='text-2xl cursor-pointer hover:text-amber-500' />}
    </div>
  )
}
