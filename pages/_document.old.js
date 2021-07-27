import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
      }

      

  render() {
    return (
      <html>
        <Head>
              {/*<title>CE Smart Camp 11</title>*/}
              {/*<meta name="viewport" content="initial-scale=1.0, width=device-width" />*/}
              <meta property="og:title" content="CE Smart Camp 11 @ KMITL"/>              
              <meta property="og:url" content="http://cesmartcamp.com"/>
              <meta property="og:description" content="CE SMART CAMP 11เป็นค่ายอบรมเชิงปฏิบัติการเพื่อเสริมสร้างความรู้ ให้แก่น้องๆนักเรียนในระดับชั้นมัธยมศึกษาตอนปลาย"/>
              <meta property="og:type" content="company"/>
              <meta property="og:image" content="https://cesc.kmi.tl/static/images/banner.png"/>
              <link href="https://fonts.googleapis.com/css?family=Mitr:300,400" rel="stylesheet"/>
              <link rel="stylesheet" href="/public/static/fonts/fonts.css"  />
              <link rel="stylesheet" href="/public/static/css/styles.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha256-azvvU9xKluwHFJ0Cpgtf0CYzK7zgtOznnzxV4924X1w=" crossOrigin="anonymous" />
              <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossOrigin="anonymous"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />              
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.3.2/dist/flatpickr.css"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.3.2/dist/ie.css"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css" />
              {this.props.styleTags}

            </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
          
        </body>
      </html>
    )
  }
}