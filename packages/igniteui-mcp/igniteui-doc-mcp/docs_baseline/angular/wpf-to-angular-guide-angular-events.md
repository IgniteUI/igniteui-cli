---
title: Handling Angular Events | Event Binding | WPF to Angular Guide | Infragistics
_description: Learn about Angular event binding and how to create your own Angular custom events. See how Angular uses DOM events to do this and handles user inputs.
_keywords: handling angular events, ignite ui for angular, infragistics
_tocName: Angular Events
---

# Handling Angular Events

> [!Video https://www.youtube.com/embed/V1Futz4W400]

The Angular events are emitted as a response to user interactions. When an Angular event is emitted, its event handling logic is executed. WPF provides routed events, CLR events, and commands. While in Angular, there are DOM events.

Here is a simple example how you respond to a click event of a button in WPF:

```xml
<Button Click="Button_Click">Click Me</Button>
```

```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    Console.WriteLine("Hello World");
}
```

The same thing in Angular would look like this:

```html
<button (click)="onClicked()">Click Me</button>
```

```typescript
onClicked() {
    console.log('Hello World');
}
```

In WPF we are used to getting information about the event, such as the sender and the event arguments. In Angular we can use the `$event` variable. This variable will provide information about the event that was invoked.

```html
<button (click)="onClicked($event)">Click Me</button>
```

```typescript
onClicked(event) {
    console.log(event.target);
}
```

Sometimes passing the event object might not be very useful. Instead, you may want to pass the value of an `input` on the page.

```html
<input #messageInput>
<button (click)="onClicked(messageInput.value)">Click Me</button>
```

```typescript
onClicked(message) {
    console.log(message);
}
```

Let's say that we want to print the value of an input on pressing Enter. You could do that in Angular like this:

```html
<input #messageInput (keyup)="onInputKeyup($event, messageInput.value)">
```

```typescript
onInputKeyup(event, message) {
    if (event.keyCode === 13) {
        console.log(message);
    }
}
```

Surprisingly, in Angular, there is an even easier way to do that. You could bind to the `keyup.enter` pseudo-event. Using this approach, the event handler will be called only when the user presses Enter.

```html
<input #messageInput (keyup.enter)="onInputKeyup(messageInput.value)">
```

```typescript
onInputKeyup(message) {
    console.log(message);
}
```

## Responding to Events of a Component

In WPF, when you create your own custom controls, often you need to extend or modify some base events like this:

```csharp
public class MyControl : Control
{
    protected override void OnMouseDown(MouseButtonEventArgs e)
    {
        base.OnMouseDown(e);
        // Place your custom logic here
    }
}
```

In Angular, you achieve a similar result using the [HostListener](https://angular.io/api/core/HostListener) decorator.

```typescript
@Component({
    selector: 'app-my-component',
    templateUrl: './my.component.html',
    styleUrls: ['./my.component.css']
})
export class MyComponent {
    @HostListener('mousedown', ['$event'])
    onMouseDown(event) {
        // place your custom logic here
    }
}
```

## Create Your Own Events

Sometimes you need to define your own events. In WPF you could define either CLR or routed events. Let's take a look at a simple example of a CLR event in WPF:

```csharp
public event EventHandler<TaskEventArgs> TaskCompleted;

...
this.TaskCompleted(this, new TaskEventArgs());
```

In order to define a custom event in Angular, you have to define an [EventEmitter](https://angular.io/api/core/EventEmitter) property marked with the [Output](https://angular.io/api/core/Output) decorator.

```typescript
@Output()
taskCompleted = new EventEmitter<TaskEventArgs>();

...
this.taskCompleted.emit(new TaskEventArgs());
```

## Additional Resources

- [Desktop to Web: Responding to Events with Angular Event Binding](https://www.youtube.com/watch?v=V1Futz4W400&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j&index=6)
- [Angular User Input](https://angular.io/guide/user-input)
- [Component Interaction: Parent listens for child events](https://angular.io/guide/component-interaction#parent-listens-for-child-event)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
