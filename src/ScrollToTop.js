import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends PureComponent {
    componentDidMount = () => window.scrollTo(0, 0);

  render = () => this.props.children
}
  
export default ScrollToTop;