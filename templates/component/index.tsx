import React from 'react';
import styles from './index.module.less';
import cn from 'classnames';

const { useState, useEffect, useCallback, useMemo } = React;

interface Props {
  className?: string;
  style?: Record<string,any>;
  children: any;
}

interface State {
  [key: string]: any;
}

export default function {{component.name.capitalizedCamelCase}}({ clsasName, style, children }:Props){
  const initialState: State = {};
  const [state, setState] = useState(initialState);

  return (
    <div style={style} className={cn( className, styles.{{ component.name.camelCase }} )}>
      {{ component.name.original }}
    </div>
  )
}
