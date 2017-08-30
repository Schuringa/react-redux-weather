import _ from 'lodash'
import React from 'react'
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines'
import PropTypes from 'prop-types'

function average (data) {
  return _.round(_.sum(data) / data.length)
}

const Chart = props => {
  return (
    <div>
      <Sparklines height={120} width={140} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
  units: PropTypes.string
}

export default Chart
