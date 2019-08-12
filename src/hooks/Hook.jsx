import React, {useState} from 'react';

const Hook = () => {
    /**
     * State with Hooks
     */
    const [count, setCount] = useState(100);

    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={ () => setCount( count + 1 ) }>+</button>
        </div>
    );
}

export default Hook;
