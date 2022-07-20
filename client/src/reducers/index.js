import { combineReducers } from 'redux';

import posts from './post';
import tags from './Tags';
import auth from './Auth';
import Users from './User';
import messages from './messages';

export const reducers = combineReducers({ posts, messages, Users, tags, auth });