import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OuiDom from './utils/ouiDomUtils'

class EaseShow extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {

    
    return (
      <div>
        <div>ease show</div>
      </div>
    )
  }
}

EaseShow.propTypes = {

}
EaseShow.defaultProps = {

}
export default EaseShow