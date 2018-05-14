import React from 'react'
import { PropTypes } from 'prop-types'

import { OrdinalFrame } from 'semiotic'

function BarChart(props) {
  console.log('props from BarChart', props)
  const {
    size,
    data,
    oAccessor,
    rAccessor,
    tooltipContent,
    projection,
    oLabel,
    margin,
    oPadding,
    pixelColumnWidth
  } = props

  let axisOrientation = 'bottom'
  if (projection === 'horizontal') axisOrientation = 'left'

  const axis = {
    orient: axisOrientation,
    tickFormat: d => d,
    label: {
      name: 'axis label',
      position: { anchor: 'middle' },
      locationDistance: 40
    }
  }

  const ordinalFrameProps = {
    size,
    data,
    oAccessor,
    rAccessor,
    projection,
    oLabel,
    margin,
    tooltipContent,
    oPadding,
    pixelColumnWidth,
    axis,
    style: { fill: 'steelblue', stroke: 'white' },
    type: 'bar',
    hoverAnnotation: true
  }
  return <OrdinalFrame {...ordinalFrameProps} />
}

// xAccessor and yAccessor
// could be a functions too iirc
// update the proptypes for these
// to be function or string later
BarChart.propTypes = {
  size: PropTypes.array,
  data: PropTypes.array.isRequired,
  oAccessor: PropTypes.string.isRequired,
  rAccessor: PropTypes.string.isRequired,
  tooltipContent: PropTypes.func,
  projection: PropTypes.string,
  oLabel: PropTypes.bool
}

export default BarChart
