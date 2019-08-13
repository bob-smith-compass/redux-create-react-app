import React, {useState} from 'react';
import Effect from './Effect';

const Hook = () => {
    /**
     * State with Hooks
     */
    const [count, setCount] = useState(100);
    // let options = ['EUR', 'USD', 'CDN']
    const [option , setOptions] = useState('Select one')
    const [obj , setObj] = useState({
        fname: 'David',
        lname: 'Shams'
    })
    const [company , setCompany] = useState('UAL');
    const [city , setCity] = useState('Chicago');

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
            <p>Object {JSON.stringify(obj)}</p>
            <button onClick={ () => setObj({fname: 'Sean'}) }>Sean</button>
            <button onClick={ () => setObj({fname: 'Sean', lname: 'Shams'}) }>Sean Shams</button>
            <button onClick={ () => setObj({fname: 'Abel', lname: 'Shams'}) }>Abel</button>
            <p>{obj.fname} {obj.lname} is working for {company} living in {city}</p>
            <Effect />
        </div>
    );
}

export default Hook;
