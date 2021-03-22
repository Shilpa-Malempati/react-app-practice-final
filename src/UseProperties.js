import React from 'react';
import PropTypes from 'prop-types';

class UseProperties extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

UseProperties.propTypes = {
  txt: PropTypes.string,
  // cat: PropTypes.number.isRequired
}

UseProperties.defaultProps = {
  txt: "this is the default text"
}

export default UseProperties
