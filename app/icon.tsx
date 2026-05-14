import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0b1528',
          borderRadius: '4px',
          border: '2px solid #0b1528',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          boxShadow: '1px 1px 0px #dc2626',
        }}
      >
        HP
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
