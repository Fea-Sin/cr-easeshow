import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OuiDom from './utils/ouiDomUtils'
import './utils/SimpleDrag'
import isEqual from 'lodash/isEqual'

const showW = 99999
const showH = 99999
let scale = 1

function moveTo(ele, offsetx, offsety) {
  const positionProperty = ['static', 'relative', 'absolute', 'sticky', 'fixed']
  const eleStyle = OuiDom.getComputedStyle(ele, 'position')
  if (eleStyle === 'static' || eleStyle === 'sticky') {
    ele.style.position = 'relative'
  }
  ele.style.left = offsetx + 'px'
  ele.style.top = offsety + 'px'
}

class EaseShow extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      minScale: props.minScale,
      maxScale: props.maxScale,
      bgColor: props.bgColor,      
    }
  }

  componentDidMount() {
    const drag = document.getElementById('drag')
    const showBox = this.showBox
    const outBox = this.outBox
    const container = this.container
    const { scale } = this.props
    OuiDom.setStyles(showBox, {
      ['width']: showW + 'px',
      ['height']: showH + 'px',
      ['background-color']: this.state.bgColor,
    })

    const boxW = OuiDom.outerWidth(outBox)
    const boxH = OuiDom.outerHeight(outBox)
    OuiDom.setStyles(container, {
      ['width']: boxW + 'px',
      ['height']: boxH + 'px',    
    })
    this.setScale(showBox, scale)

    this.setMove(outBox, showBox)
    drag.sdrag()
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
    if (!isEqual(this.props, prevProps)) {
      const { scale } = this.props
      this.setScale(this.showBox, scale)
    }
  }

  setMove = ( wind, canvas ) => {
    let startX = 0
    let startY = 0
    const dragW = OuiDom.outerWidth(canvas)
    const dragH = OuiDom.outerHeight(canvas)
    const conW = OuiDom.outerWidth(wind)
    const conH = OuiDom.outerHeight(wind)
    startX = (conW - dragW) / 2
    startY = (conH - dragH) / 2
    // console.log('moveTo----', startX, startY)
    moveTo(canvas, startX, startY)
  }

  setScale = (ele, scale) => {
    if (ele) {
      ele.style.transform = `scale(${scale})`;
    }
  }

  handleWheel = (event) => {
    const ele = event.target
    if (event.deltaY > 0) {
      scale += 50 * -0.001;
    } else {
      scale += 50 * 0.001;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(this.state.minScale, scale), this.state.maxScale);
  
    // Apply scale transform
    ele.style.transform = `scale(${scale})`;
    ele.style.transformOrigin = 'center'
    // console.log(scale)   
  }

  render () {
    const { prefixCls } = this.props
    
    return (
      <div className={`${prefixCls}`} ref={outBox => this.outBox = outBox}>
        <div id='drag' className={`${prefixCls}-showBox`} ref={showBox => this.showBox = showBox} onWheel={this.handleWheel}>
          <div className={`${prefixCls}-container`} ref={container => this.container = container}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

EaseShow.propTypes = {
  minScale: PropTypes.number,
  maxScale: PropTypes.number,
  bgColor: PropTypes.string,
  prefixCls: PropTypes.string,
  scale: PropTypes.number,
}
EaseShow.defaultProps = {
  minScale: 0.125,
  maxScale: 3,
  bgColor: '#fae0dd',
  prefixCls: 'cr-easeshow',
}
export default EaseShow