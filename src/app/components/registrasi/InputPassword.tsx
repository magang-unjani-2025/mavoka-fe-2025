'use client'

import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { UseFormRegisterReturn } from 'react-hook-form'
import clsx from 'clsx'

type InputPasswordProps = {
  label?: string
  placeholder?: string
  register: UseFormRegisterReturn
  error?: string
}

export default function InputPassword({
  label = 'Password',
  placeholder = 'Kata Sandi',
  register,
  error,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="w-full mb-3">
      {label && (
        <label className="block mb-1">
          {label}
          <span className="text-red-500 ml-1">*</span>
        </label>
      )}
      <div className="relative">
        <input
          {...register}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={clsx(
            'w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1] placeholder-gray-400 transition-colors duration-200',
            value ? 'text-black' : 'text-gray-400',
            error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300'
          )}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
