import React, { Fragment, useCallback, useRef, useState } from 'react';
import Collapsible from 'react-collapsible';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import TextArea from '../../../components/TextArea';
import { ModalOperationTypes } from '../../../constants/ModalOperationTypes';
import Button from '../../../elements/Button';
import { createRecipe, deleteRecipe, updateRecipe } from '../../../redux';
import { ucFirst } from '../../../utils/string';
import { switchCase } from '../../../utils/switchcase';
import Recipe from '../Recipe';

const ModalInputWrap = styled.div`
    margin: 12px 0;
`;

export default ({ recipes }) => {
    const initialFormState = { name: '', ingredients: '' };
    const inputRef = useRef();
    const textAreaRef = useRef();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [modalOperationType, setModalOperationType] = useState(false);
    const [formState, setFormState] = useState(initialFormState);

    const editRecipe = (recipe) => {
        setModalOperationType(ModalOperationTypes.EDIT);
        setFormState(recipe);
        setIsOpen(true);
    };

    const newRecipe = () => {
        setModalOperationType(ModalOperationTypes.CREATE);
        setFormState(initialFormState);
        setIsOpen(true);
    };

    const handleInputChange = inputRef => (e) => {
        const { value: text } = inputRef.current;

        setFormState({
            ...formState,
            [e.target.name]: text,
        });
    };

    const proceedModalOperation = (type) => {
        switchCase({
            [ModalOperationTypes.CREATE]: () => {
                dispatch(createRecipe(formState));
                setFormState(initialFormState);
                setIsOpen(false);
            },
            [ModalOperationTypes.EDIT]: () => {
                dispatch(updateRecipe(formState));
                setFormState(initialFormState);
                setIsOpen(false);
            },
        })(type)();
    };

    const handleModalClose = useCallback(() => {
        setIsOpen(false);
    }, []);

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
                        onEdit={() => editRecipe(recipe)}
                        onDelete={() => dispatch(deleteRecipe(recipe.id))} />
                </Collapsible>
            ))}

            <Button onClick={() => newRecipe()}>New recipe+</Button>

            <Modal show={isOpen} handleClose={handleModalClose}>
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

                <Button onClick={() => proceedModalOperation(modalOperationType)}>Save recipe</Button>
                <Button style={{ marginLeft: '8px' }} onClick={handleModalClose}>Cancel</Button>
            </Modal>
        </Fragment>
    );
};