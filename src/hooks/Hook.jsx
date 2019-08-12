import React, {useState} from 'react';

const Hook = () => {
    /**
     * State with Hooks
     */
    const [count, setCount] = useState(100);
    // let options = ['EUR', 'USD', 'CDN']
    const [option , setOptions] = useState('Select one')

    let handleChange = (e) => {
        setOptions(e.target.value);
    }
    return (
        <div>
            {/* <select name="" id="" value={ () => setOptions()} onChange={handleChange}> */}
            <p>Selected {option} </p>
            <select name="" id="" value={option} onChange={handleChange}>
                {/* {options.map( e => <option>{e}</option>)} */}
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="cdn">CDN</option>
            </select>
            <p>Clicked {count} times</p>
            <button onClick={ () => setCount( count + 1 ) }>+</button>
        </div>
    );
}

export default Hook;
