import React, { useState } from "react";

const DestinationsDetailsFaq = ({ faqs = [] }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="destinations-details__faq">
      <div className="accrodion-grp faq-one-accrodion">
        {faqs.map(({ id, answer, question }) => (
          <div
            className={`accrodion overflow-hidden${
              active === id ? " active" : ""
            }`}
            key={id}
          >
            <div onClick={() => setActive(id)} className="accrodion-title">
              <h4>{question}</h4>
            </div>
            <div
              className={`accrodion-content animated ${
                active === id ? "slideInUp d-block" : "slideInDown d-none"
              }`}
            >
              <div className="inner">
                <p>{answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsDetailsFaq;
