import Head from 'next/head'

export default ({...props}) => (
  <Head>
    <title>{props.title ? props.title : 'Some Title'}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel="stylesheet" type="text/css" href="static/styles.css" />
  </Head>
)
