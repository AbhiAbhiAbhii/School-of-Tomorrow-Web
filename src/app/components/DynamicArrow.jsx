import React from 'react'

export default function DynamicArrow({ strokeColor, className }) {
  return (
    <div className={`${className}`}>
        <svg width="100%" height="100%" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.1348H27.1107M27.1107 12.1348C20.7264 9.23992 18.2798 6.68865 15.3494 1M27.1107 12.1348C20.78 14.9481 18.0985 17.2868 15.3494 23.2695" 
                stroke={strokeColor} 
                stroke-width="2.90472" stroke-linejoin="bevel"
            />
        </svg>
    </div>
  )
}
