import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import type { ApexOptions } from 'apexcharts'
import type { Props as ApexChartsProps } from 'react-apexcharts'
import { theme } from '@chakra-ui/react'

export type ChartProps = ApexChartsProps & {}

const DEFAULT_OPTIONS: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    custom: ({ seriesIndex, dataPointIndex, w }) => {
      const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
      const component = `<span style="padding: 0.5rem; color:#000">${data}</span>`

      return component
    },
    style: {
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes.xl
    }
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-11-26T00:00:00.000Z',
      '2021-11-27T00:00:00.000Z',
      '2021-11-28T00:00:00.000Z',
      '2021-11-29T00:00:00.000Z',
      '2021-11-30T00:00:00.000Z',
      '2021-12-01T00:00:00.000Z',
      '2021-12-02T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

export const Chart = ({ ...rest }: ChartProps) => {
  const ChartComponent = useMemo(
    () =>
      dynamic(() => import('react-apexcharts'), {
        ssr: false
      }),
    []
  )

  return <ChartComponent {...rest} options={DEFAULT_OPTIONS} />
}
