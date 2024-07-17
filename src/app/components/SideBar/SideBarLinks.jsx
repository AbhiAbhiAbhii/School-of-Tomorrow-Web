'use client'
export default function SideBarLinks({item}) {
  return (
    <li className='font-inter font-bold p-1 transition-all hover:bg-white hover:text-purpleB text-white text-sm cursor-pointer'>{item.text}</li>  
)
}
