import React, { Fragment, useRef, useState } from 'react';
import Collapsible from 'react-collapsible';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from '../Input';
import Modal from '../Modal';
import TextArea from '../TextArea';
import { ModalOperationTypes } from '../../constants/ModalOperationTypes';
import Button from '../../elements/Button';
import { createRecipe, deleteRecipe, updateRecipe } from '../../redux';
import { ucFirst } from '../../utils/string';
import Recipe from './Recipe';

const ModalInputWrap = styled.div`
    margin: 12px 0;
`;

export default ({ recipes }) => {
    const initialFormState = { name: '', ingredients: '' };
    const inputRef = useRef();
    const textAreaRef = useRef();
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOperationType, setModalOperationType] = useState(false);
    const [formState, setFormState] = useState(initialFormState);

    const startRecipeEdit = (recipe) => {
        setModalOperationType(ModalOperationTypes.EDIT);
        setFormState(recipe);
        setModalOpen(true);
    };

    const finishRecipeEdit = () => {
        dispatch(updateRecipe(formState));
        closeAndResetModalState();
    };

    const startRecipeCreation = () => {
        setModalOperationType(ModalOperationTypes.CREATE);
        setFormState(initialFormState);
        setModalOpen(true);
    };

    const finishRecipeCreation = () => {
        dispatch(createRecipe(formState));
        closeAndResetModalState();
    };

    const handleInputChange = inputRef => (e) => {
        const { value: text } = inputRef.current;

        setFormState({
            ...formState,
            [e.target.name]: text,
        });
    };

    const closeAndResetModalState = () => {
        setFormState(initialFormState);
        setModalOpen(false);
    };

    return (
        <Fragment>
            {recipes.map((recipe, i) => (
                <Collapsible
                    transitionTime={120}
                    key={i}
                    trigger={recipe.name}>

                    <Recipe
                        key={i}
                        recipe={recipe}
                        onEdit={() => startRecipeEdit(recipe)}
                        onDelete={() => dispatch(deleteRecipe(recipe.id))} />
                </Collapsible>
            ))}

            <Button onClick={() => startRecipeCreation()}>New recipe+</Button>

            <Modal show={modalOpen} handleClose={closeAndResetModalState}>
                <h1>{ucFirst(modalOperationType)} a recipe</h1>

                <hr />

                <ModalInputWrap>
                    <Input
                        name="name"
                        ref={inputRef}
                        value={formState.name}
                        onChange={handleInputChange(inputRef)}
                        placeholder={'Recipe name...'}
                    />
                </ModalInputWrap>

                <ModalInputWrap>
                    <TextArea
                        name="ingredients"
                        ref={textAreaRef}
                        value={formState.ingredients}
                        onChange={handleInputChange(textAreaRef)}
                        placeholder={'Ingredients separated by comma...'}
                    />
                </ModalInputWrap>

                {modalOperationType === ModalOperationTypes.CREATE ?
                    <Button onClick={finishRecipeCreation}>Create recipe</Button> :
                    <Button onClick={finishRecipeEdit}>Update recipe</Button>
                }
                <Button style={{ marginLeft: '8px' }} onClick={closeAndResetModalState}>Cancel</Button>
            </Modal>
        </Fragment>
    );
};