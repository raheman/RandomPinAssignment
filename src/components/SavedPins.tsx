import React from 'react';
import '../css/generatePin.css';
import { connect } from 'react-redux';


class SavedPins extends React.Component<any,any> {


    render(){
        var savepin=Object.keys(this.props.savedPins);
        return (
      
            <div className="ex2" >
            <table>
                <tbody>
                    {
                       savepin.length>0? savepin.map((pins:any,index:number)=>{
                       
                        return <tr key={index}>
                           <td >
                               <input type="text" 
                               value={this.props.name[savepin[index]]} onChange={(e) => this.props.onNameChangeHandler(e.target.value,savepin[index])}/>
                            </td>
                            {this.props.savedPins[pins].map((randomPinValue:any,index1:number)=>{
                           
                            return <td key={index1}><input type="text" name="generatePin"  readOnly value={randomPinValue} /></td>
                        })
                         }<td>
                             <button className="generate save" type="button"  style={{backgroundColor:"red"}}  
                                onClick={() => this.props.deletePin(savepin[index])} >Delete</button>
                         </td></tr>
                        }):"Sorry Data Not Available."
                    }
                </tbody>
            </table>
            </div>
        )

    }

}

const mapStateToProps = (state: any) => ({
    savedPins: state.randomObj,
    name: state.nameObj
});

const mapDispatchToProps = (dispatch: any) => {
    return{
        onNameChangeHandler: (name:string,index:number) => dispatch({type:"ON_CHANGE_HANDLER",name,index}),
        deletePin: (index:number) => dispatch({type:"ON_DELETE_HANDLER",index}),
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
  )(SavedPins);