import React from 'react'
import { initGA, logPageView } from '../utils/analytics'
import setting from '../config.json'
import { hotjar } from 'react-hotjar';
export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    hotjar.initialize(setting.hjid, setting.hjsv);
    logPageView()
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}