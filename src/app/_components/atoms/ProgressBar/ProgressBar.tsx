import React from 'react'

type TProps = {
  percentage: number | string
  className?: string
  color?: string
}

export const ProgressBar: React.FC<TProps> = ({percentage, className, color}) => {
  return (
    <div className={`w-full bg-gray-100 flex h-[5px] ${className}`}>
      <div className={`h-full ${color ?? "bg-primary-base"}`} style={{width: percentage+ "%"}} />
    </div>
  )
}