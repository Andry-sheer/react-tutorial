// import { Component } from "react";

// class Select extends Component {
//   render() {
//     return (
//       <select name="cars" id="cars" className={this.props.classNameProp} style={{marginTop: 15, marginBottom: 15}}>
//           {this.props.children}
//       </select>
//     );
//   }
// }

// export default Select;

import { Component } from "react";

const Select = ( { classNameProp, children } ) => {
  return (
    <select name="cars" id="cars" className={classNameProp}>
      {children}
    </select>
  )
}

export default Select;
