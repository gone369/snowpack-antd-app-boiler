import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './index.module.less';
import cn from 'classnames';

interface Props {
  className?: string;
  style?: Record<string, any>;
  children?: any;
}

interface State {
  [key: string]: any;
}

export default function {{component.name.capitalizedCamelCase}}({ className, style, children }: Props){
  const initialState: State = {};
  const [state, setState] = useState(initialState);

  return (
    <div style={style} className={cn( className, styles.{{ component.name.camelCase }} )}>
      {{ component.name.original }}
    </div>
  )
}
