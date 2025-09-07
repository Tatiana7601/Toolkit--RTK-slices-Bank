import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchQuote} from "../features/api/fetchQuote.js";
import {setBalance} from "../features/account/balanceSlice.js";


const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(setBalance(+sum))}>Deposit</button>

            <input
                type="number"
                value={sum}
                onChange={(e) => setSum(e.target.value)}
                placeholder="Enter amount"
            />

            <button onClick={() => dispatch(setBalance(-sum))}>Withdraw</button>

            <div >
                <button onClick={() =>dispatch(fetchQuote())}>Get Quote</button>
            </div>
        </div>
    );
};

export default Operation;