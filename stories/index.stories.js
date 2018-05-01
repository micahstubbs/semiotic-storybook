import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import Sparkline from '../src/components/Sparkline'
import { appleStockData } from '../data/apple-stock'

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
const sparklineTooltipContent = d => {
  return (
    <div className="tooltip-content">
      <p>
        <span className="tooltip-value">{`$${d.close} per share on ${d.date}`}</span>
      </p>
    </div>
  )
}
storiesOf('Sparkline', module).add('simple example', () => (
  <Sparkline
    data={formattedAppleStockData}
    xAccessor={d => new Date(d.date).getTime() / 1000}
    yAccessor="close"
    lineColor="steelblue"
    size={[460,80]}
    tooltipContent={sparklineTooltipContent}
  />
))
