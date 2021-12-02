import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={'./waiter/orders-new'} activeClassName={'active'}>New orders</Link>
    <Link to={'./waiter/orders/:id'} activeClassName={'active'}>Orders id</Link>
  </div>
);

export default Waiter;