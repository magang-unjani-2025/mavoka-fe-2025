'use client'

import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const baseClass =
    'rounded-[50px] px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none'

  const variants = {
    primary: 'bg-[#0F67B1] text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  }

  return (
    <button className={clsx(baseClass, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
