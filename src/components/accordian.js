import React, {Component} from 'react';

 
class Accordian extends Component {
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
  <div className="accordianWrapper">
  <div onClick={(e)=>this.togglePanel(e)} className='accordianHeader'><h1>{this.props.title}</h1><p className={!this.state.open ?"expand":"contract"} >&#10005;</p></div>
        
        {this.state.open ? (
        <div className='accordianOpen'>
          {this.props.children}
        </div>
        ) : <div className='accordianClosed'>
      </div>}
        </div>);
        }
        }
 
export default Accordian;
