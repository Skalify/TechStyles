import React, { useState } from 'react';
import { Div } from '../../../lib/styledComponents';
import { getData, putData } from '../../../lib/index.js';

const AnswerEntry = ({ answer }) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const date = new Date(answer.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const helpfulAnswer = () => {
    if (!helpful) {
      putData(`/qa/answers/${answer.answer_id}/helpful`);
      setHelpful(true);
    }
  };

  const reportAnswer = () => {
    if (!reported) {
      putData(`/qa/answers/${answer.answer_id}/report`);
      setReported(true);
    }
  };

  return (
    <Div>
      <span style={{ fontWeight: 'bold', fontSize: 'large' }}>A:</span>
      {answer.body}
      <div>
        by
        {` ${answer.answerer_name},`}
        {` ${date.toLocaleDateString('en-US', dateOptions)} |`}
        {' Helpful? '}
        <button type="button" className="button-link" onClick={helpfulAnswer}>
          Yes
        </button>
        {` (${answer.helpfulness}) |`}
        <button type="button" className="button-link" onClick={reportAnswer}>
          Report
        </button>
      </div>
    </Div>
  );
};


export default AnswerEntry;