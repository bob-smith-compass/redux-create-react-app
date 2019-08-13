import React, {useState, useEffect} from 'react';

const Effect = () => {

    const [title, setTitle] = useState('Default title');
    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log(`useEffect called`);
        document.title = `New title ${title}`;
    })

    return (
        <div>
            <p>{title}</p>
            <button  onClick={ () => setTitle('Cool title')}>Change title</button>
            <button  onClick={ () => setCount(count+1)}>Change count</button>
        </div>
    );
}

export default Effect;
