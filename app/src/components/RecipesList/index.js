
import React from 'react';

import Recipes from './Recipes';

export default ({ recipes, searchTerm = '' }) => (
    <Recipes recipes={recipes}></Recipes>
);