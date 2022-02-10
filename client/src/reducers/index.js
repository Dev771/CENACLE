import { combineReducers } from 'redux';

import posts from './post';
import tags from './Tags';
import auth from './Auth';

export const reducers = combineReducers({ posts, tags, auth });