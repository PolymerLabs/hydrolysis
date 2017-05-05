/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
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

import {UrlLoader} from './url-loader';

/**
 * Resolves requests via one of a sequence of loaders.
 */
export class MultiUrlLoader implements UrlLoader {
  constructor(private _loaders: UrlLoader[]) {
  }

  canLoad(url: string): boolean {
    return this._loaders.some((loader) => loader.canLoad(url));
  }

  async load(url: string): Promise<string> {
    for (const loader of this._loaders) {
      if (loader.canLoad(url)) {
        return loader.load(url);
      }
    }
    return Promise.reject(new Error(`Unable to load ${url}`));
  }
}
