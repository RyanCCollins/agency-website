import * as React from 'react';
import serialize from 'serialize-javascript';

export interface Props {
  content: string;
  state: {};
  scriptHash: string;
  vendorHash: string;
  cssHash: string;
  styles: string;
  title?: string;
}

export default function Html({
  content,
  state,
  scriptHash,
  vendorHash,
  cssHash,
  styles,
  title = 'The Agency',
}: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Hind|Montserrat|Roboto+Mono" rel="stylesheet" />
        <link href="//cdn.muicss.com/mui-0.9.16/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
        <link href={`public${cssHash}`} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script src={`public${scriptHash}`} charSet="UTF-8" />
        <script src={`public${vendorHash}`} type="text/javascript" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__=${serialize(state, { isJSON: true })};`,
          }}
          charSet="UTF-8"
        />
      </body>
    </html>
  );
};
