import colors from 'styles/ThemeProvider/colors'
import {
  CartesianGrid,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
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
  tooltip?: () => void
  hideZero?: boolean
  hideGradient?: boolean
}

const Chart = ({ data, domain, hideZero, hideGradient }: ChartProps) => {
  const formatterYAxis = (value: number) => {
    if (hideZero && value === 0) {
      return ''
    }
    return `${value}`
  }

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
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
