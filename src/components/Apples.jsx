import React from 'react';
import '../assets/styles/Apples.css';

class Apples extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            boxAmount: 1,
            appleAmount: 0,
            limitAmount: 20,
            warningMessage: "the box is empty",
        }
    }

    addingApples = () =>{
        this.setState(() =>{
            const currentAmount = this.state.appleAmount;
            const limitOfApples = this.state.limitAmount;
            let newAmount;
            let newWarningMessage;
            
            newAmount = currentAmount + 1;
            newWarningMessage = "the box have " + newAmount;
            
            if (currentAmount === limitOfApples){
                newWarningMessage = "the box is fill. You need to create new box";
                newAmount = limitOfApples;          
            }

            return {
                appleAmount: newAmount,
                warningMessage: newWarningMessage,
            };
        });
    }
    
    removeApples = () => {
        this.setState(() => {
            const currentAmount = this.state.appleAmount;
            let newWarningMessage = "";
            let newAmount;
            if(currentAmount <= 0){
                newAmount = 0;
                newWarningMessage = "the box is empty";
            }else{
                newAmount = currentAmount - 1;
                newWarningMessage = "the box have " + newAmount;
            }
            return {
                appleAmount: newAmount,
                warningMessage: newWarningMessage,
            };
        });
    }

    addingBoxes = () =>{
        this.setState(() =>{
            const currentBoxesAmount = this.state.boxAmount;
            const currentAmount = this.state.appleAmount;
            const limitOfApples = this.state.limitAmount;
            let newBoxesAmount;
            let newAmount;
            
            if (currentAmount === limitOfApples){
                newBoxesAmount = currentBoxesAmount + 1;
                newAmount = 0;
            }else{
                alert("You need to complete the box to add new box");
                newAmount = this.state.appleAmount;
                newBoxesAmount = this.state.boxAmount;
            }
            
            return {
                boxAmount: newBoxesAmount,
                appleAmount: newAmount,
                warningMessage: "the box is empty",
            };
        })
    }

    reset = () =>{
        this.setState({
            boxAmount: 1,
            appleAmount: 0,
            warningMessage: "the box is empty",
        });
    }
    
    render(){
        const numberOfApples = this.state.appleAmount;
        const numberOfBoxes = this.state.boxAmount; 
        const warningMessage = this.state.warningMessage;
        const limitByBox = this.state.limitAmount;
    
        return (
            <div className="Apples__container">
                <h1>Apples</h1>
                <div>
                    <p>Limit by box: {limitByBox}</p>
                    <h3>Apples: {numberOfApples} 🍎</h3>
                    <h3>Boxes: {numberOfBoxes} 📦</h3>
                </div>
               
                <div className="Apples__Buttons--container">
                    <button className="Apples__button" type="button" onClick={this.addingApples}>Add Apple</button>
                    <button className="Apples__button" type="button" onClick={this.removeApples}>Remove Apple</button>
                    <button className="Apples__button" type="button" onClick={this.addingBoxes}> Add new box</button>
                    <button className="Apples__button" type="button" onClick={this.reset}>Reset</button>
                </div>

                <p>In this moment <strong>"{warningMessage}"</strong></p>
            </div>
        );
    }
}

export default Apples;