import React, { useState } from 'react';


const Accordion = ({ children, initOpen = false }) => {
  const [activeIndex, setActiveIndex] = useState(initOpen ? 0 : null);

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: activeIndex === index,
          onToggle: () => handleToggle(index)
        })
      )}
    </div>
  );
};

const AccordionItem = ({ children, title, isOpen, onToggle, checkAll = false }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'opened' : 'closed'} ${checkAll && 'check-all'}`}>
      <button type="button" className='title-btn' onClick={onToggle}>
        {title}
      </button>
      <div className="contents-wrap">
        {children}
      </div>
    </div>
  );
};