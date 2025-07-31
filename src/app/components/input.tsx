'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm text-black">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1]',
            error ? 'border-red-500' : 'border-gray-300',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
