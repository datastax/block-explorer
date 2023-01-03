import { Box, TableContainer } from '@mui/material';
import { styled } from '@mui/system';
import colors from '@styles/ThemeProvider/colors';
import { CustomTableProps } from '@types';
import { TableCell } from '@mui/material';
import { colorColumnNames, colorColumnHeaderNames } from '@constants';
import theme from '@styles/ThemeProvider/theme';

const MainContainer = styled(Box)({
  width: '100%',
  paddingLeft: '44px',
  display: 'flex',
  background: colors.surfaceCard,
  flexDirection: 'column',
});
const Container = styled(Box)({
  maxWidth: '1352px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '30px',
});

const MainHeading = styled(Box)({
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '38px',
  color: colors.neutral100,
});
const BlockTableContainer = styled(Box)({
  color: 'white',
  maxWidth: '1352px',
  marginBottom: '30px',
  background: colors.surfaceCard,
});

const CustomTableCell = styled(TableCell)((props: CustomTableProps) => ({
  color: colorColumnNames.includes(props.color)
    ? colors.actionSecondary
    : colors.neutral100,
  borderBottom: props.border,
  fontWeight: props.fontWeight,
  fontSize: '14px',
  [theme.breakpoints.down('mdB')]: {
    padding: '15px',
  },
  [theme.breakpoints.down('mdA')]: {
    fontSize: '11px',
  },
  lineHeight: props.lineheight,
}));

const CustomTableCellHeder = styled(TableCell, {
  shouldForwardProp: (prop: string) => prop[0] !== '$',
})((props: CustomTableProps) => ({
  color:
    colorColumnHeaderNames.includes(props.color) && props.$istransaction
      ? colors.actionSecondary
      : colors.neutral300,
  borderBottom: props.border,
  fontWeight: props.fontWeight,
  fontSize: '14px',
  [theme.breakpoints.down('mdB')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('mdA')]: {
    fontSize: '11px',
  },
  lineHeight: props.lineheight,
}));

const Records = styled(Box)({
  padding: '20px',
  paddingLeft: '20px',
});
const CustomTableContainer = styled(TableContainer)({
  border: `1px solid ${colors.borderPrimary}`,
  borderRadius: '6px',
  textDecoration: 'none',
  background: 'linearGradient(180deg, #121212 100%, #1d2025 100%)',
  padding: '32px',
});
const FontStyling = styled(Box)({
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
});

const HeaderBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
});

const CustomTableCellBox = styled('div')({
  width: '105%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
});

const PercentageValue = styled('div')({
  fontSize: '12px',
  color: colors.neutral300,
});

export {
  MainContainer,
  Container,
  MainHeading,
  BlockTableContainer,
  CustomTableCell,
  Records,
  CustomTableContainer,
  FontStyling,
  CustomTableCellHeder,
  HeaderBox,
  CustomTableCellBox,
  PercentageValue,
};
