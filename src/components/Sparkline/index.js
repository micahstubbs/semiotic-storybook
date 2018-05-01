import React from 'react'
import { PropTypes } from 'prop-types'

import { XYFrame } from 'semiotic'
import { curveMonotoneX } from 'd3-shape'

function Sparkline(props) {
  const { data, size, lineColor, tooltipContent, xAccessor, yAccessor } = props
  const lineFrameProperties = {
    size,
    margin: { top: 1, bottom: 1, left: 1, right: 1 },
    lines: data,
    lineType: { type: 'line', interpolator: curveMonotoneX },
    xAccessor,
    yAccessor,
    lineStyle: {
      stroke: lineColor,
      strokeWidth: '2px',
      strokeOpacity: '1'
    },
    hoverAnnotation: true,
    tooltipContent
  }
  return <XYFrame {...lineFrameProperties} />
}

Sparkline.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.array,
  lineColor: PropTypes.string,
  tooltipContent: PropTypes.func
}

export default Sparkline
