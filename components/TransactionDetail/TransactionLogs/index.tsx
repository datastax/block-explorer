import DataBox from '@components/shared/DataBox'
import HTMLParser from '@components/shared/HTMLParser'
import { useMediaQuery } from '@mui/material'
import colors from '@styles/ThemeProvider/colors'
import { TransactionLogsOutput } from 'lib/graphql/generated'
import { getEventNameFromRawData } from 'utils'
import {
  StyledTypography,
  Container,
  Row,
  LogContainer,
  CustomBadge,
  List,
  ColouredText,
  Highlight,
} from './styles'

interface TransactionLogsProps {
  logsData: TransactionLogsOutput[]
}

const TransactionLogs = ({ logsData }: TransactionLogsProps) => {
  const smallScreen = useMediaQuery('(max-width:680px)')
  return (
    <Container>
      {logsData.map(
        ({ log_index, address, name, topics, data, decoded_data, events }) => (
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
                      rawString={getEventNameFromRawData(name, events)}
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
                    {topics?.map((topic, index) => (
                      <StyledTypography key={index}>
                        <Row>
                          <CustomBadge
                            background={colors.neutral300}
                            size="16px"
                            color={colors.nordic}
                            padding="5px"
                            badgeSize="16px"
                          >
                            {index}
                          </CustomBadge>{' '}
                          <ColouredText color={colors.neutral300}>
                            {topic}
                          </ColouredText>
                        </Row>
                      </StyledTypography>
                    ))}
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
  )
}

export default TransactionLogs
