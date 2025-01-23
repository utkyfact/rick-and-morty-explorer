import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../features/counterSlice";





function Counter() {

    const { value } = useSelector((state) => state.counter)

    const dispatch = useDispatch()


    function arttir() {
        dispatch(increment())
      }
    
      function azalt() {
        dispatch(decrement())
      }
    
      function onArttir() {
        dispatch(incrementByAmount(10))
      }

    return (
        <>
            <div className="card p-10 space-y-2">
                <button className="btn" onClick={arttir}>Arttır</button>
                <p className="text-center">
                    {
                        value
                    }
                </p>
                <button className="btn" onClick={azalt}>Azalt</button>

                <button className="btn" onClick={onArttir}>10 arttır</button>
                <button className="btn" onClick={() => dispatch(decrementByAmount(10))}>10 azalt</button>
            </div>
        </>
    );
}

export default Counter;