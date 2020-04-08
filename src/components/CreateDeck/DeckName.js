import React from 'react';
import PropTypes from 'prop-types';
import {FormInput} from '../FormItems/Input/FormInput.js';
import styled from 'styled-components';
import {CardEditDeleteIcons} from '../Icon/CardEditDeleteIcons.js';

export const DeckName = ({
  value,
  name,
  setNewDeck,
  newDeck,
  setDisableInput,
  disableInput,
  highlighted,
  clickHandler,
  changeHandler,
  ...props
}) => {
  return (
    <DeckNameContainer>
      <DeckNameIconContainer>
        <DeckTitlePrompt highlighted={highlighted}>
          Title of Deck
        </DeckTitlePrompt>
        <CardEditDeleteIcons
          setNewDeck={setNewDeck}
          newDeck={newDeck}
          type={'clear'}
          name={name}
          setDisableInput={setDisableInput}
        />
      </DeckNameIconContainer>

      <FormInput
        onChange={changeHandler}
        name="title"
        onClick={clickHandler}
        borderStyle={highlighted ? '1px solid #4CB69F' : '2px solid #908A7D'}
        inputWidth={'100%'}
        bordered={true}
        value={value}
      />
    </DeckNameContainer>
  );
};

DeckName.propTypes = {};

const DeckNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DeckTitlePrompt = styled.h1`
  color: ${props => (props.highlighted ? '#4CB69F' : '#888888')};
  font-weight: bold;
  font-size: 26px;
  text-align: left;
`;

const DeckNameIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
