import { combineReducers } from 'redux';

import recipesReducer from './recipes/recipes.reducer';

const rootReducer = combineReducers({
    recipes: recipesReducer,
});

export {
    rootReducer,
};