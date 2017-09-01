import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {renderStaticOptimized} from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const page = renderPage()
    const styles = renderStaticOptimized(() => page.html)
    return {...page, ...styles}
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = this.props
    if (typeof window !== 'undefined') {
      rehydrate(ids)
    } else {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>With Glamorous</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
