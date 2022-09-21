import colors from '@styles/ThemeProvider/colors'
import { TransactionLogsOutput } from 'lib/graphql/generated'
import { useState } from 'react'
import DecodedData from './DecodedData'
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
  logsData: TransactionLogsOutput[]
}

const TransactionLogs = ({ logsData }: TransactionLogsProps) => {
  const [isDecoded, setIsDecoded] = useState(false)
  return (
    <Container>
      {logsData.map(
        ({ log_index, address, name, topics, data, decoded_data }) => (
          <Row
            sx={{
              borderBottom: `1px solid ${colors.neutral100}`,
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
                    {isDecoded ? (
                      <DecodedData data={decoded_data as string} />
                    ) : (
                      data
                    )}
                    <CustomButton
                      variant="contained"
                      size="small"
                      onClick={() => setIsDecoded(!isDecoded)}
                    >
                      {isDecoded ? 'Hex' : 'Dec'}
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
