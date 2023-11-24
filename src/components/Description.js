import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import './Description.css';
import { RiArrowUpDoubleLine, RiArrowDownDoubleFill } from "react-icons/ri";
 
class Description extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isCollapsed: true,
      data :[],
      loading : true
    };
  }
 
  toggleCollapse = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };
  componentDidMount(){   
    fetch('https://methoddev.accenture.com/MethodOne_Drupal/jsonapi/node/page')
    .then(response => response.json())
    .then(json => {this.setState ({
        data : json.data,
        loading:false
    });
    })
   }
 
  render() {
    const { isCollapsed } = this.state;
    let displayValue,displayTitle = ""
    if(this.state.loading === true)
    {
        displayValue =<h3>Loading....</h3>
    }
    if(this.state.data != null && this.state.loading === false){
        displayValue = this.state.data.map((item,index) =>{
        if(item.attributes.title != null && item.attributes.body.value != null){
        return( <div key={index}>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.attributes.body.processed)}}/>
        </div> )
        }
        
        else{
           console.log("Some value is null"); 
           return null;
        }
      })
      displayTitle = this.state.data.map((item,index) =>{
        if(item.attributes.title != null && item.attributes.body.value != null){
        return( <div key={index}>
        <p className='num'>01</p>
        <p className='main-heading' dangerouslySetInnerHTML={{__html: item.attributes.title}}/>
        </div> )
        }
        
        else{
           console.log("Some value is null"); 
           return null;
        }

        
    
      })
  }
    return (
<div className="middle-content">

{displayTitle}
<br />

<>
{displayValue[0]}

</>


<br />
<p className='num'>02</p>
<p className='main-heading'>Why do you need it?</p>
<br /><br />
<p>Description</p>
<br />
<p className='num'>03</p>
<p className='main-heading'>Inputs</p>
<br /><br />
<p>Description</p>
<br />
<p className='num'>04</p>
<p className='main-heading'>Deliverable(s)</p>
<br /><br />
<p>Description</p>
<br />
<p className='num'>05</p>
<p className='main-heading'>Key considerations</p>
<br /><br />
<p>Description</p><br />
<span style={{ marginRight: '1085px' }}></span>
<button
          onClick={this.toggleCollapse}
          style={{
            backgroundColor: '#c12be6',
            color: 'white',
            padding: '8px 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            marginLeft: '1085px',
          }}
>
          {isCollapsed ? <RiArrowDownDoubleFill /> : <RiArrowUpDoubleLine />}
          {isCollapsed ? 'Expand All' : 'Collapse All'}
</button>
<p className={`description ${isCollapsed ? '' : 'expanded'}`} style={{ display: 'flex', alignItems: 'center', width: '1215px' }}>
          {!isCollapsed && (
<p className="expanded-content">
              {}
<p>
<bold>Considerations</bold>
</p>
</p>
          )}
</p>
<br />
<p className='num'>06</p>
<p className='main-heading'>Best practices</p>
<br /><br />
<p>Description</p>
<br />
<p className='num'>07</p>
<p className='main-heading'>Risks & mitigations</p>
<br /><br />
<p>Description</p>
<br />
<p className='num'>08</p>
<p className='main-heading'>Assets & tools</p>
<br /><br />
<p>Description</p>
<br /><br />
<p className='num'>09</p>
<p className='main-heading'>Learn more</p>
<br /><br />
<p>Description</p>
</div>
    );
  }
}
 
export default Description;