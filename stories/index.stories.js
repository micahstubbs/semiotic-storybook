import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import { appleStockData } from '../data/apple-stock'
import { tweetsSmallData } from '../data/tweets-small'

import Sparkline from '../src/components/Sparkline'
import BarChart from '../src/components/BarChart'

import './styles.css'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
const formattedAppleStockData = [
  {
    label: '',
    coordinates: appleStockData
  }
]
const tweetsSmallBarChartTooltipContent = d => {
  const { tweets, user } = d.pieces[0]
  return (
    <div className="tooltip-content">
      <p>
        <span className="tooltip-value">{`${tweets} tweets from ${user}`}</span>
      </p>
    </div>
  )
}
const appleStockSparklineTooltipContent = d => {
  return (
    <div className="tooltip-content">
      <p>
        <span className="tooltip-value">{`$${d.close} per share on ${
          d.date
        }`}</span>
      </p>
    </div>
  )
}
const appleStockBarChartTooltipContent = d => {
  const { close, date } = d.pieces[0]
  return (
    <div className="tooltip-content">
      <p>
        <span className="tooltip-value">{`$${close} per share on ${date}`}</span>
      </p>
    </div>
  )
}
storiesOf('Sparkline', module).add('with hover mark and tooltip', () => (
  <Sparkline
    data={formattedAppleStockData}
    xAccessor={d => new Date(d.date).getTime() / 1000}
    yAccessor="close"
    lineColor="steelblue"
    size={[460, 80]}
    tooltipContent={appleStockSparklineTooltipContent}
  />
))
storiesOf('BarChart', module).add('Vertical', () => (
  <BarChart
    projection="vertical"
    size={[500, 500]}
    data={tweetsSmallData}
    oAccessor="user"
    rAccessor="tweets"
    tooltipContent={tweetsSmallBarChartTooltipContent}
    oLabel={true}
    oPadding={5}
    margin={{ left: 50, right: 50, bottom: 28, top: 40 }}
  />
))
storiesOf('BarChart', module).add('Horizontal', () => (
  <BarChart
    projection="horizontal"
    size={[500, 500]}
    data={tweetsSmallData}
    oAccessor="user"
    rAccessor="tweets"
    tooltipContent={tweetsSmallBarChartTooltipContent}
    oLabel={true}
    oPadding={5}
    margin={{ left: 60, right: 50, bottom: 28, top: 40 }}
  />
))
storiesOf('BarChart', module).add('Vertical Narrow Bars', () => (
  <BarChart
    projection="vertical"
    size={[500, 500]}
    pixelColumnWidth={25}
    data={tweetsSmallData}
    oAccessor="user"
    rAccessor="tweets"
    tooltipContent={tweetsSmallBarChartTooltipContent}
    oLabel={true}
    oPadding={5}
    margin={{ left: 50, right: 50, bottom: 28, top: 40 }}
  />
))
storiesOf('BarChart', module).add('Horizontal Narrow Bars', () => (
  <BarChart
    projection="horizontal"
    size={[500, 500]}
    pixelColumnWidth={25}
    data={tweetsSmallData}
    oAccessor="user"
    rAccessor="tweets"
    tooltipContent={tweetsSmallBarChartTooltipContent}
    oLabel={true}
    oPadding={5}
    margin={{ left: 60, right: 50, bottom: 28, top: 40 }}
  />
))
storiesOf('BarChart', module).add('Vertical Time Series', () => (
  <BarChart
    projection="vertical"
    size={[10000, 500]}
    data={appleStockData}
    oAccessor="date"
    rAccessor="close"
    tooltipContent={appleStockBarChartTooltipContent}
    margin={{ left: 1, right: 1, bottom: 1, top: 1 }}
  />
))
storiesOf('BarChart', module).add('Horizontal Time Series', () => (
  <BarChart
    projection="horizontal"
    size={[500, 10000]}
    data={appleStockData}
    oAccessor="date"
    rAccessor="close"
    tooltipContent={appleStockBarChartTooltipContent}
    margin={{ left: 1, right: 1, bottom: 1, top: 1 }}
  />
))
