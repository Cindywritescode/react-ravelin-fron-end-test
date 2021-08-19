import { Box } from './Box';
import { useEffect, useState } from 'react';


export const Carousel = ({
  children,
  timeout = 5000
}) => {
  const [index, setIndex] = useState(0)
  const selected = children[index]
  const shift = () => setIndex((index + 1) % children.length)

  useEffect(() => {
    const timer = setTimeout(shift, timeout)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <Box>
      {selected}
    </Box>
  )
}
