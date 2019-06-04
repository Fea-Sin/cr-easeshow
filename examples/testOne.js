import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import EaseShow from 'cr-easeshow'
import '../assets/index.less'

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'

class App extends PureComponent {
  
  render () {

    return (
      <div>
        <div style={{height: 600, border: '10px solid #21c8be'}}>
        </div>
      </div>
    )
  }
}


function render(container) {
  ReactDOM.render(
    <div>
      <h3>EASESHOW TEST</h3>
      <div><App /></div>               
    </div>, container
  )
}

render(reactContainer)