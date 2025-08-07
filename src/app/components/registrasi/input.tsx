'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, required, ...props }, ref) => {
    return (
      <div className="w-full mb-3">
        {label && (
          <label className="block mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1]',
            error ? 'border-red-500' : 'border-gray-300',
            className
          )}
          required={required}
          {...props}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
