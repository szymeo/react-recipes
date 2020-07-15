import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import RecipesList from '../../components/RecipesList';
import { getRecipes } from '../../redux';

const RecipesWrapper = styled.div`
    width: 420px;
    margin: 100px auto auto;
`;

export default () => {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);

    return (
        <RecipesWrapper>
            <RecipesList recipes={recipes.items} />
        </RecipesWrapper>
    );
};