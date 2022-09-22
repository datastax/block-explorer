/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ReactHtmlParser, { HTMLReactParserOptions } from 'html-react-parser'
import { ColouredText } from '@components/TransactionDetail/TransactionLogs/styles'

interface HTMLParserProps {
  rawString: string
}

const HTMLParser = ({ rawString }: HTMLParserProps): JSX.Element => {
  const parserOptions: HTMLReactParserOptions = {
    replace: (domNode: any) => {
      if (domNode?.name === 'colouredtext') {
        return (
          <ColouredText color={`${domNode?.attribs?.color.replace('{', '')}`}>
            {domNode?.children[0]?.data}
          </ColouredText>
        )
      }
    },
  }
  return ReactHtmlParser(rawString, parserOptions) as JSX.Element
}

export default HTMLParser
