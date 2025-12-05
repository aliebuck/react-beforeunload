# react-beforeunload

Listen to the [`beforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) window event in React.

## Usage

### `useBeforeunload` Hook (recommended)

```jsx
useBeforeunload(handler);
```

#### Parameters

- `handler` optional function to be called with `BeforeUnloadEvent` when `beforeunload` event is fired.
  Passing a non-function value will disable the event listener.

#### Example

##### Simple

```jsx
import { useBeforeunload } from "react-beforeunload";

const Example = (props) => {
  useBeforeunload((event) => event.preventDefault());
  ...
};
```

##### Conditional

```jsx
import { useBeforeunload } from "react-beforeunload";

const Example = (props) => {
  const [value, setValue] = useState("");

  useBeforeunload(value !== "" ? (event) => event.preventDefault() : null);
  // or
  useBeforeunload(value !== "" && () => true);

  ...
};
```

### `Beforeunload` Component

```jsx
<Beforeunload onBeforeunload={handler} />
```

#### Props

- `onBeforeunload` function to be called with `BeforeUnloadEvent` when `beforeunload` event is fired.

#### Example

```jsx
import { Beforeunload } from "react-beforeunload";

class Example extends React.Component {
  state = { value: "" };

  render() {
    return (
      <>
        {this.state.value !== "" && (
          <Beforeunload onBeforeunload={(event) => event.preventDefault()} />
        )}
        <input
          onChange={(event) => this.setState({ value: event.target.value })}
          value={this.state.value}
        />
      </>
    );
  }
}
```

:information_source: The `Beforeunload` component will render any children passed as-is, so it can be used as a wrapper component:

```jsx
<Beforeunload onBeforeunload={…}>
  <MyApp />
</Beforeunload>
```

## Custom message support

> :warning: Some browsers used to display the returned string in the confirmation dialog, enabling the event handler to display a custom message to the user. However, this is deprecated and no longer supported in most browsers.

[Source](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)

To display a custom message in the triggered dialog box, return a string in the passed event handler function.

With `useBeforeunload` hook:

```jsx
useBeforeunload(() => "You’ll lose your data!");
```

With `Beforeunload` component:

```jsx
<Beforeunload onBeforeunload={() => "You’ll lose your data!"} />
```
