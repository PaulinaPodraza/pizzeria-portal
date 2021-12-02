import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={'./tables/booking-new'} activeClassName={'active'}>New booking</Link>
    <Link to={'./tables/booking/:id'} activeClassName={'active'}>Booking</Link>
    <Link to={'./tables/events-new'} activeClassName={'active'}>New events</Link>
    <Link to={'./tables/events/:id'} activeClassName={'active'}>Events</Link>
  </div>
);

export default Tables;