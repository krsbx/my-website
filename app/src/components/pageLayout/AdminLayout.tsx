import React, { createRef } from 'react';
import { Flex } from '@chakra-ui/react';
import { TopBar } from '../baseComponents';
import { useIsAuthenticated } from 'src/utils/sessionUtils';
import useTopBarHeight from 'src/utils/useTopbarHeight';
import useSmoothScrollbar from 'src/utils/useSmoothSrollbar';

const AdminLayout: React.FC<Props> = ({ children, contentRef }) => {
  const topbarRef = createRef<HTMLDivElement>();
  const topBarHeight = useTopBarHeight(topbarRef);
  const isAuth = useIsAuthenticated();

  useSmoothScrollbar(contentRef);

  return (
    <Flex flexDirection={'column'} bg="gray.100" width={'100vw'} height={'100vh'}>
      <TopBar ref={topbarRef} />
      <Flex
        flexDirection={'column'}
        width={'100vw'}
        height={`calc(100vh - ${topBarHeight}px)`}
        overflow={'auto'}
        ref={contentRef}
      >
        {children}
      </Flex>
    </Flex>
  );
};

type Props = {
  contentRef?: React.RefObject<HTMLDivElement>;
};

export default AdminLayout;
