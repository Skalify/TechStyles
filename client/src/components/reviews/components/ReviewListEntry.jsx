import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Div } from '../../../lib/styledComponents';
import { putData } from '../../../lib/index.js';

const ReviewListEntry = ({ review, update, setUpdate }) => {

  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const date = new Date(review.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const helpfulReview = () => {
    if (!helpful) {
      putData(`/reviews/${review.review_id}/helpful`).then(() => {
        setUpdate(!update);
        setHelpful(true);
      });
    }
  };

  const reportReview = () => {
    if (!reported) {
      putData(`/reviews/${review.review_id}/report`).then(() => {
        setReported(true);
      });
    }
  };

  return (
    <Div>
      <div>
        {review.rating}
        {review.reviewer_name}
        {date.toLocaleDateString('en-US', dateOptions)}
      </div>
      <div style={{ fontWeight: 'bold', fontSize: 'large' }}>
        {review.summary}
      </div>
      <div>
        {review.body}
      </div>
      {review.recommend && (
        <div>
          <FaCheck />
          {' I recommend this product'}
        </div>
      )}
      {review.response && (
        <div>
          <h5>Response: </h5>
          {review.response}
        </div>
      )}
      <div>
        {' Helpful? '}
        <button type="button" className="button-link" onClick={helpfulReview}>
          Yes
        </button>
        {` (${review.helpfulness}) |`}
        {!reported
          ? (
            <button type="button" className="button-link" onClick={reportReview}>
              Report
            </button>
          )
          : <span>Reported</span>}
      </div>
    </Div>
  );
};

export default ReviewListEntry;