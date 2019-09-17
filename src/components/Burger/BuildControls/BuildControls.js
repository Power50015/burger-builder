import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    {label :'Salad',type:'salad'},
    {label :'Cheese',type:'cheese'},
    {label :'Bacon',type:'bacon'},
    {label :'Meat',type:'meat'}
]
const buildControls = (props)=>{
    console.log('ordered',props.purchasing);
    return (
         
    
            <div className={classes.BuildControls}>
                <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
                {controls.map((ctrl)=>(
                    <BuildControl 
                    key={ctrl.label} label={ctrl.label} 
                    added={() =>props.ingredientAdded(ctrl.type)}
                    removed={() =>props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
                ))}
                <div>
                    <button 
                        className={classes.OrderButton} 
                        disabled={!props.purchasable}
                        onClick={props.purchasing}
                        >Order Now</button>
                </div>
                
            </div>
        
    );
}
       
    
    
export default buildControls;
