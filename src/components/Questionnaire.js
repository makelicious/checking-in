import React, { useState } from 'react';
import styled from 'styled-components';

import { green200, green500, green700, grey800, shadow100, shadow200, shadow400 } from '../styleAssets';

export const Wrapper = styled.div`
  color: black;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${grey800};
  letter-spacing: 0.05rem;
  font-weight: 200;
  margin: 6rem 0 1rem 2rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 2rem 4rem;
  margin: 0 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border-top: 0.25rem solid ${green500};
  box-shadow: ${shadow400};
`;

const Question = styled.span`
  font-size: 1.5rem;
  color: ${grey800};
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  font-size: 1.25rem;
  align-items: center;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;
const ProgressAmount = styled.span`
  font-weight: 700;
  color: ${grey800};
  letter-spacing: -0.025rem;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
`;

export const ProgressBar = styled.div`
  height: 2rem;
  background-color: ${green200};
  border-radius: 0.5rem;
  box-shadow: ${shadow100};
`;

const ProgressPercentage = styled.span`
  color: ${grey800};
`;
export const Button = styled.button`
  background-color: ${green500};
  text-align: start;
  padding: 1rem 0 1rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  box-shadow: ${shadow200};
  color: white;
  font-weight: 600;
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
  border: none;
  &:hover {
    box-shadow: ${shadow100};
    background-color: ${green700};
    color: white;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-direction: column;
`;

function Questionnaire() {
  const [answers, setAnswer] = useState([])
  const [currentQuestion, setQuestion] = useState(0)
  const [checklist] = useState({
      title: 'foobar',
      items: [],
  });

  const currentQuestionNth = currentQuestion + 1;
  const currentItem = checklist.items[currentQuestion];
  return (
    checklist.items.length !== currentQuestionNth  ?
    <Wrapper>
      <Title>{checklist.title}</Title>
      <Box>
        <Progress>
          <ProgressText>
            <ProgressAmount>
              {currentQuestionNth} out of {checklist.items.length}
            </ProgressAmount>
            <ProgressPercentage>
              {percentage(currentQuestionNth, checklist.items.length)}%
            </ProgressPercentage>
          </ProgressText>
          <ProgressBarWrapper>
            <ProgressBar />
          </ProgressBarWrapper>
        </Progress>
        <Question>{currentItem.question}</Question>
        <ButtonWrapper>
          {currentItem.options.map((option) => (
            <Button onClick={() => {
              setAnswer(answers.concat(option))
              setQuestion(currentQuestion + 1);
            }}>{option}</Button>
          ))}
        </ButtonWrapper>
      </Box>
    </Wrapper>
    : <div>moro</div>
  );
}

function percentage(dividend, divisor) {
  return Math.floor((dividend / divisor) * 100);
}

export default Questionnaire;
