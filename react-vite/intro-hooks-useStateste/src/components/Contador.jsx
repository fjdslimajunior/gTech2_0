import React, { useState, useEffect } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('useEffect chamado para count');
    }, [count]);

    useEffect(() => {
        console.log('useEffect chamado uma única vez.');
    });

    return (
        <div>
            <p>Contador 1: {count}</p>
            <button className='botao' onClick={() => setCount(count + 1)}>Incrementar Contador 1</button>
            <p>Contador 2: {count2}</p>
            <button className='botao' onClick={() => setCount2(count2 + 1)}>Incrementar Contador 2</button>
        </div>
    );
};

export default App;