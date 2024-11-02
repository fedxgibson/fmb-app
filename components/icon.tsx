// app/icon.tsx
import { ImageResponse } from 'next/server'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: '#0A2647',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 80 80">
          <circle cx="20" cy="20" r="6" fill="white"/>
          <circle cx="60" cy="20" r="6" fill="white"/>
          <circle cx="40" cy="50" r="6" fill="white"/>
          <line x1="20" y1="20" x2="60" y2="20" stroke="white" strokeWidth="1.5"/>
          <line x1="20" y1="20" x2="40" y2="50" stroke="white" strokeWidth="1.5"/>
          <line x1="60" y1="20" x2="40" y2="50" stroke="white" strokeWidth="1.5"/>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}