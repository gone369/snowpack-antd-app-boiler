import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './index.module.less';
import cn from 'classnames';

import { Card } from 'antd';

interface Props {
  [key: string]: any;
}

interface State {
  [key: string]: any;
}

export default function Home({ children }: Props) {
  const [state, setState] = useState<State>({});

  return (
    <div className={cn(styles.home)}>
      <Card>Home</Card>
    </div>
  );
}
