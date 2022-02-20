import { combineReducers } from 'redux';

import posts from './post';
import tags from './Tags';
import auth from './Auth';
import Users from './User';

export const reducers = combineReducers({ posts, Users, tags, auth });