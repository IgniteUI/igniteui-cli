# Event Handling

## How Events Work

Ignite UI React wrappers map web component custom events to React-style `onXxx` callback props. The event name is converted from the web component event name to a camelCase `on`-prefixed prop.

```tsx
import { IgrButton, IgrInput, IgrCheckbox } from 'igniteui-react';

function MyForm() {
  const handleClick = (event: CustomEvent) => {
    console.log('Button clicked');
  };

  const handleInput = (event: CustomEvent) => {
    // event.target is the underlying web component element (e.g., igc-input)
    console.log('Input value:', (event.target as any).value);
  };

  const handleChange = (event: CustomEvent) => {
    console.log('Checkbox changed:', event.detail);
  };

  return (
    <>
      <IgrButton onClick={handleClick}>
        <span>Submit</span>
      </IgrButton>
      <IgrInput label="Name" onInput={handleInput} />
      <IgrCheckbox onChange={handleChange}>Accept terms</IgrCheckbox>
    </>
  );
}
```

## Common Event Props

| Component | Event Prop | Fires When |
|---|---|---|
| `IgrButton` | `onClick` | Button is clicked |
| `IgrInput` | `onInput` | Value changes (each keystroke) |
| `IgrInput` | `onChange` | Value committed (blur / Enter) |
| `IgrCheckbox` | `onChange` | Checked state changes |
| `IgrSwitch` | `onChange` | Toggle state changes |
| `IgrSelect` | `onChange` | Selection changes |
| `IgrCombo` | `onChange` | Selection changes |
| `IgrSlider` | `onInput` | Slider value changes (live) |
| `IgrSlider` | `onChange` | Slider value committed |
| `IgrDialog` | `onClosing` | Dialog is about to close |
| `IgrDialog` | `onClosed` | Dialog has closed |
| `IgrTabs` | `onChange` | Active tab changes |
| `IgrCalendar` | `onChange` | Selected date changes |
| `IgrDatepicker` | `onChange` | Selected date changes |

## TypeScript Event Types

When using TypeScript, event handlers receive the underlying `CustomEvent`:

```tsx
import { IgrInput } from 'igniteui-react';

function SearchBar() {
  const handleInput = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    console.log('Search:', value);
  };

  return <IgrInput label="Search" onInput={handleInput} />;
}
```
