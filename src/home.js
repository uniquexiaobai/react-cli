import React, {useState} from 'react';
import style from './assets/style/home.css';

const Home = () => {
    const [count, setCount] = useState(5);

    const inc = () => {
        setCount(count + 1);
    };

    const dec = () => {
        setCount(count - 1);
    };

    return (
        <div className={style.home}>
            <span>{count}</span>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};

export default Home;
