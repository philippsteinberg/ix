/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventEmitter, Injectable, Output } from '@angular/core';
import { themeSwitcher, ThemeSwitcher } from '@siemens/ix';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  @Output() themeChanged = new EventEmitter<string>();

  private themeSwitcher: ThemeSwitcher;

  constructor() {
    this.themeSwitcher = themeSwitcher;
    this.themeSwitcher.themeChanged.on((theme: string) =>
      this.themeChanged.emit(theme)
    );
  }

  toggleMode(): void {
    this.themeSwitcher.toggleMode();
  }

  setTheme(themeName: string): void {
    this.themeSwitcher.setTheme(themeName);
  }
}
