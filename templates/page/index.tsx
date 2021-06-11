import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './index.module.less';
import cn from 'classnames';

interface Props {
  [key: string]: any;
}

interface State {
  [key: string]: any;
}

export default function {{component.name.capitalizedCamelCase}}({ children }:Props){
  const [state, setState] = useState<State>({});

  return (
    <div className={cn( styles.{{ component.name.camelCase }} )}>
      {{ component.name.original }}
    </div>
  )
}
