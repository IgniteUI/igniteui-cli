---
title: Two-Way Data Binding in Angular with ngModel | WPF to Angular Guide | Infragistics
_description: Learn how two-way data binding in Angular is used to display information to the end user and allows them to make changes to the underlying data using the UI. 
_keywords: two-way data binding in Angular, ignite ui for angular, infragistics
_tocName: Two-Way Binding
---

# What is two-way data binding in Angular

The two-way data binding in Angular enables data to flow from the component to the view and the other way round. It is used to display information to the end-user and allows them to make changes to the underlying data using the UI. This makes a two-way connection between the view (the template) and the component class that we already mentioned. The process is similar to the two-way binding in WPF.  

> [!Video https://www.youtube.com/embed/MrjTTDEj7cA]

## How does data binding work in Angular?

Angular data binding works by synchronizing the data in the [angular components](https://www.infragistics.com/products/ignite-ui-angular) with the UI. This way it can always show the current value of the data. In terms of the two-way binding, the automatic data synchronization happens between the Model and the View, keeping both synced all the time. Because of this, any change made in the Model is immediately reflected in the View as well. And vice versa – changes made in the View are updated in the Model too.
The two-way data binding in Angular is used to display information to the end user and allows the end user to make changes to the underlying data using the UI. This makes a two-way connection between the view (the template) and the component class. This is similar to the two-way binding in WPF.

A one-way binding is taking the state from our component class and displaying it in our view. Let's look at this code:

```html
<input #myTitle (keyup)="keyup(myTitle.value)">
<h2>{{ text }}</h2>
```

```typescript
export class SampleComponent implements OnInit {

text = 'default value';

keyup(value) {
  this.text = value;
}
...
```

Here we are simply using `interpolation` to bind the text property to the HTML. This will display the value of the text property in the UI. The `input` element handles the user interaction and updates the underlying `text` property through the UI by using the [event binding](angular-events.md). Essentially, the input does the opposite of the one-way binding, it takes the information from the UI and updates the property in the component class. The method which is hooked up to the input's keyup event updates the text property each time the event occurs. Once the text property value is changed by the event method, that change is reflected in the UI by the one-way binding using `interpolation` of the h2 element. So if the user types something into the input element, that will immediately update the h2 text - this behavior is basically a simulation of a two-way binding. The same can also be achieved in WPF by using a one-way binding and a keyup event handler, but the two-way binding is way more convenient to use.

## How to implement two-way data binding in Angular

Fortunately, we can implement the logic of the sample from above in a much easier way and this is where the two-way binding steps in!

The direction of a two-way binding is not just **component class to UI**, but **UI to component class** as well. To achieve this, we are going to use a [directive](https://angular.io/api/core/Directive) called [`ngModel`](https://angular.io/api/forms/NgModel). Let's update the sample from above with the `ngModel` directive. The syntax for that is - an open bracket followed by an open parenthesis, and of course the corresponding closing parenthesis and bracket. This is called a **banana in the box**, so let's see it in action!

```html
<input [(ngModel)]="text">
<h2>{{ text }}</h2>
```

And the equivalent bindings in WPF would be:

```xml
<TextBox Text="{Binding Path=Text, Mode=TwoWay}"></TextBox>
<TextBlock Text="{Binding Path=Text, Mode=OneWay}"></TextBlock>
```

The Angular binding is a matter of syntax, and in WPF it is more like a setup - in particular the value of `Binding.Mode`.

If we run this code, an error would occur in the console - saying that the `ngModel` is an unknown property of the input element. This is due to the fact, that in order to use the `ngModel` directive, it's necessary to import the [`FormsModule`](https://angular.io/api/forms/FormsModule). It needs to be imported into the `app.module.ts` file:

```typescript
import { FormsModule } from '@angular/forms';
...
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ]
...
```

If we run the sample, the initial input's value would be equal to **default value**, which is the `text` property's value. Since the input is editable, changing its value will reflect over the h2 element immediately. So typing into the input updates the `text` property, and then the h2 element displays that value via the `interpolation`.

Another equivalent way to achieve this is:

```html
<input [ngModel]="text" (ngModelChange)="text = $event">
```

This is actually similar to the first sample, which used a property binding and an event binding.


## Additional Resources

- [Desktop to Web: Desktop to Web: Angular Two-Way Binding with ngModel](https://www.youtube.com/watch?v=MrjTTDEj7cA&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j)
- [One-way binding in Angular](one-way-binding.md)
- [Angular NgModel](https://angular.io/api/forms/NgModel)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
