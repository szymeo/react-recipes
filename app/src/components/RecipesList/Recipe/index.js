import React from 'react';

import Recipe from './layout';
import Button from '../../../elements/Button';

export default ({ recipe, onEdit, onDelete }) => {

    return (
        <Recipe>
            <hr style={{ margin: 0 }} />
            <Recipe.IngredientsList>
                {recipe.ingredients.split(',').map((el, i) => (
                    <li style={{ lineHeight: '36px' }} key={i}>{el}</li>
                ))}
            </Recipe.IngredientsList>

            <Button onClick={() => onEdit(recipe)}>edit</Button>
            <Button style={{ marginLeft: '8px' }} onClick={() => onDelete(recipe.id)}>delete</Button>
        </Recipe>
    );
};