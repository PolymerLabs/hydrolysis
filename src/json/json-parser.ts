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

import {InlineDocInfo} from '../model/model';
import {ResolvedUrl} from '../model/url';
import {Parser} from '../parser/parser';

import {ParsedJsonDocument} from './json-document';

export class JsonParser implements Parser<ParsedJsonDocument> {
  parse(contents: string, url: ResolvedUrl, inlineDocInfo: InlineDocInfo<any>):
      ParsedJsonDocument {
    const isInline = !!inlineDocInfo;
    inlineDocInfo = inlineDocInfo || {};
    return new ParsedJsonDocument({
      url,
      contents,
      ast: JSON.parse(contents),
      locationOffset: inlineDocInfo.locationOffset,
      astNode: inlineDocInfo.astNode, isInline
    });
  }
}
