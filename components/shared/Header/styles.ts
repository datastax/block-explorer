import { styled } from '@mui/system';
import colors from '@styles/ThemeProvider/colors';
import { Box, Stack, Theme } from '@mui/material';
const Container = styled(Box)({
  background: colors.neutral900,
  width: '100%',
});

interface WrapperProps {
  height?: string;
  padding?: string;
  theme: Theme;
  isHome?: boolean;
  marginTop?: string;
}
interface LogoProps {
  isHome?: boolean;
  theme: Theme;
}
interface CustomStackProps {
  $isHome?: boolean;
  theme: Theme;
}
const Wrapper = styled(Box)(
  ({ height, theme, isHome, marginTop }: WrapperProps) => ({
    height: height,
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    justifyContent: 'space-between',
    padding: !isHome ? '26px 44px 0px' : '0px 44px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: isHome ? 'row' : 'row',
    },
    [theme.breakpoints.down('smA')]: {
      flexDirection: isHome ? 'row' : 'column',
      marginTop: marginTop,
      padding: !isHome ? '26px 15px 0px' : '0px 15px',
    },
  })
);

const StyledLink = styled('a')({
  textDecoration: 'None',
  color: colors.neutral100,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '14px',
});

const SearchBox = styled(Box)((props) => ({
  width: '80%',
  display: 'flex',
  flexDirection: 'row-reverse',
  [props.theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));
const LogoBox = styled(Box)(({ isHome, theme }: LogoProps) => ({
  width: '20%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: '15px',
    marginTop: isHome && '15px',
  },
}));
const StyledLabel = styled('div')({
  span: {
    color: colors.semanticRed,
  },
  'span:last-child': {
    color: colors.neutral300,
  },
});
const CustomStack = styled(Stack, {
  shouldForwardProp: (prop: string) => prop[0] !== '$',
})(({ $isHome, theme }: CustomStackProps) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: $isHome && '5px',
    width: '100%',
  },
}));
export {
  Container,
  Wrapper,
  StyledLink,
  StyledLabel,
  SearchBox,
  LogoBox,
  CustomStack,
};
