---
title: Angular Structural Directives | ngIf, ngswitch | WPF to Angular Guide | Infragistics
_description: Learn how to use structural directives in Angular 9 like ngIf, ngswitch & ngFor to add and remove elements to your view in your Angular application
_keywords: angular structural directives, ignite ui for angular, infragistics
_tocName: Structural Directives in Angular
---

# Angular Structural Directives

> [!Video https://www.youtube.com/embed/vQe7R78Od8k]

When it comes to control the appearance of the visual tree elements’ appearance in WPF, the most common way is to use binding and visibility converter, which requires some extra logic and static resources. Angular also has a similar technique, which changes the appearance or behavior of a DOM element - the Angular directives. One of the Angular `directives` type is the `structural directives` – they change the DOM layout by adding or removing DOM elements.

In this topic, we are going to demonstrate the following three structural directives - `ngIf`, `ngSwitch` and `ngFor`. As one can tell from their names, each of these can be compared to a C# structure. The `ngIf` is the same thing as an "if-else" C# code block, the `ngSwitch` is the same thing as the C# switch-case statement and, lastly, the `ngFor` is the exact same thing as a C# "for-loop".

## `ngIf` Directive

Let’s explore each of these directives, starting with the `ngIf`. This directive allows us to show or hide elements based on a boolean condition. We will start by creating a "div" element with an "h2" tag containing a name.

```html
<div>
  <h2>John</h2>
</div>
```

If we save this, our browser will render the name John. However, let’s say we have some type of boolean expression that we want to base the condition of the visibility of this "h2" tag on. For example, we are going to add a property called "isFirstName" and set it to false. In order to tell our div to be rendered when isFirstName equals true, we should use the following syntax `*ngIf = "isFirstName"`.

```typescript
public isFirstName = false;
```

``` html
<div *ngIf="isFirstName">
  <h2>John</h2>
</div>
```

Once we save the files, and because isFirstName is false, we will see that the name is no longer rendered in the browser. However, if we were to update isFirstName to be true, the "John" first name will be rendered in the browser. If we set isFirstName back to false, we'll notice that the first name is no longer rendered in our browser, instead it's empty. That's the default behavior of the `ngif` statement - if the expression is true we render the provided template otherwise it's empty.

If we were to achieve the same behavior with WPF, we would need to use a visibility converter. The code would look similar to the following:

```cs
public bool IsFirstName { get; set; }
public Sample()
  {
      InitializeComponent();
      this.DataContext = this;
      this.IsFirstName = true;
  }
```

```xml
<UserControl.Resources>
  <BooleanToVisibilityConverter x:Key="VisibleIfTrueConverter" />
</UserControl.Resources>
<Grid>
  <Label Visibility="{Binding Path=IsFirstName, Converter={StaticResource VisibleIfTrueConverter}}">John</Label>
</Grid>
```

In Angular, it is a lot easier and more straightforward.

Let's create a requirement that states if the `isFirstName` property is false we want to provide a last name instead. To do that we're going to take advantage of the "else" clause of the `ngIf` directive. Let's start by creating an `ng-template` defining an "h2" tag which contains the last name. An `ng-template` is simply a placeholder that allows us to define content that is not part of the DOM, but can be added via code such as using the `ngIf` directive. But, in order to use this in the directive, we need to give it a template reference variable name such as "lastname". Now that we have named our `ng-template`, let's go into our `ngIf` directive, add "**; else lastname**" and save this. Because "isFirstName" is false, we are saying **else use the lastname**, which means are using the template with the last name.

```html
<div *ngIf="isFirstName; else lastname">
  <h2>John</h2>
</div>
<ng-template #lastname>
  <h2>Doe</h2>
</ng-template>
```

Now, another way we can write this is we can say "**isFirstName; then firstname; else lastname**". So in order to do that, we need to create another template called "firstname".

```html
<div *ngIf="isFirstName; then firstname; else lastname">
</div>
<ng-template #firstname>
  <h2>John</h2>
</ng-template>
<ng-template #lastname>
  <h2>Doe</h2>
</ng-template>
```

If we change "isFirstName" to true, the first name will be rendered in the browser. And one final tip on using the `ngIf` directive is that the expression is not limited to a single property - you can actually use multiple properties and/or functions as long as the expression as a whole returns a boolean result. For example we can even use logical operators such as `" && isValid || getIsValidName()"`.

## `ngSwitch` Directive

The next directive we will discuss is the `ngSwitch` directive. This allows us to compare one expression to multiple expressions to decide which templates to add or remove.
Let’s say we have "h2" elements that represent makes of cars – Chevy, Ford and GMC. We would like to display only one of these items based on a value of a "make" property which we have defined in our typescript file with a default value of "Chevy". To achieve this we need to use the `ngSwitch` directive with the following syntax `[ngSwitch] = expression` where expression is our "make" property. Adding this to the "div" element wrapping the "h2" tags is not enough. Like in WPF, we need to add some "case" statements to each "h2" element. The syntax for that is `*ngSwitchCase = expression`. In this case, we are comparing directly against text, so we will add single quotes around the value which means that the final result would be `*ngSwitchCase = "'Chevy'"` /similar for the other two values/.

```typescript
make = "Chevy";
```

```html
<div [ngSwitch]="make">
  <h2 *ngSwitchCase="'Chevy'">Chevy</h2>
  <h2 *ngSwitchCase="'Ford'">Ford</h2>
  <h2 *ngSwitchCase="'GMC'">GMC</h2>
</div>
```

Once we save that, we are only going to see the Chevy option rendered in the browser because the value of our "make" property is set to "Chevy". If we change it, to say "GMC", and save that, only the GMC option will be rendered in the browser. Now, what happens if we add an option that is not available, say the "Lambo". Nothing would be rendered because that did not match any of our conditions. When we normally use a switch statement inside of C#, we have not only the case but also default value. The same is available in Angular – we can add another option with the "Not Found" text and mark it with the `*ngSwitchDefault` which will act as the default value if none of the other values are found.

```html
<h2 *ngSwitchDefault>Not Found</h2>
```

In this case, if we are looking for Lambo, we don't have the Lambo option, so we switch to the default case which is “Not found”, and “Not found” is rendered in our browser. One thing we need to point out is that these are expressions so we can use even a function as long as it returns a result that matches the expression we are passing in. Pretty simple!

## `ngFor` Directive

Next up is the `ngFor` directive. This directive allows us to iterate through a collection of objects and add a template for each item in that collection. Let's start by adding a collection of objects in our typescript file. We are going to call this an array of makes and add Chevy, Ford, GMC and Dodge. Next we will create a "div" and for each "div" we're going to create an "h2" tag that lists out the name of that make. To do that we are going to use the `ngFor` directive - the syntax for that `*ngFor="let make of makes"`. That provides us the ability to use interpolation to use the "make" property that is defined via the "let make" portion of the expression and print that out in the "h2" tag.

```typescript
makes = ["Chevy", "Ford", "GMC", "Dodge"];
```

```html
<div *ngFor="let make of makes">
  <h2>{{ make }}</h2>
</div>
```

If all went well, we should see that for each item in that array we are using an h2 tag to represent that in the browser. In addition, the `ngFor` directive provides a few helper items that allow us to get more information about that collection such as:

- "index as i" - allows us to determine what the index of each item is

```html
<div *ngFor="let make of makes; index as i">
  <h2>{{ i }} - {{ make }}</h2>
</div>
```

- "first as f" - allows us to get whether the item is the first one in the collection

```html
<div *ngFor="let make of makes; first as f">
  <h2>{{ f }} - {{ make }}</h2>
</div>
```

- "last as l" - you can also get the last row or the last item in the collection

```html
<div *ngFor="let make of makes; last as l">
  <h2>{{ l }} - {{ make }}</h2>
</div>
```

- "odd as o" or "even as e" - allow us to determine if the item in the collection is in an odd position or an even position

```html
<div *ngFor="let make of makes; odd as o">
  <h2>{{ o }} - {{ make }}</h2>
</div>
```

That's how easy it is to add and remove elements to your view in your angular application - just use a structural directive and you are done.

## Additional Resources

- [Desktop to Web: Structural Directives in Angular](https://www.youtube.com/watch?v=vQe7R78Od8k&t)
- [Angular Structural Directives](https://angular.io/guide/structural-directives)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
