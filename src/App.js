import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

import Header from "./components/Header/Header.js"
import Login from "./components/Login/Login.js"
import Users from "./components/Users/Users.js"
import User from "./components/User/User.js"
import CreateUser from "./components/CreateUser/CreateUser.js"
import EditUser from "./components/EditUser/EditUser.js"

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/users/' component={Users} />
        <Route exact path='/users/:id' component={User} />
        <Route exact path='/createUser' component={CreateUser} />
        <Route exact path='/users/:id/edit/:name' component={EditUser} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
