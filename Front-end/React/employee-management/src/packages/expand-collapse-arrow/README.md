# ExpandCollapseArrow component

Simple Up/Down arrow component to indicated collapsed or expanded

## Example Usage

```javascript
<ExpandCollapseArrow isOpen={false} onClick={() => alert('You clicked the button')} />
```

## Dependencies

| Dependency   | Description                  | Version |
| ------------ | ---------------------------- | ------- |
| @remedy/icon | Implements FontAwesome icons | ^0.0.1  |

## Props

| Prop   | Type      | Default Value | Description                                                        | Possible values |
| ------ | --------- | ------------- | ------------------------------------------------------------------ | --------------- |
| isOpen | `boolean` | false         | Indicates whether the arrow should point down (false) or up (true) | `true|false`    |
