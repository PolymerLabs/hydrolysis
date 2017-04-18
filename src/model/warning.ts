/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {SourceRange} from './source-range';
export interface Warning {
  readonly message: string;
  readonly sourceRange: SourceRange;
  readonly severity: Severity;
  readonly code: string;
}

export enum Severity {
  ERROR,
  WARNING,
  INFO
}

// TODO(rictic): can we get rid of this class entirely?
export class WarningCarryingException extends Error {
  readonly warning: Warning;
  constructor(warning: Warning) {
    super(warning.message);
    this.warning = warning;
  }
}
