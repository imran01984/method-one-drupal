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
    const { isCollapsed, data, loading } = this.state;
  
    if (loading) {
      // You might want to render a loading indicator here
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        {data.map((item, index) => (
          <div key={index} className="middle-content">
            <p className='num'>01</p>
            <p className='main-heading'>What is it?</p>
            <br /><br />
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_what_is_it_.value) }} />
            <p className='num'>02</p>
            <p className='main-heading'>Why do you need it?</p>
            <br /><br />
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_why_do_you_need_it_.value) }} />
            <br />
<p className='num'>03</p>
<p className='main-heading'>Inputs</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_inputs.value) }} />
<br />
<p className='num'>04</p>
<p className='main-heading'>Deliverable(s)</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_deliverable_s_.value) }} />
<br />
<p className='num'>05</p>
<p className='main-heading'>Key considerations</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_key_considerat.value) }} />
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
                  {/* ... Content for expanded section */}
                  <p>
                    <strong>Considerations</strong>
                  </p>
                  {/* ... */}
                </p>
              )}
            </p>
            <br />
<p className='num'>06</p>
<p className='main-heading'>Best practices</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_bst_practices01.value) }} />
<br />
<p className='num'>07</p>
<p className='main-heading'>Risks & mitigations</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_risks_and_mitigation.value) }} />
<br />
<p className='num'>08</p>
<p className='main-heading'>Assets & tools</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_assets_and_tools.value) }} />
<br /><br />
<p className='num'>09</p>
<p className='main-heading'>Learn more</p>
<br /><br />
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.field_learn_more.value) }} />
          </div>
        ))}
      </div>
    );
  }
  
       
 
   

  }

 
export default Description;