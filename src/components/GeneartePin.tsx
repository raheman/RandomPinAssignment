import React from 'react';
import '../css/generatePin.css';
import { connect } from 'react-redux';


interface IState {
    randomArray:[string];
    message:string
  }

 

 class GeneratePin extends React.Component<any,any> {
    public state = {
            randomArray:[""],
            message:null
            };

   

    public generatePin = ()=>{
        var randomArr=[];
        
        var arr_names:number[] = new Array(5)  
        for(var i = 0;i<arr_names.length;i++) { 
            randomArr.push(this.generateNumber());
         }
        this.setState({
            randomArray:randomArr
        } );

    }
    

    public generateNumber=():string=>{
      
        var consecutiveStatus=true;
        var ascStatus=true;
        var number=0;
        var isStringAvail=true;
        var isRepeat = false;
        while (consecutiveStatus) {
             number = Math.floor(1000 + Math.random() * 9000);
            consecutiveStatus= this.validConsecutive(number);
             ascStatus=this.validAscending(number);
             isStringAvail=this.state.randomArray.includes(number.toString());
                var x= Object.values(this.props.savedPins)
                isRepeat = (x.flat()).includes(number.toString())
                if(consecutiveStatus||ascStatus||isStringAvail|| isRepeat){
                    continue;
                }
                else{
                    break;
                }
          }
        return number.toString();
    }

    public validConsecutive=(randomNo:number)=>{
        return  /([0-9])\1+/.test(randomNo.toString());
    }
    public validAscending=(randomNo:number)=>{
        return  /(012|123|234|345|456|567|678|789|210|321|432|543|654|765|876|987)+/ig.test(randomNo.toString());
    }

    public savePin=()=>{
     
        if(this.state.randomArray.length===1){
            return false;
        }
        this.props.randomObjSave(this.state.randomArray);
        this.setState({
            randomArray:[],
            message:"Data Saved Successfully"
        });

        
    }


  
    render(){
        var { randomArray,message} = this.state;
        return(
        <div className="ex2" >
            <table><tbody><tr>
           {randomArray.length===5?randomArray.map((x,index)=><td key={index}><input type="text" name="generatePin"  readOnly value={x} /></td>)
           :<td style={{paddingLeft:"25rem",color:"green"}}>{message}</td>}
            
            </tr></tbody></table>
           <button className="generate"  onClick={this.generatePin} >Generate</button>
           <input className="generate save" type="button" value="Save"  onClick={this.savePin} />
        </div>
        )
    }
}
  const mapDispatchToProps = (dispatch: any) => ({
      
    randomObjSave: (el:any) =>dispatch({type:'SAVE_STATE',arr:el})
});

const mapStateToProps = (state: any) => ({
    savedPins: state.randomObj
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GeneratePin);