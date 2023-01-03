import DecodedData from '@components/TransactionDetail/TransactionLogs/DecodedData';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Scalars } from 'lib/graphql/generated/generate';
import React, { useState } from 'react';
import { InputBox, CustomButton } from './styles';

interface DataBoxProps {
  decodedData: Maybe<Scalars['String']>;
  rawData: Maybe<Scalars['String']>;
}

const DataBox = ({ decodedData, rawData }: DataBoxProps) => {
  const [isDecoded, setIsDecoded] = useState(false);
  return (
    <InputBox>
      {isDecoded ? <DecodedData data={decodedData as string} /> : rawData}
      <CustomButton
        variant="contained"
        size="small"
        onClick={() => setIsDecoded(!isDecoded)}
        disabled={Object.keys(JSON.parse(decodedData as string)).length < 1}
      >
        {isDecoded ? 'Hex' : 'Dec'}
      </CustomButton>
    </InputBox>
  );
};

export default DataBox;
