---
title: Transform Data with Angular Pipes | WPF to Angular Guide | Infragistics
_description: Learn how Angular pipes can transform data from one value to another like wpf converters. Angular provides predefined pipes for common data transformations.
_keywords: transform data with angular pipes, ignite ui for angular, infragistics
_tocName: Transforming Data with Angular Pipes
---

# Transform Data with Angular Pipes

> [!Video https://www.youtube.com/embed/Gmz5kio50FE]

You can use the Angular pipes to transform data from one value to another. This technic is similar to WPF converters.

In WPF in order to transform data from one value to another, you are going to use an [IValueConverter](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.ivalueconverter?view=netframework-4.8). To transform data in an Angular application, we are going to use a [Pipe](https://angular.io/api/core/Pipe). The pipe is very similar to the WPF converter. It takes data as an input and then transforms that data into a desired output for display.

Angular provides a number of predefined pipes for the most common data transformations. For example, if you want a header text to appear in upper case, you could use the [UpperCasePipe](https://angular.io/api/common/UpperCasePipe). Using a pipe is very simple. After your expression, provide a pipe operator `|` followed by the pipe name.

```html
<h2>{{ header | uppercase }}</h2>
```

What is really great about the pipes in Angular compared to a WPF converter is that you can actually use more than one pipe at a time. So, for example you can use a [DatePipe](https://angular.io/api/common/DatePipe) and [UpperCasePipe](https://angular.io/api/common/UpperCasePipe) in order to format the date to a user-friendly format and make it uppercase:

```html
<h2>{{ birthday | date | uppercase }}</h2>
```

Besides that, we also have the option to provide parameters to the pipe. For example, the [DatePipe](https://angular.io/api/common/DatePipe) has parameters like format, time zone and locale.

```html
<h2>{{ birthday | date:"MM/dd/yy" }}</h2>
```

## Create Your Own Pipe

Besides using the predefined pipes, Angular allows you to define your own pipes. Let's take a look at the implementation of a WPF converter that replaces a string with another one.

```csharp
public class ReplaceConverter : IValueConverter
{
    public string OldValue { get; set; }
    public string NewValue { get; set; }

    public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
    {
        var strValue = value.ToString();
        return strValue.Replace(this.OldValue, this.NewValue);
    }

    public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}
```

```xml
<Window.Resources>
    <local:ReplaceConverter OldValue=" " NewValue="-" x:Key="replaceConverter"></local:ReplaceConverter>
</Window.Resources>
<Grid>
    <TextBlock Text="{Binding Path=Name, Mode=OneWay, Converter={StaticResource replaceConverter}}"></TextBlock>
</Grid>
```

In order to do the same in Angular, we have to define a class that implements the [PipeTransform](https://angular.io/api/core/PipeTransform) interface and has the [@Pipe](https://angular.io/api/core/Pipe) decorator.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, oldValue: string, newValue: string): string {
        return value.replace(oldValue, newValue);
    }
}
```

```html
<span>{{ name | replace:" ":"-" }}</span>
```

> [!NOTE]
> Note that in order to be able to use the pipe in the component's html template, you have to add it to the module declarations.
> [!NOTE]
> An important difference between the Angular pipe and the WPF converter is that the Angular pipe works only for one-way binding unlike the WPF converter which has [ConvertBack](https://docs.microsoft.com/en-us/dotnet/api/system.windows.data.ivalueconverter.convertback?view=netframework-4.8) method.

## Additional Resources

- [Desktop to Web: Transforming Data with Angular Pipes](https://www.youtube.com/watch?v=Gmz5kio50FE&list=PLG8rj6Rr0BU-AqcJMuwggKy0GMIkjkt3j&index=9)
- [Angular Pipes](https://angular.io/guide/pipes)
- [List of Predefined Angular Pipes](https://angular.io/api?type=pipe)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
