// @flow
import React from 'react';

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
  <div>
    <input
      size="45"
      defaultValue={value}
      onChange={onChangeValue}
      onKeyUp={onEnterSearch}
    />
  </div>
);
