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

const AccordionItem = ({ children, title, isOpen, onToggle = false }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'opened' : 'closed'} `}>
      <button type="button" className='title-btn' onClick={onToggle}>
        {title}
      </button>
      <div className="contents">
        {children}
      </div>
    </div>
  );
};


//위의 코드에서 React.Children.map은 Accordion 컴포넌트의 자식들인 AccordionItem 컴포넌트들을 순회하며, 각 AccordionItem에 대해 다음과 같이 동작한다.

// isOpen 은 현재 열려있는 아코디언 아이템의 index 와 현재 순회중인 아이템의 index 를 비교하여 열린 상태를 결정
// onToggle 은 현재 아이템의 index 를, 클릭 이벤트가 발생할 때마다 토글하는 handleToggle 함수를 삽입
// 결과적으로, 각 AccordionItem에는 isOpen과 onToggle 프로퍼티가 주어져서 해당 아이템이 열린 상태인지를 결정하고, 클릭 시 토글하는 기능을 수행할 수 있게 됐다.

// Accordion 컴포넌트에 initOpen 이라는 props 를 이용해 첫 칸이 열려있는 기능도 추가