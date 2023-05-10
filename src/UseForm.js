import { useState } from 'react';

function UserForm() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function descrement() {
        setCount(count - 1);
    }

    return (
        <>
        
            <button onClick={increment}>
                +
            </button> 
          
            <h1>
                {count}
            </h1>
            <button onClick={descrement}>
                -
            </button> 
        </>
    );
}

export default UserForm;