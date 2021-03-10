import React from 'react';
import styles from './index.module.less';
import cn from 'classnames';

import { Card } from 'antd';

const { useState, useEffect, useCallback, useMemo } = React;

interface Props {
  [key: string]: any;
}

interface State {
  [key: string]: any;
}

export default function Home({ children }: Props) {
  const initialState: State = {};
  const [state, setState] = useState(initialState);

  return (
    <div className={cn(styles.home)}>
      <Card>Home</Card>
    </div>
  );
}