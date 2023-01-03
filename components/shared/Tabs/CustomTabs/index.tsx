import * as React from 'react';
import { Tabs } from '@mui/material';
import { TabProps } from '@types';
import { CustomTab } from './styles';

interface TabsProps {
  tabsList: TabProps[];
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    tabIndex: number
  ) => void | undefined;
  tabIndex: number;
}

const CustomTabs = ({ tabsList, onChange, tabIndex }: TabsProps) => {
  return (
    <Tabs value={tabIndex} onChange={onChange} aria-label="basic tabs example">
      {tabsList.map((tab) => (
        <CustomTab
          key={tab.label}
          label={tab.label}
          aria-controls={tab.ariaControls}
          id={tab.id}
        />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
