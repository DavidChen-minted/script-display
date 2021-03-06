import React, { FC, ChangeEvent } from 'react';
import { css } from '@emotion/core';
import { safeLoad } from 'js-yaml';
import readAsText from 'utils/common/readAsText';
import rem from 'utils/style/rem';

export interface Props {
  callbackOnLoad?: (data: any) => void;
}

export const fileButtonStyles = css`
  border: ${rem(1)} solid black;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  margin: ${rem(20)} ${rem(20)};

  &:hover {
    border-color: gray;
    color: gray;
  }

  & > input[type='file'] {
    display: none;
  }
`;

const YamlFileInput: FC<Props> = ({ callbackOnLoad }) => {
  const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const file = e.target.files[0];
    const text = await readAsText(file);
    if (typeof text !== 'string') {
      throw new Error('no readable text');
    }
    const data = safeLoad(text);
    if (!data) {
      throw new Error('no yaml file recognized');
    }
    if (callbackOnLoad) {
      callbackOnLoad(data);
    }
  };

  return (
    <div>
      <label htmlFor="input-yaml-file" css={fileButtonStyles}>
        <input type="file" id="input-yaml-file" onChange={handleFileSelect} />
        import yaml file
      </label>
    </div>
  );
};

export default YamlFileInput;
