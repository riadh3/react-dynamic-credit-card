import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./style.css";



class Main  extends Component {
    constructor() {
      super(); 
      this.state = { 
         pan:"",
         name:"",
        //  expireDate:"**/**"
        month: 'MM',
        year: 'YY',
       };

    };



    panSetting =(event)=>{
        const cardNumber=event.target.value;

        if(! isNaN(+cardNumber)){
            this.setState({
                pan : cardNumber.padEnd(16, "················").split("").map((x,i)=>{
                  return (i % 4 === 0 && i!==0) ? " "+x : x
                      
            }) 
         });

        }
    }



    nameSetting =(event)=>{
        const theName=event.target.value
        if(event.target.value.length<=20 &&  ! (/[0-9]/g.test(event.target.value)))
        {
            this.setState({
                name:theName.toUpperCase()
            })
        }
    };
     

    thruSetting =(event)=>{
        const thruNValue=event.target.value
        if(! isNaN(+thruNValue))
        {
            this.setState({
                month:thruNValue.padEnd(2, "MM").substring(0, 2),
                year:thruNValue.padEnd(2, "YY").substring(2, 4)
            })
        }
    };


      

      




    render() {
        return (
   
<div className="dynamic-card">

    <div className="credit"> 
        <div className="main-card">

            <h1>Company name</h1>
            <img src="https://i.imgur.com/8mNCpfE.png" className="sim" />

            <div className="data">
            
                <span className="pan">
                    {(this.state.pan).length===0 ? "···· ···· ···· ····" : this.state.pan}
                </span><br />

                <div className="code-validity">

                    <span className="code">4522</span> <br />

                    <div className=" validity-code" >
                        <span className="left-label">VALID<br />THRU</span>
                    </div>

                    <div className="exp-date">
                        <div className="upper-label">MONTH/YEAR</div>
                        <div className="date">
                        <span>
                        {(this.state.month).length===0 ?"MM":this.state.month}/{(this.state.year).length===0 ?"YY":this.state.year}
                        </span>
                        </div>
                    </div>
                    
                </div>

                <span className="name">
                    {(this.state.name).length===0 ? "Your name".toUpperCase() : this.state.name.toUpperCase() } 
                </span>
            </div>

            <div className="master-logo">
                 <img className="master" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/280px-Mastercard-logo.svg.png" />
            </div> 
        </div>

        <div className='input-form' id="form">

            <input 
                  className="input pan-number" 
                  onChange= {(e)=>this.panSetting(e)}
                  type="text" placeholder="pan"   
                  maxLength="16"
            />
            <input 
                  onChange= {(e)=>this.nameSetting(e)}
                  type="text" className="input owner-name" placeholder="name"
                  maxLength="20"
            />
            <input 
                onChange= {(e)=>this.thruSetting(e)}
                type="text" className="input exp-date" placeholder="expire date" 
                maxLength="4"
            />
        </div>
        </div>
        
</div>
 );
}
}
ReactDOM.render(<Main />, document.getElementById('root'));