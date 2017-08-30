import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart.js'
import PropTypes from 'prop-types'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name
    // Converting from kelvin to celsius
    const temps = cityData.list.map(weather => weather.main.temp - 273)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color='orange' units='C' />
        </td>
        <td>
          <Chart data={pressures} color='green' units='hPa' />
        </td>
        <td>
          <Chart data={humidities} color='blue' units='%' />
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8451;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    )
  }
}

WeatherList.propTypes = {
  weather: PropTypes.array
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
