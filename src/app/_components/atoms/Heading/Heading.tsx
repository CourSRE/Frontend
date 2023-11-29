import React from 'react'

type TProps = {
  title?: string | React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export const Heading: React.FC<TProps> = ({title, level = 2, className}) => {
  switch(level){
    case 1:
      return <h1 className={`text-2xl font-semibold text-gray-900 ${className}`}>{title}</h1>
    case 2:
      return <h2 className={`text-2xl font-semibold text-gray-900 ${className}`}>{title}</h2>
    case 3:
      return <h3 className={`text-2xl font-semibold text-gray-900 ${className}`}>{title}</h3>
    case 4:
      return <h4 className={`text-2xl font-semibold text-gray-900 ${className}`}>{title}</h4>
    case 5:
      return <h5 className={`text-2xl font-semibold text-gray-900 ${className}`}>{title}</h5>
    case 6:
      return <h6 className={`text-2xl font-semibold text-gray-900 ${className}`}>{title}</h6>
  }
}