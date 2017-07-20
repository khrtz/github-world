// @flow
import React from 'react';
import styles from './styles/Search.css';

type Props = {
  className?: string;
  value?: string;
  onChangeValue: () => void;
  onEnterSearch: () => void;
};

export const Search: FunctionalComponent<Props, *> = ({
  value = '',
  onChangeValue,
  onEnterSearch,
}) => (
  <div className={styles.search}>
    <input
      size="45"
      defaultValue={value}
      onChange={onChangeValue}
      onKeyUp={onEnterSearch}
    />
  </div>
);
