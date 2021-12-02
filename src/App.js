import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import BookingNew from './components/views/BookingNew/BookingNew';
import Events from './components/views/Events/Events';
import EventsNew from './components/views/EventsNew/EventsNew';
import Waiter from './components/views/Waiter/Waiter';
import Orders from './components/views/Orders/Orders';
import OrdersNew from './components/views/OrdersNew/OrdersNew';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking-new`} component={BookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Events} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events-new`} component={EventsNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/orders/:id`} component={Orders} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/orders-new`} component={OrdersNew} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
