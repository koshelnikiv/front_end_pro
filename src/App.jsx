import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={styles.container}>
            <h1>Value: {count}</h1>
            <div>
                <button style={styles.button} onClick={() => dispatch(increment())}>+</button>
                <button style={styles.button} onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: 'sans-serif',
    },
    button: {
        fontSize: '24px',
        margin: '0 10px',
        padding: '10px 20px',
    },
};

export default App;
