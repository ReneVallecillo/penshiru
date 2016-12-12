/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LawListComponent } from './law-list.component';

describe('Component: LawList', () => {
  it('should create an instance', () => {
    let component = new LawListComponent();
    expect(component).toBeTruthy();
  });
});
