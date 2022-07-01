/* eslint-disable @typescript-eslint/no-explicit-any */
import colors from 'styles/ThemeProvider/colors'
import {
  CartesianGrid,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Container } from './styles'
export type ChartType = {
  label: string
  value: number
}

type ChartProps = {
  className?: string
  data: ChartType[]
  domain?: Array<number>
  tooltip?: (payload: any) => JSX.Element
  hideZero?: boolean
  hideGradient?: boolean
}

const Chart = ({
  data,
  domain,
  hideZero,
  hideGradient,
  tooltip,
}: ChartProps) => {

  const CustomTooltip = (props: any) => {
    const { active, payload } = props
    return active && payload && payload.length && tooltip ? (
      <div>{tooltip(payload[0].payload)}</div>
    ) : null
  }

  const formatterYAxis = (value: number) => {
    if (hideZero && value === 0) {
      return ''
    }
    return `${value}`
  }

  return (
    <Container>
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgb(5, 216, 195)"
                stopOpacity={0.3}
              />
              <stop
                offset="89.5%"
                stopColor="rgb(5, 216, 195)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: '14px',
              fontWeight: 500,
              fill: colors.neutral100,
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: '14px',
              fontWeight: 400,
              fill: colors.neutral90,
            }}
            tickFormatter={formatterYAxis}
            type="number"
            dx={-5}
            domain={domain}
          />
          <CartesianGrid
            strokeDasharray="none"
            stroke={colors.nightRider}
            vertical={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: 'rgba(79, 146, 255, .2)',
              strokeWidth: 2,
            }}
          />
          <Area
            type="linear"
            dataKey="value"
            stroke={colors.actionPrimary}
            strokeWidth={'3px'}
            fillOpacity={hideGradient ? 0 : 1}
            fill="url(#gradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart
