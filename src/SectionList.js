import React, {Component} from 'react'
import {SectionList as NativeSectionList} from 'react-native'
import {Prism} from 'react-native-prism'

class SectionList extends Component {

  static propTypes = NativeSectionList.propTypes

  render () {
    return (
      <NativeSectionList {...this.props}>
        {this.props.children}
      </NativeSectionList>
    )
  }
}

export default Prism(SectionList)
