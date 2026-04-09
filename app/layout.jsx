import './globals.css'

export const metadata = {
  title: 'Portfólio',
  description: 'Portfólio moderno com foco editorial e dados mockados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
