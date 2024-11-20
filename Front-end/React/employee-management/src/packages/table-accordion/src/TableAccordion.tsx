import React, { useState, useEffect } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme/lib/index';
import ExpandCollapseArrow from '../../expand-collapse-arrow/lib/index';

const Section = styled('div')`
  background-color: ${colors.white};
  border-top: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  padding: ${sizes.small} ${sizes.small} ${sizes.small} 0;
  margin-bottom: ${sizes.xSmall};
`;

const Header = styled('div')`
  display: grid;
  grid-template-columns: ${sizes.medium} auto;
  align-items: center;
  cursor: pointer;
`;

const HeaderArrow = styled('div')`
  justify-self: center;
`;

const Content = styled<'div', { isCollapsed?: boolean }>('div')`
  display: ${({ isCollapsed }) => (!isCollapsed ? 'none' : 'block')};
  margin-left: ${sizes.medium};
  padding: ${sizes.medium} 0;
`;

const HeaderItems = styled<'div', { isCollapsed?: boolean }>('div')`
  display: flex;
  align-items: center;
  span:not(label) {
    color: ${({ isCollapsed }) => (!isCollapsed ? `${colors.tertiary2}` : 'initial')};
  }
`;

const HeaderItem = styled('span')`
  margin: 0 ${sizes.xSmall};
`;

type TableAccordionProps = {
  headerItems: React.ReactNode[];
  className?: string;
  isOpen?: boolean;
  children?: React.ReactNode;
  handleClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
};

const TableAccordion: React.FC<TableAccordionProps> = ({ isOpen, headerItems, className, children, handleClick }) => {
  const [isCollapsed, toggleCollapsed] = useState(isOpen);

  useEffect(() => {
    toggleCollapsed(!isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    toggleCollapsed(!isCollapsed);
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <Section className={className}>
      <Header onClick={handleToggle}>
        <HeaderArrow>
          <ExpandCollapseArrow
            isOpen={!isCollapsed}
            iconSize={'lg'}
            iconColor={!isCollapsed ? colors.tertiary2 : colors.charcoal}
          />
        </HeaderArrow>
        <HeaderItems isCollapsed={isCollapsed}>
          {headerItems
            ? headerItems.map((item: React.ReactNode, index: number) => <HeaderItem key={index}>{item}</HeaderItem>)
            : null}
        </HeaderItems>
      </Header>
      <Content isCollapsed={isCollapsed} data-testid="collapsible-body">
        {children}
      </Content>
    </Section>
  );
};

export default TableAccordion;
