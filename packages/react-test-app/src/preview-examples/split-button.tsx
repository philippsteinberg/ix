/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSplitButton, IxSplitButtonItem } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxSplitButton label="Action text" splitIcon='chevron-down-small'>
      <IxSplitButtonItem label="Item 1"></IxSplitButtonItem>
      <IxSplitButtonItem label="Item 2"></IxSplitButtonItem>
    </IxSplitButton>
  );
};
