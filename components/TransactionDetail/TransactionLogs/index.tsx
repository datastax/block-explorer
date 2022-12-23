import DataBox from '@components/shared/DataBox';
import HTMLParser from '@components/shared/HTMLParser';
import { useMediaQuery } from '@mui/material';
import colors from '@styles/ThemeProvider/colors';
import { GetLogsByEthTransactionQuery } from 'lib/graphql/generated/generate';
import { getEventNameFromRawData } from 'utils';
import {
  StyledTypography,
  Container,
  Row,
  LogContainer,
  CustomBadge,
  List,
  ColouredText,
  Highlight,
} from './styles';

interface TransactionLogsProps {
  logsData: GetLogsByEthTransactionQuery;
}

const TransactionLogs = ({ logsData }: TransactionLogsProps) => {
  const smallScreen = useMediaQuery('(max-width:680px)');
  return (
    <Container>
      {logsData?.logs?.values?.map(
        ({
          log_index,
          address,
          data,
          decoded_data,
          topic0,
          topic1,
          topic2,
          topic3,
        }) => (
          <Row
            sx={{
              borderBottom: `1px solid ${colors.neutral100}`,
              display: 'flex',
              flexDirection: smallScreen ? 'column' : 'row',
            }}
            key={log_index}
          >
            <CustomBadge
              background={colors.actionPrimary}
              size="26px"
              color={colors.neutral100}
              circular
              padding="40px"
              badgeSize="80px"
            >
              {log_index}
            </CustomBadge>
            <LogContainer>
              <Row>
                <StyledTypography>
                  <Highlight color={colors.neutral300} size="16px" weight={500}>
                    Address
                  </Highlight>
                  <ColouredText color={colors.actionSecondary}>
                    {address}
                  </ColouredText>
                </StyledTypography>
              </Row>
              <Row>
                <StyledTypography>
                  <Highlight color={colors.neutral300} size="16px" weight={500}>
                    Name
                  </Highlight>
                  <ColouredText color={colors.actionSecondary}>
                    <HTMLParser
                      rawString={getEventNameFromRawData(
                        'Transfer(address,address,uint256)',
                        ''
                      )}
                    />
                  </ColouredText>
                </StyledTypography>
              </Row>
              <Row>
                <StyledTypography>
                  <Highlight color={colors.neutral300} size="16px" weight={500}>
                    Topics
                  </Highlight>
                  <List>
                    {topic0 && (
                      <StyledTypography>
                        <Row>
                          <CustomBadge
                            background={colors.neutral300}
                            size="16px"
                            color={colors.nordic}
                            padding="5px"
                            badgeSize="16px"
                          >
                            {0}
                          </CustomBadge>{' '}
                          <ColouredText color={colors.neutral300}>
                            {topic0}
                          </ColouredText>
                        </Row>
                      </StyledTypography>
                    )}
                    {topic1 && (
                      <StyledTypography>
                        <Row>
                          <CustomBadge
                            background={colors.neutral300}
                            size="16px"
                            color={colors.nordic}
                            padding="5px"
                            badgeSize="16px"
                          >
                            {1}
                          </CustomBadge>{' '}
                          <ColouredText color={colors.neutral300}>
                            {topic1}
                          </ColouredText>
                        </Row>
                      </StyledTypography>
                    )}
                    {topic2 && (
                      <StyledTypography>
                        <Row>
                          <CustomBadge
                            background={colors.neutral300}
                            size="16px"
                            color={colors.nordic}
                            padding="5px"
                            badgeSize="16px"
                          >
                            {2}
                          </CustomBadge>{' '}
                          <ColouredText color={colors.neutral300}>
                            {topic2}
                          </ColouredText>
                        </Row>
                      </StyledTypography>
                    )}
                    {topic3 && (
                      <StyledTypography>
                        <Row>
                          <CustomBadge
                            background={colors.neutral300}
                            size="16px"
                            color={colors.nordic}
                            padding="5px"
                            badgeSize="16px"
                          >
                            {3}
                          </CustomBadge>{' '}
                          <ColouredText color={colors.neutral300}>
                            {topic3}
                          </ColouredText>
                        </Row>
                      </StyledTypography>
                    )}
                  </List>
                </StyledTypography>
              </Row>
              <Row>
                <StyledTypography>
                  <Highlight color={colors.neutral300} size="16px" weight={500}>
                    Data
                  </Highlight>
                  <DataBox decodedData={decoded_data} rawData={data} />
                </StyledTypography>
              </Row>
            </LogContainer>
          </Row>
        )
      )}
    </Container>
  );
};

export default TransactionLogs;
