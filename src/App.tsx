import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="users" list={UserList} icon={UserIcon}/>
  </Admin>
);

export default App;
