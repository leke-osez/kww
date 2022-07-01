import React, {useEffect, useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus,} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
                            

const QtyAdjust = ({pad,fontSize, value,setValue, cartQtyAdjust, item}) => {
    const [errorInput, setErrorInput] = useState({bool: false, message: null});
    const {toggleCartQuantity , qty, onAdd,setShowCart} = useStateContext()
    
    const decQty = ()=>{
        if (cartQtyAdjust){
            return toggleCartQuantity(item._id, 'dec')
        }
        setValue( (prevValue)=> {
            if (prevValue > 1){
           return parseInt(prevValue) - 1}

           return 1
        }
        )
    }
    const incQty = ()=>{
        if (cartQtyAdjust){
            return toggleCartQuantity(item._id, 'inc')
        }
        setValue( (prevValue)=> parseInt(prevValue) + 1)

    }
    const handleChange = (e)=>{
        let val = e.target.value;

        if (typeof parseInt(val) !== 'number'){
            setValue(1)
            return setErrorInput({bool:true, message: 'insert number only'})
            
        } else if (parseInt(val) < 1){
            setValue(1)
           return setErrorInput({bool:true, message: null})
           
        }
        if (errorInput.bool === true){
            setErrorInput({bool:false, message: null})
        }
        setValue(val)

    }
    const checkInput = ()=>{
        // const type = typeof(value)
        
        if (value === ''){
            return setValue(1)
        }
        if (Number(value) === value && value % 1 !== 0){
            return setValue(parseInt(value))
        }
    }

  return (
    <div className='flex items-center '>
        <h3 className='mr-2 text-normal md:text-lg'>Quantity:</h3>
        <button className={`text-black border-r-2 border-black/30 p-1 md:p-2 bg-black/5 text-base`} style ={{ padding: pad ? pad+'px' : '', fontSize: fontSize ? fontSize : ''}} onClick={decQty}><AiOutlineMinus/></button>
        <span className={`text-black`} style ={{ padding: pad ? pad+'px' : '', fontSize: fontSize ? fontSize : ''}}>
            {cartQtyAdjust ? <p className='mx-3 text-center'>{item.quantity}</p> :(
                <input
                    value = { value}
                    onChange = {handleChange}
                    type = 'number'
                    style={{width:30}}
                    className = 'outline-none text-center'
                    onBlur={checkInput}
                    
                />)
        }
        </span>
        <button className={`text-black border-l-2 border-black/30 p-1 md:p-2 bg-black/5 text-base`} style ={{ padding: pad ? pad+'' : '', fontSize: fontSize ? fontSize : ''}} onClick={incQty}><AiOutlinePlus/></button>
        {errorInput && <p className='text-red-700 text-base'>{errorInput.message}</p>}
    </div>
  )
}

export default QtyAdjust