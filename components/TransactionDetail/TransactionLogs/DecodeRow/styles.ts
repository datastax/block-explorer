import colors from '@styles/ThemeProvider/colors';
import { Select, styled } from '@mui/material';

const CustomSelect = styled(Select)({
  color: colors.actionPrimary,
  height: '27px',
  width: '80px',
  fontSize: '11px',
  border: `1px solid ${colors.neutral100}`,
  padding: '5px',
  '& svg': { fill: colors.neutral100, marginLeft: '10px' },
});

export { CustomSelect };
