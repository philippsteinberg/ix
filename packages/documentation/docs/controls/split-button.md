import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-split-button/props.md';
import Events from './../auto-generated/ix-split-button/events.md';

import ItemProps from './../auto-generated/ix-split-button-item/props.md';
import ItemEvents from './../auto-generated/ix-split-button-item/events.md';

import SourceSplitButton from './../auto-generated/previews/web-component/split-button.md';
import SourceSplitButtonIcons from './../auto-generated/previews/web-component/split-button-icons.md';

import SourceReactSplitButton from './../auto-generated/previews/react/split-button.md';
import SourceReactSplitButtonIcons from './../auto-generated/previews/react/split-button-icons.md';

import SourceAngularSplitButton from './../auto-generated/previews/angular/split-button.ts.md';
import SourceAngularSplitButtonIcons from './../auto-generated/previews/angular/split-button-icons.ts.md';

# Split button

## Usage

<Playground
name="split-button" height="16rem"
frameworks={{
  react: SourceReactSplitButton,
  angular: SourceAngularSplitButton,
  javascript: SourceSplitButton
}}></Playground>

### With icon only

<Playground
name="split-button-icons" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactSplitButtonIcons,
  angular: SourceAngularSplitButtonIcons,
  javascript: SourceSplitButtonIcons
}}></Playground>

## Properties (ix-split-button)

### Props

<Props />

### Events

<Events />

## Properties (ix-split-button-item)

### Props

<ItemProps />

### Events

<ItemEvents />
