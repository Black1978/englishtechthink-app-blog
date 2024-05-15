import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL(process.env.BASE_URL),
    title: 'englishteachthink.com',
    description: 'Научиться думать на английском языке.',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                {process.env.NODE_ENV === 'production' && (
                    <meta
                        name='google-site-verification'
                        content='ITtrSTd-d2mg1NipO3xdI7HdqQkSwFXkwc0qxKCKQ_M'
                    />
                )}

                {process.env.NODE_ENV === 'production' && (
                    <script
                        async
                        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1319295110910312'
                        crossorigin='anonymous'
                    ></script>
                )}
            </head>
            <body className={inter.className}>
                <AuthProvider>
                    <ThemeContextProvider>
                        <ThemeProvider>
                            <div className='container'>
                                <div className='wrapper'>
                                    <Navbar />
                                    {children}
                                    <Footer />
                                </div>
                            </div>
                        </ThemeProvider>
                    </ThemeContextProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
