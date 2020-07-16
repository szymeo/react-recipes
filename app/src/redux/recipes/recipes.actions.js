import keyMirror from 'key-mirror';
import { v4 as uuidv4 } from 'uuid';

import { LocalStorageKeys } from '../../constants/LocalStorageKeys';
import { getFromLocalStorage, updateInLocalStorage } from '../../utils/localstorage';

export const RecipesActions = keyMirror({
    GET_RECIPES: null,
    UPDATE_RECIPE: null,
    CREATE_RECIPE: null,
    DELETE_RECIPE: null,
});

export const getRecipes = () => {
    return (dispatch) => {
        const recipes = getFromLocalStorage(LocalStorageKeys.RECIPES, []);

        dispatch(resolve(recipes));
    };

    function resolve(recipes) { return { type: RecipesActions.GET_RECIPES, payload: recipes }; }
};

export const createRecipe = recipe => (dispatch, getState) => {
    dispatch({
        type: RecipesActions.CREATE_RECIPE,
        payload: {
            id: uuidv4(),
            ...recipe,
        },
    });

    updateInLocalStorage(LocalStorageKeys.RECIPES, JSON.stringify(getState().recipes.items));
};

export const updateRecipe = updatedRecipe => (dispatch, getState) => {
    dispatch({
        type: RecipesActions.UPDATE_RECIPE,
        payload: updatedRecipe,
    });

    updateInLocalStorage(LocalStorageKeys.RECIPES, JSON.stringify(getState().recipes.items));
};

export const deleteRecipe = recipeId => (dispatch, getState) => {
    dispatch({
        type: RecipesActions.DELETE_RECIPE,
        payload: recipeId,
    });

    updateInLocalStorage(LocalStorageKeys.RECIPES, JSON.stringify(getState().recipes.items));
};
