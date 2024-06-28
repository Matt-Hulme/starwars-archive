import { Skeleton } from '@mui/material'
import { useState } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string
  className?: string
  src: string
}

export const Image = ({ className, alt, src, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const imageClassName = `${isLoaded ? 'block' : 'hidden'} h-full inset-0 object-cover w-full ${className || ''}`

  return (
    <>
      {!isLoaded && (
        <Skeleton variant="rectangular" sx={{ borderRadius: '', width: '100%', height: '100%', backgroundColor: '#636363'}} />
      )}
      <img
        src={src}
        alt={alt}
        className={imageClassName}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </>
  )
}
