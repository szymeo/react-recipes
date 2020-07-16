import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipes from '../../components/Recipes';
import { getRecipes } from '../../redux';
import App from './layout';

export default () => {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    return (
        <App data-testid="app">
            <Recipes recipes={recipes.items} />
        </App>
    );
};