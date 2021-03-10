import React from 'react';
import styles from './index.module.less';
import cn from 'classnames';

const { useState, useEffect, useCallback, useMemo } = React;

interface Props {
  [key: string]: any;
}

interface State {
  [key: string]: any;
}

export default function {{component.name.capitalizedCamelCase}}({ children }:Props){
  const initialState: State = {};
  const [state, setState] = useState(initialState);

  return (
    <div className={cn( styles.{{ component.name.camelCase }} )}>
      {{ component.name.original }}
    </div>
  )
}
