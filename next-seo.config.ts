import { DefaultSeoProps } from 'next-seo'

const seoConfig: DefaultSeoProps = {
  canonical: 'https://erickchristian.netlify.app/',
  defaultTitle: 'Erick Christian',
  titleTemplate: '%s - Erick Christian',
  description: 'Web developer. I love to try out new things.',
  openGraph: {
    url: 'https://erickchristian.netlify.app/',
    type: 'website',
    title: 'Erick Christian',
    description: 'Web developer. I love to try out new things.'
    // ,images: [
    //   {
    //     url: 'https://lokr.netlify.app/og-image.png',
    //     width: 400,
    //     height: 240,
    //     alt: 'lokr.'
    //   }
    // ]
  },
  twitter: {
    cardType: 'summary',
    site: 'https://erickchristian.netlify.app/'
  }
}

export default seoConfig
