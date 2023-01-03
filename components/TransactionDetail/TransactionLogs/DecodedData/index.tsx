import { Typography } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';
import React from 'react';
import DecodeRow from '../DecodeRow';
import { ColouredText, Row } from '../styles';

interface DecodedDataProps {
  data: string | undefined | null;
}
const DecodedData = ({ data }: DecodedDataProps) => {
  if (!data) return null;

  const processedObject = JSON.parse(data);
  if (!processedObject || Object.keys(processedObject).length < 1)
    return <div>Nothing To Decode</div>;

  const processedData = () => {
    let UI: JSX.Element[];
    if (Array.isArray(processedObject)) {
      UI = processedObject.map((dataObject, index) => (
        <DecodeRow key={index} data={dataObject} />
      ));
    } else {
      UI = Object.keys(processedObject).map((key) => (
        <Row key={key}>
          <ColouredText sx={{ minWidth: '200px' }} color={colors.neutral300}>
            {key}
          </ColouredText>
          <Typography marginLeft={'10px'} color={colors.neutral100}>
            {processedObject[key]}
          </Typography>
        </Row>
      ));
    }
    return UI;
  };

  return <div>{processedData()}</div>;
};

export default DecodedData;
