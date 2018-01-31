import React, {Component} from 'react'
import {WebView as NativeWebView} from 'react-native'
import {Prism} from 'react-native-prism'

class WebView extends Component {
  render () {
    return (
      <NativeWebView {...this.props}>
        {this.props.children}
      </NativeWebView>
    )
  }
}

export default Prism(WebView)
