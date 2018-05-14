import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import { appleStockData } from '../data/apple-stock'
import { tweetsSmallData } from '../data/tweets-small'

import Sparkline from '../src/components/Sparkline'
import BarChart from '../src/components/BarChart'

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
const tweetsSmallTooltipContent = d => {
  return (
    <div className="tooltip-content">
      <p>
        <span className="tooltip-value">{`${d.tweets} from ${d.user}`}</span>
      </p>
    </div>
  )
}
const appleStockTooltipContent = d => {
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
storiesOf('Sparkline', module).add('with hover mark and tooltip', () => (
  <Sparkline
    data={formattedAppleStockData}
    xAccessor={d => new Date(d.date).getTime() / 1000}
    yAccessor="close"
    lineColor="steelblue"
    size={[460, 80]}
    tooltipContent={appleStockTooltipContent}
  />
))
storiesOf('BarChart', module).add('Vertical', () => (
  <BarChart
    size={[500, 500]}
    data={tweetsSmallData}
    oAccessor="user"
    rAccessor="tweets"
    tooltipContent={tweetsSmallTooltipContent}
    projection="vertical"
    oLabel={true}
    margin={{ left: 50, right: 50, bottom: 28, top: 40 }}
  />
))
storiesOf('BarChart', module).add('Horizontal', () => (
  <BarChart
    size={[500, 500]}
    data={tweetsSmallData}
    oAccessor="user"
    rAccessor="tweets"
    tooltipContent={tweetsSmallTooltipContent}
    projection="horizontal"
    oLabel={true}
    margin={{ left: 60, right: 50, bottom: 28, top: 40 }}
  />
))
storiesOf('BarChart', module).add('Vertical Time Series', () => (
  <BarChart
    size={[10000, 500]}
    data={appleStockData}
    oAccessor="date"
    rAccessor="close"
    tooltipContent={appleStockTooltipContent}
    projection="vertical"
    margin={{ left: 1, right: 1, bottom: 1, top: 1 }}
  />
))
storiesOf('BarChart', module).add('Horizontal Time Series', () => (
  <BarChart
    size={[500, 10000]}
    data={appleStockData}
    oAccessor="date"
    rAccessor="close"
    tooltipContent={appleStockTooltipContent}
    projection="horizontal"
    margin={{ left: 1, right: 1, bottom: 1, top: 1 }}
  />
))
