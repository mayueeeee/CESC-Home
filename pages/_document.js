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
              <title>CE Smart Camp 11</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link href="https://fonts.googleapis.com/css?family=Mitr:300,400" rel="stylesheet"/>
              <link rel="stylesheet" href="/static/fonts/fonts.css"  />
              <link rel="stylesheet" href="/static/css/styles.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css" integrity="sha256-jBpMJWNNWEGSSqsYSKzJ3Lw9VnIYMFPItx/yE5tl18M=" crossorigin="anonymous"/>
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/1.2.2/react-datepicker.min.css" />
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"/>
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