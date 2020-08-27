import React from 'react';

import Input from '../../shraed/components/FormElements/Input';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title"
      ></Input>
    </form>
  );
};

export default NewPlace;
