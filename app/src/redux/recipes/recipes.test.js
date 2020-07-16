import reducer from './recipes.reducer';
import { RecipesActions } from './recipes.actions';
import { v4 as uuidv4 } from 'uuid';

describe('recipes reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            items: [],
        });
    });

    it('should handle CREATE_RECIPE', () => {
        const id = uuidv4();

        expect(
            reducer({ items: [] }, {
                type: RecipesActions.CREATE_RECIPE,
                payload: {
                    id,
                    name: 'My Recipe',
                    ingredients: 'a, b, c',
                },
            }),
        )
        .toEqual({
            items: [{
                id,
                name: 'My Recipe',
                ingredients: 'a, b, c',
            }],
        });
    });

    it('should handle UPDATE_RECIPE', () => {
        const id = uuidv4();

        expect(
            reducer({
                items: [{
                    id,
                    name: 'My Recipe',
                    ingredients: 'a, b, c',
                }],
            }, {
                type: RecipesActions.UPDATE_RECIPE,
                payload: {
                    id,
                    name: 'My Recipe',
                    ingredients: 'a, b, c, d',
                },
            }),
        )
        .toEqual({
            items: [{
                id,
                name: 'My Recipe',
                ingredients: 'a, b, c, d',
            }],
        });
    });

    it('should handle DELETE_RECIPE', () => {
        const id = uuidv4();

        expect(
            reducer({
                items: [{
                    id,
                    name: 'My Recipe',
                    ingredients: 'a, b, c',
                }],
            }, {
                type: RecipesActions.DELETE_RECIPE,
                payload: id,
            }),
        )
        .toEqual({
            items: [],
        });
    });
});