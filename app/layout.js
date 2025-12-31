"use client";
import './style/index.css';
import localFont from 'next/font/local'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const zzzfont = localFont({
  src: '../public/zzzfont.ttf',
})

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={zzzfont.className}>
      <head>
        <title>MintColon3</title>
        <meta content="MintColon3" property="og:title" />
        <meta content="Mint • She/Her • 🏳️‍⚧️🇬🇧" property="og:description" />
        <meta content="https://mintcolon3.github.io/favicon.png" property="og:image" />
        <meta content="#e4a0ff" data-react-helmet="true" name="theme-color" />
        <link rel="icon" type="image/x-icon" href="./favicon2.png"></link>
      </head>
      
      <body>
        <div style={{ display: "flex", flexDirection: 'column', maxHeight: '98vh' }}>
          <nav className="pagebar">
            <ul>
              <li>
                <Link href="/" className={usePathname() === '/' ? 'nav-link nav-link--active' : 'nav-link'}>Home</Link>
              </li>
              <li>
                <Link href="/projects" className={usePathname() === '/projects' ? 'nav-link nav-link--active' : 'nav-link'}>Projects</Link>
              </li>
            </ul>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}