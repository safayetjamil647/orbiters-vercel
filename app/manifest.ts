import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Orbiters — Specialized Digital Agency',
    short_name: 'Orbiters',
    description: 'Digital marketing and technology for Fintech, Medicare, and Automotive scale-ups.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1120',
    theme_color: '#00C896',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

