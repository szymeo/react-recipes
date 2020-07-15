import { RecipesActions } from './recipes.actions';

const initialState = {
    items: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RecipesActions.GET_RECIPES:
            return {
                ...state,
                items: action.payload,
            };
        case RecipesActions.CREATE_RECIPE:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ],
            };
        case RecipesActions.UPDATE_RECIPE:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
            };
        case RecipesActions.DELETE_RECIPE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        default: return state;
    }
};