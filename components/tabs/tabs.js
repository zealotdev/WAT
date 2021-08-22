import { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[2].props.label);

  const activeTabContent = children.find(
    (child) => child.props.label === activeTab
  );

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <div className="w-full md:w-8/12 shadow p-2">
      <ul className="flex w-8/12 justify-center mx-auto bg-green-300 rounded-tl-lg rounded-tr-lg pt-2 px-2">
        {children.map((child) => (
          <li
            className={child.props.label == activeTab ? 'active' : null}
            key={child.props.label}
            // onClick={setActiveTab(child.props.label)}
          >
            <a onClick={(e) => handleClick(e, child.props.label)}>
              {child.props.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        key={activeTabContent.props.label}
        className="bg-green-500 p-2 text-white rounded-lg mb-2"
      >
        {activeTabContent.props.children}
      </div>
    </div>
  );
};

export { Tabs };
