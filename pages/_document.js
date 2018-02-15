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
              <link rel="stylesheet" href="/static/fonts/fonts.css"  />
              <link rel="stylesheet" href="/static/css/styles.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css" integrity="sha256-jBpMJWNNWEGSSqsYSKzJ3Lw9VnIYMFPItx/yE5tl18M=" crossorigin="anonymous"/> 
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