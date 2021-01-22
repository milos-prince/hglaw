import React, {Component} from 'react';

 
class Collapsible extends Component {
  constructor(props){
    super(props);
    this.state = {
    open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
    this.setState({open: !this.state.open})
    }
    
    
  render() {
    return (
  <div>
        <div onClick={(e)=>this.togglePanel(e)} className='hamburgerButton'>{!this.state.open ?<img src={this.props.opener} id="hamburger" />:<p id="close-hamburger">&#10005;</p>}</div>
        
        {this.state.open ? (
        <div className='mobileNav navOpen'>
          {this.props.children}
        </div>
        ) : <div className='mobileNav navClosed'>
        {this.props.children}
      </div>}
        </div>);
        }
        }
 
export default Collapsible;
