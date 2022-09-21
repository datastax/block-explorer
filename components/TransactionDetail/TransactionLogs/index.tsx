import colors from '@styles/ThemeProvider/colors'
import { LogsData } from 'types'
import {
  StyledTypography,
  Container,
  Row,
  LogContainer,
  CustomBadge,
  List,
  ColouredText,
  Highlight,
  InputBox,
  CustomButton,
} from './styles'

interface TransactionLogsProps {
  logsData: LogsData[]
}

const TransactionLogs = ({ logsData }: TransactionLogsProps) => {
  return (
    <Container>
      {logsData.map(
        ({ logIndex, address, name, topics, data, decodedData }) => (
          <Row
            sx={{
              borderBottom: `1px solid ${colors.neutral100}`,
            }}
            key={address}
          >
            <CustomBadge
              background={colors.actionPrimary}
              size="26px"
              color={colors.neutral100}
              circular
              padding="40px"
              badgeSize="80px"
            >
              {logIndex}
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
                    {name}
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
                      <StyledTypography key={topic}>
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
                  <InputBox>
                    {data}{' '}
                    <CustomButton variant="contained" size="small">
                      Dec
                    </CustomButton>
                  </InputBox>
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
