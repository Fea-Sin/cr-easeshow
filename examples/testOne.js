import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import EaseShow from 'cr-easeshow'
import '../assets/index.less'

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
bodyContainer[0].style.overflow = 'hidden'

class App extends PureComponent {
  state = {
    scale: 0.5
  }
  componentDidMount() {
    // setTimeout(() => {
    //   console.log('执行延时')
    //   this.setState({
    //     scale: 2
    //   })
    // }, 1000)
  }
  
  render () {
    return (
      <div>
        <div style={{height: 600, border: '1px solid #21c8be'}}>
          <EaseShow minScale={0.2} maxScale={2} isMove={true} isScale={true} scale={this.state.scale}>
            <div style={{fontSize: 200, color: '#e850e6'}}>HELLO WORLD</div>
          </EaseShow>
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