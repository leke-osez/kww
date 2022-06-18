import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus,} from 'react-icons/ai'

                            

const QtyAdjust = ({pad,fontSize, onChange, cartQtyAdjust, item}) => {
    const [errorInput, setErrorInput] = useState({bool: false, message: null});
    const {toggleCartQuantity , qty, onAdd,setShowCart} = useStateContext()

    const [value, setValue] = useState(1);

    const decQty = ()=>{
        if (cartQtyAdjust){
            return toggleCartQuantity(item._id, 'dec')
        }
        setValue( (prevValue)=> {
            if (prevValue > 1){
           return prevValue - 1}

           return 1
        }
        )
    }
    const incQty = ()=>{
        if (cartQtyAdjust){
            return toggleCartQuantity(item._id, 'inc')
        }
        setValue( (prevValue)=> prevValue + 1)

    }
    const handleChange = (e)=>{
        const val = parseInt( e.target.value);
        
        if (typeof(val) !== 'number'){
            setValue(1)
            return setErrorInput({bool:true, message: 'insert number only'})
            
        } else if (val === 0){
            setValue(1)
           return setErrorInput({bool:true, message: 'not valid number'})
           
        }
        if (errorInput === true){
            setErrorInput({bool:false, message: null})
        }
        setValue(val)

    }
  return (
    <div>
        <span className={`text-black`} style ={{ padding: pad ? pad+'px' : '', fontSize: fontSize ? fontSize : ''}} onClick={decQty}><AiOutlineMinus/></span>
        <span className={`text-black`} style ={{ padding: pad ? pad+'px' : '', fontSize: fontSize ? fontSize : ''}}>
            {cartQtyAdjust ? qty :(
                <input
                    value = { value}
                    onChange = {handleChange}
                    type = 'number'
                />)
        }
        </span>
        <span className={`text-black`} style ={{ padding: pad ? pad+'px' : '', fontSize: fontSize ? fontSize : ''}} onClick={incQty}><AiOutlinePlus/></span>
        {errorInput && <p className='text-red-700 text-base'>Not a Number</p>}
    </div>
  )
}

export default QtyAdjust