import React, { useState } from 'react';
import styled from 'styled-components';

import { green500, green700, grey100, grey600, grey800, shadow100 } from '../styleAssets';
import { Box, Title, Wrapper } from './Questionnaire';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 4rem;
  border: 1px solid ${grey600};
  margin: 1rem 0;
  font-size: 2rem;
  border-radius: 0.5rem;
  padding-left: 1rem;
  color: ${grey800};
  box-shadow: ${shadow100};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 4rem;
`;

export const Button = styled.button`
  border: none;
  color: ${grey100};
  background-color: ${green500};
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 1.25rem;
  width: 10rem;
  font-weight: 600;
  color: white;
  box-shadow: ${shadow100};

  &:hover {
    background-color: ${green700};
    color: white;
    box-shadow: none;
  }
`;

export const SecondaryButton = styled(Button)`
  margin-right: 1rem;
  background-color: white;
  color: ${green500};
`;

const Label = styled.label`
  color: ${grey800};
  font-weight: 600;
`;


function ChecklistForm() {
  const [name, changeName] = useState('');
  const [hasName, saveName]= useState(false);
  return (
    <Wrapper>
      <Title>{hasName ? name : 'Add Checklist'}</Title>
      <Box>
      {hasName ?
      <QuestionAndAnswersForm hasName />
      : <ChecklistNameForm name={name} saveName={saveName} hasName={hasName} changeName={changeName} />
      }
      </Box>
    </Wrapper>
  )
}

function QuestionAndAnswersForm({hasName}) {
  return (
    <>
        <Form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <Label>Question</Label>
          <Input/>
          <ButtonWrapper>
          {hasName && <SecondaryButton>Previous</SecondaryButton>}
            <Button>Next</Button>
          </ButtonWrapper>
        </Form>
    </>
  )
}

function ChecklistNameForm({name, changeName, saveName}) {
  console.log(name);
  return (
    <>
        <Form onSubmit={(e) => {
          e.preventDefault();
          saveName(true)
        }}>
          <Label>Name of the checklist</Label>
          <Input value={name} onChange={(e) => changeName(e.target.value)}/>
          <ButtonWrapper>
            <Button
            >Next</Button>
          </ButtonWrapper>
        </Form>
    </>
  )
}

export default ChecklistForm;
