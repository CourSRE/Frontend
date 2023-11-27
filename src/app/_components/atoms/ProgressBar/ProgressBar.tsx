import React from 'react'

type TProps = {
  percentage: number | string
}

export const ProgressBar: React.FC<TProps> = ({percentage}) => {
  return (
    <div className='w-full bg-gray-100 flex h-[5px]'>
      <div className='h-full bg-primary-base' style={{width: percentage}} />
    </div>
  )
}