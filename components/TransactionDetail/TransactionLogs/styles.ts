import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';

interface CustomBadgeProps {
  background: string;
  color: string;
  size: string;
  circular?: boolean;
  padding: string;
  badgeSize: string;
}

interface ColouredTextProps {
  color: string;
}

interface HighlightProps {
  color: string;
  size: string;
  weight: number;
}

const StyledTypography = styled(Typography)({
  color: colors.neutral100,
  display: 'flex',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'center',
});

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  border: `1px solid ${colors.borderPrimary}`,
  borderRadius: '6px',
  textDecoration: 'none',
  background: colors.neutral900,
  padding: '24px',
});

const Row = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '5px 0px',
});

const LogContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginLeft: '50px',
  padding: '25px',
  overflowX: 'scroll',
});

const CustomBadge = styled('span')(
  ({
    color,
    size,
    background,
    circular,
    padding,
    badgeSize,
  }: CustomBadgeProps) => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: badgeSize,
    height: badgeSize,
    background: background,
    borderRadius: circular ? '100%' : '2px',
    padding: padding,
    fontSize: size,
    fontWeight: 700,
    color: color,
    marginRight: '10px',
  })
);

const List = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  fontSize: '16px',
  fontWeight: 500,
});

const ColouredText = styled('span')(({ color }: ColouredTextProps) => ({
  color: color,
}));

const Highlight = styled('span')(({ color, size, weight }: HighlightProps) => ({
  color: color,
  fontSize: size,
  fontWeight: weight,
  marginRight: '20px',
  width: '100px',
  minWidth: '100px',
}));

export {
  StyledTypography,
  Container,
  Row,
  LogContainer,
  CustomBadge,
  List,
  ColouredText,
  Highlight,
};
