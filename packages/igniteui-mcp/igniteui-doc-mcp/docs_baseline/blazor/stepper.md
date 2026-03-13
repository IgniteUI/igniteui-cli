---
title: Blazor Stepper Component - Ignite UI for Blazor
_description: Blazor Stepper component is used to visualize content as a process and to show its progress by dividing the content into logical steps. Try it for FREE.
_keywords: Blazor Stepper, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Stepper"]
_tocName: Stepper
---

# Blazor Stepper Overview

The Blazor Stepper Component provides a wizard-like workflow and is used for showing progress through numbered steps. It enables developers to divide a lengthy content into a sequence of logical steps, helping end-users more easily navigate the entire process. The Blazor Stepper is displayed as a vertical or a horizontal line. The Blazor Stepper has multiple features like step validation, styling, orientation and keyboard navigation.

## Blazor Stepper Example

The following Ignite UI for Blazor Stepper Example below shows the component in action. It visualizes the process that an end-user must pass through to configure an order details, following several consecutive steps.

```razor
@using IgniteUI.Blazor.Controls
@using System.Text.RegularExpressions

<div class="container vertical">
    <IgbSwitch Change="OnSwitchChange">Linear</IgbSwitch>
    <IgbStepper Name="stepper" @ref="stepper" Linear="@IsLinear">
        <IgbStep Invalid="@(IsLinear && (String.IsNullOrEmpty(user.FullName) || IsInvalidEmail(user.Email)))">
            <span slot="title">Personal Info</span>
            
            <IgbInput Required="true" DisplayType=InputType.Text Label="Full Name" @bind-Value="@user.FullName" @oninput="@(e => { user.FullName = e.Value.ToString(); })"></IgbInput>
            <IgbInput Required="true" DisplayType=InputType.Email Label="Email" @bind-Value="user.Email" @oninput="@(e => { user.Email = e.Value.ToString(); })"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next" Disabled="@(IsLinear && (String.IsNullOrEmpty(user.FullName) || IsInvalidEmail(user.Email)))">NEXT</IgbButton>
        </IgbStep>
        <IgbStep Invalid="@(IsLinear && (String.IsNullOrEmpty(user.City) || String.IsNullOrEmpty(user.Street)))">
            <span slot="title">Delivery address</span>
            
            <IgbInput Required="true" DisplayType=InputType.Text Label="City" @bind-Value="@user.City" @oninput="@(e => { user.City = e.Value.ToString(); })"></IgbInput>
            <IgbInput Required="true" DisplayType=InputType.Text Label="Street" @bind-Value="@user.Street" @oninput="@(e => { user.Street = e.Value.ToString(); })"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next" Disabled="@(IsLinear && (String.IsNullOrEmpty(user.City) || String.IsNullOrEmpty(user.Street)))">NEXT</IgbButton>
        </IgbStep>
        <IgbStep Optional="true">
            <span slot="title">Billing address</span>
            <span slot="subtitle">(optional)</span>            
            
            <IgbInput DisplayType=InputType.Text Label="City" @bind-Value="@user.City2" @oninput="@(e => { user.City2 = e.Value.ToString(); })"></IgbInput>
            <IgbInput DisplayType=InputType.Text Label="Street" @bind-Value="@user.Street2" @oninput="@(e => { user.Street2 = e.Value.ToString(); })"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>
        </IgbStep>
        <IgbStep Invalid="@(IsLinear && !IsValid)">
            <span slot="title">Payment</span>
                 
            <IgbRadioGroup>
                <IgbRadio name="payment" Required="true" Value="paypal" Change="OnPaymentChange">PayPal (n@mail.com; 18/02/2021)</IgbRadio>
                <IgbRadio name="payment" Required="true" Value="visa" Change="OnPaymentChange">Visa (**** **** **** 1234; 12/23)</IgbRadio>
                <IgbRadio name="payment" Required="true" Value="mastercard" Change="OnPaymentChange">MasterCard (**** **** **** 5678; 12/24)</IgbRadio>
            </IgbRadioGroup>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next" Disabled="@(IsLinear && !IsValid)">SUBMIT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Delivery status</span>
            <p>Your order is on its way. Expect delivery on 25th September 2021. Delivery address: San Jose, CA 94243.</p>
             <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
             <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Reset">RESET</IgbButton>
        </IgbStep>       
    </IgbStepper>
</div>

@code {
    public bool IsLinear { get; set; }
    public bool IsValid = false;

    private IgbStepper stepper;
    private StepperUserModel user = new StepperUserModel();


    public void OnSwitchChange(IgbCheckboxChangeEventArgs args)
    {
        IsLinear = args.Detail.Checked;
    }

    public void OnPaymentChange(IgbRadioChangeEventArgs args)
    {
        IsValid = args.Detail.Checked;
        if (IsValid)
        {
            user.Payment = (args.Parent as IgbRadio).Value.ToString();            
        }
    }

    public void Previous()
    {
        this.stepper.Prev();
    }

    public void Next()
    {
        this.stepper.Next();
    }

    public void Reset()
    {
        this.stepper.Reset();
    }    

    public bool IsInvalidEmail(string email)
    {
        string EmailPattern = @"^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|" + @"([-a-z0-9!#$%&'*+/=?^_`{|}~]|(?<!\.)\.)*)(?<!\.)" + @"@[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$"; 
        return String.IsNullOrEmpty(email) || !Regex.IsMatch(user.Email, EmailPattern, RegexOptions.IgnoreCase);
    }
}
```


<div class="divider--half"></div>

## Getting Started with Blazor Stepper

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbStepperModule)
);
```

<!-- Blazor -->

You will also need to link an additional CSS file to apply the styling to the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

Now you can start with a basic configuration of the Blazor [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) and its steps.

## How To Use Blazor Stepper

The [`IgbStep`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html) is the representation of every step that belongs to the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html). Steps provide [`Invalid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html#IgniteUI_Blazor_Controls_IgbStep_Invalid), [`Active`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html#IgniteUI_Blazor_Controls_IgbStep_Active), [`Optional`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html#IgniteUI_Blazor_Controls_IgbStep_Optional), [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html#IgniteUI_Blazor_Controls_IgbStep_Disabled) and [`Complete`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html#IgniteUI_Blazor_Controls_IgbStep_Complete) properties, which give you the ability to configure the step states according to your business requirement.

### Declaring Blazor Stepper

Steps can be declared using one of the following approaches.

- Iterating through a data set

```razor
<IgbStepper>
    @foreach (var item in this.StepsData)
    {
        <IgbStep Disabled="@item.Disabled">
          <p slot="title">@item.Title</p>
        </IgbStep>
    }
</IgbStepper>
```

- Creating static steps

```razor
<IgbStepper>
    <IgbStep>
       <p slot="title">Step 1</p>
    </IgbStep>
     <IgbStep>
       <p slot="title">Step 2</p>
    </IgbStep>
</IgbStepper>
```

For each step the user has the ability to configure indicator, title and subtitle using the `Indicator`, `Title` and `Subtitle` slots as follows:

> \[!Note]
> The `Default` [`IgbStep`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html) slot renders the content of the step.

```razor
<IgbStepper>
    <IgbStep>
       <IgbIcon slot="indicator" IconName="home" Collection="material" />
       <p slot="title">Home</p>
       <p slot="subtitle">Home Sub Title</p>
       <div>
          Step Content
          ...
       </div>
    </IgbStep>
</IgbStepper>
```

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 500px" src="../../images/stepper/stepper-step.png" alt="stepper-step"/>

### Orientation in Blazor Stepper

You can customize the stepper orientation through the exposed [`Orientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_Orientation) property. It could be set to **horizontal** **(default value)** or **vertical**.

**Horizontal Stepper Orientation**

**horizontal**is the default value for the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) orientation property.
When the Blazor stepper is horizontally orientated you have the opportunity to determine whether the steps’ content would be displayed above or below the steps’ headers. This could be achieved by setting the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) [`ContentTop`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_ContentTop) boolean property, which default value is **false**. In case it is enabled the steps’ content would be displayed above the steps’ headers.

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 800px"  src="../../images/stepper/stepper-contentTop.png" alt="stepper-contentTop" />

**Vertical Stepper Orientation**

You can easily switch from the horizontal to vertical layout. In order to change the default orientation you should set the [`Orientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_Orientation) property to **vertical**.

The sample below demonstrates how stepper orientation and titles position could be changed runtime.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
   <div class="radio-groups">
        <div class="radio-group">
            <label>Title position</label>
            <div class="radio-group-container">
                <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
                    <IgbRadio name="alignment" Value="top" Change="onTitlePositionChange">Top</IgbRadio>
                    <IgbRadio name="alignment" Value="bottom" Change="onTitlePositionChange">Bottom</IgbRadio>
                    <IgbRadio name="alignment" Value="start" Change="onTitlePositionChange">Start</IgbRadio>
                    <IgbRadio name="alignment" Value="end" Change="onTitlePositionChange">End</IgbRadio>
                    <IgbRadio name="alignment" Value="" Checked="true" Change="onTitlePositionChange">Default</IgbRadio>
                </IgbRadioGroup>
            </div>
        </div>

        <div class="radio-group">
            <label>Orientation</label>
            <div class="radio-group-container">
                <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
                    <IgbRadio name="orientation" Value="horizontal" Checked="true" Change="onOrientationChange">Horizontal</IgbRadio>
                    <IgbRadio name="orientation" Value="vertical" Change="onOrientationChange">Vertical</IgbRadio>
                </IgbRadioGroup>
            </div>
        </div>
   </div>

   <IgbStepper Name="stepper" @ref="stepper" Orientation="@Orientation">
        <IgbStep>
            <span slot="title">Order</span>
             <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>
           
        </IgbStep>
        <IgbStep>
            <span slot="title">Payment</span>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>  
        </IgbStep>
        <IgbStep>
            <span slot="title">Confirmation</span>            
                 <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
                 <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Reset">RESET</IgbButton>
        </IgbStep>          
    </IgbStepper>
</div>

@code {
    public IgbStepper stepper;
    public StepperOrientation Orientation = StepperOrientation.Horizontal;
    public StepperTitlePosition TitlePosition;

    private bool IsDefaultTitlePosition;

    public void onTitlePositionChange(IgbRadioChangeEventArgs args)
    {
        if(args.Detail.Checked)
        {
            string value = (args.Parent as IgbRadio).Value.ToString();
            if (String.IsNullOrEmpty(value))
            {
                IsDefaultTitlePosition = true;
                setDefaultTitleOrientation(stepper.Orientation);

            } else
            {
                IsDefaultTitlePosition = false;
                stepper.TitlePosition = (StepperTitlePosition)System.Enum.Parse(typeof(StepperTitlePosition), value, true);                
            }
        }
    }

    public void onOrientationChange(IgbRadioChangeEventArgs args)
    {
        if(args.Detail.Checked)
        {
            string value = (args.Parent as IgbRadio).Value.ToString();          
            Orientation = (StepperOrientation)System.Enum.Parse(typeof(StepperOrientation), value, true);

            if (IsDefaultTitlePosition)
                setDefaultTitleOrientation(Orientation);

        }
    }

    public void Previous()
    {
        this.stepper.Prev();
    }

    public void Next()
    {
        this.stepper.Next();
    }

    public void Reset()
    {
        this.stepper.Reset();
    }

    private void setDefaultTitleOrientation(StepperOrientation orientation)
    {
        if( orientation == StepperOrientation.Horizontal )
        {
            stepper.TitlePosition = StepperTitlePosition.Bottom;
        } else {
            stepper.TitlePosition = StepperTitlePosition.End;
        }
    }
}
```


<div class="divider--half"></div>

### Step States

Blazor [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) supports five steps states and each of them apply different styles by default:

- **active** - Determines whether the step is the currently displayed. By design, if the user does not explicitly set some step’s active attribute to **true**, the initial active step would be the first non-disabled step.
- **disabled** - Determines whether the step is intractable. By default, the disabled attribute of a step is set to **false**.
- **invalid** - Determines whether the step is valid. Based on its value it is decided whether the user will have the ability to move forward in linear stepper mode. Its default value is **false**.
- **optional** - By default, the optional attribute of a step is set to **false**. If validity of a step in linear stepper is not required, then the optional attribute can be enabled in order to be able to move forward independently from the step validity.
- **complete** - By default, the complete attribute of a step returns **false**. The user, however, can override this default complete behavior by setting the complete attribute as needed. When step is marked as complete not only that the style of the step header is changed by default, but also the style of the progress line between the completed step and the next one.

### Linear Blazor Stepper

The Blazor [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) gives you the opportunity to set its steps flow using the [`Linear`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_Linear) property. By default, linear is set to **false** and the user is enabled to select any non-disabled step in the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html).

```razor
<IgbStepper Linear="true">
    <IgbStep>
       <p slot="title">Step 1</p>
    </IgbStep>
     <IgbStep>
       <p slot="title">Step 2</p>
    </IgbStep>
</IgbStepper>
```

When the linear property is set to **true**, the stepper will require the current non-optional step to be valid before proceeding to the next one.

If the current non-optional step is not valid you cannot go forward to the next step until you validate the current one.

> \[!Note]
> Optional steps validity is not taken into account in order to move forward.

### Step Interactions

[`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) provides the following API methods for step interactions:

- **navigateTo** – activates the step by given index.
- **next** - activates the next non-disabled step.
- **prev** – activates the previous non-disabled step.
- **reset** – resets the stepper to its initial state.

> \[!Note]
> The reset method would reset the stepper to its initial state, i.e. activates the first step. It would not clear the step\`s content. This should be done manually.

### Customizing the Steps

The Ignite UI for Blazor Stepper gives you the ability to configure different options for titles, indicators and more.

This could be achieved through the [`StepType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_StepType) property of the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html). It takes the following values:

- Full **(default value)**
- Indicator
- Title

**full**

If titles and subtitles are defined, with this setup both indicators and titles would be rendered.

The user would also have the ability to define the position of the title for the steps, so it could be placed before, after, above or below the step indicator.
The user can configure the title position using the [`TitlePosition`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_TitlePosition) property. It takes the following values:

- undefined **(default value)**
- end
- start
- bottom
- top

When the Blazor [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) is horizontally orientated and the title position **is not defined**, the titles would be displayed **below** the indicators.

When the orientation is set to vertical and the title position **is not defined**, the titles would be displayed **after** the indicators.

> \[!Note]
> **titlePosition** property is applicable **only** when the stepper stepType property is set to **full**.

**indicator**

If you want to display only indicators for the steps, set the stepType option to **indicator**.

The step indicator supports any content, however with the restriction that its size would be always **24 pixels**. Having this in mind, we recommend using [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html) or [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html) as step indicators.

**Title**

If you want to display only titles for the steps, set the stepType option to **title**.

In this way if subtitles are defined, they will also be rendered below the step title.

> \[!Note]
> This container could be re-templated as per your requirement without any size restrictions. For example, you could add an indicator with size greater than 24 pixels inside it.

The sample below demonstrates all exposed step types and how they could be changed:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">   
   <label>Step type</label>
   <div class="radio-group-container">
        <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
            <IgbRadio name="type" Value="indicator" Change="onStepTypeChange">Indicator</IgbRadio>
            <IgbRadio name="type" Value="title" Change="onStepTypeChange">Title</IgbRadio>
            <IgbRadio name="type" Value="full" Checked="true" Change="onStepTypeChange">Full</IgbRadio>
        </IgbRadioGroup>
   </div>  

   <IgbStepper Name="stepper" @ref="stepper">
        <IgbStep>
            <span slot="title">Pricing Plan</span>
        </IgbStep>
        <IgbStep>
            <span slot="title">Car Details</span>
        </IgbStep>
        <IgbStep>
            <span slot="title">Payment</span>            
        </IgbStep>          
   </IgbStepper>
</div>

@code {
    public IgbStepper stepper;

    public void onStepTypeChange(IgbRadioChangeEventArgs args)
    {
        if(args.Detail.Checked)
        {
            string value = (args.Parent as IgbRadio).Value.ToString();           
            stepper.StepType = (StepperStepType)System.Enum.Parse(typeof(StepperStepType), value, true); 
        }
    }
}
```


<div class="divider--half"></div>

### Stepper Animations

The Blazor [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) Animations provide the end-users with a beautiful experience interacting with the defined steps. The available animation options differ depending on the orientation of the stepper.

When the stepper is horizontally orientated, it is configured to use the `slide` animation by default. It also supports `fade` as an alternative. The animations are configured through the [`HorizontalAnimation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_HorizontalAnimation) input.

In a vertically orientated layout, the animation type could be defined using the [`VerticalAnimation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html#IgniteUI_Blazor_Controls_IgbStepper_VerticalAnimation) property. By default, its value is set to `grow` and the user has the ability to set it to `fade` as well.

Setting `none` to both animation type inputs disables stepper animations.

The [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) component also gives you the ability to configure the duration of the transition between the steps. This could be achieved through the `animationDuration` property, which takes a number as an argument and it is common to both orientations. The default value is set to 320ms.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <article class="settings">
        <IgbSelect Label="Orienation" Change="OrientationChange">
            <IgbSelectItem Value="Horizontal" Selected="true">Horizontal</IgbSelectItem>
            <IgbSelectItem Value="Vertical">Vertical</IgbSelectItem>
        </IgbSelect>
        <IgbSelect Label="Vertical Animation" Change="VerticalAnimationChange">
            <IgbSelectItem Value="Grow" Selected="true">Grow</IgbSelectItem>
            <IgbSelectItem Value="Fade">Fade</IgbSelectItem>
            <IgbSelectItem Value="None">None</IgbSelectItem>
        </IgbSelect>
        <IgbSelect Label="Horizontal Animation" Change="HorizontalAnimationChange">
            <IgbSelectItem Value="Slide" Selected="true">Slide</IgbSelectItem>
            <IgbSelectItem Value="Fade">Fade</IgbSelectItem>
            <IgbSelectItem Value="None">None</IgbSelectItem>
        </IgbSelect>
        <IgbInput DisplayType=InputType.Number Value="320" Label="Duration" Change="AnimationDurationChange">
            <span slot="suffix">ms</span>
        </IgbInput>
    </article>
    <IgbStepper @ref="stepper">
        <IgbStep>
            <span slot="title">Personal Info</span>
            <IgbInput DisplayType=InputType.Text Label="Full Name"></IgbInput>
            <IgbInput DisplayType=InputType.Email Label="Email"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Delivery address</span>
            <IgbInput DisplayType=InputType.Text Label="City"></IgbInput>
            <IgbInput DisplayType=InputType.Text Label="Street"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Payment</span>
            <IgbRadioGroup>
                <IgbRadio name="payment" Value="paypal" Checked="true">PayPal (n@mail.com; 18/02/2021)</IgbRadio>
                <IgbRadio name="payment" Value="visa">Visa (**** **** **** 1234; 12/23)</IgbRadio>
                <IgbRadio name="payment" Value="mastercard">MasterCard (**** **** **** 5678; 12/24)</IgbRadio>
            </IgbRadioGroup>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">SUBMIT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Delivery status</span>
            <p>Your order is on its way. Expect delivery on 25th September 2021. Delivery address: San Jose, CA 94243.</p>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Reset">RESET</IgbButton>
        </IgbStep>
    </IgbStepper>
</div>

@code {
    private IgbStepper stepper;

    public void Previous()
    {
        this.stepper.Prev();
    }

    public void Next()
    {
        this.stepper.Next();
    }

    public void Reset()
    {
        this.stepper.Reset();
    }

    public void OrientationChange(IgbSelectItemComponentEventArgs args)
    {
        StepperOrientation orientation = Enum.Parse<StepperOrientation>(args.Detail.Value);
        this.stepper.Orientation = orientation;
    }

    public void VerticalAnimationChange(IgbSelectItemComponentEventArgs args)
    {
        StepperVerticalAnimation animation = Enum.Parse<StepperVerticalAnimation>(args.Detail.Value);
        this.stepper.VerticalAnimation = animation;
    }

    public void HorizontalAnimationChange(IgbSelectItemComponentEventArgs args)
    {
        HorizontalTransitionAnimation animation = Enum.Parse<HorizontalTransitionAnimation>(args.Detail.Value);
        this.stepper.HorizontalAnimation = animation;
    }

    public void AnimationDurationChange(IgbComponentValueChangedEventArgs args)
    {
        double duration;
        double.TryParse(args.Detail.ToString(), out duration);
        this.stepper.AnimationDuration = duration;
    }
}
```


<div class="divider--half"></div>

## Keyboard Navigation

The Ignite UI for Blazor Stepper provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the steps.
The Blazor [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) navigation is compliant with [W3 accessability standards](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/) and convenient to use.

**Key Combinations**

- <kbd>TAB</kbd> - moves the focus to the next tabbable element
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - moves the focus to the previous tabbable element
- <kbd>↓</kbd> - moves the focus to the header of the next accessible step when the stepper is **vertically orientated**
- <kbd>↑</kbd> - moves the focus to the header of the previous accessible step when the stepper is **vertically orientated**
- <kbd>←</kbd> - moves the focus to the header of the previous accessible step in both orientations
- <kbd>→</kbd> - moves the focus to the header of the next accessible step in both orientations
- <kbd>HOME</kbd> - moves the focus to the header of the FIRST enabled step in the stepper
- <kbd>END</kbd> - moves the focus to the header of the LAST enabled step in the stepper
- <kbd>ENTER</kbd> or <kbd>SPACE</kbd> - activates the currently focused step

## Styling Blazor Stepper

You can change the appearance of the [`IgbStep`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html), by using some of the exposed CSS parts listed below:

| Part name | Description |
| ---------|------------ |
| `header-container` | Wrapper of the step's header and its separators. |
| `disabled` | Indicates a disabled state. Applies to header-container. |
| `complete-start` | Indicates a complete state of the current step. Applies to header-container. |
| `complete-end` | Indicates a complete state of the previous step. Applies to header-container. |
| `optional` | Indicates an optional state. Applies to header-container. |
| `invalid` | Indicates an invalid state. Applies to header-container. |
| `top` | Indicates that the title should be above the indicator. Applies to header-container. |
| `bottom` | Indicates that the title should be below the indicator. Applies to header-container. |
| `start` | Indicates that the title should be before the indicator. Applies to header-container. |
| `end` | Indicates that the title should be after the indicator. Applies to header-container. |
| `header` | Wrapper of the step's indicator and text. |
| `indicator` | The indicator of the step. |
| `text` | Wrapper of the step's title and subtitle. |
| `empty` | Indicates that no title and subtitle has been provided to the step. Applies to text. |
| `title` | The title of the step. |
| `subtitle` | The subtitle of the step. |
| `body` | Wrapper of the step's content. |
| `content` | The steps content. |

Using these CSS parts we can customize thе appearance of the [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html) component like this:

```css
igc-step::part(title) {
  color: var(--ig-primary-500);
}
igc-step[active]::part(indicator) {
  background-color: var(--ig-primary-500);
}
igc-step::part(indicator) {
  background-color: var(--ig-surface-500);
}
```

<!-- React,Blazor -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <article class="settings">
        <IgbSelect Label="Orienation" Change="OrientationChange">
            <IgbSelectItem Value="Horizontal" Selected="true">Horizontal</IgbSelectItem>
            <IgbSelectItem Value="Vertical">Vertical</IgbSelectItem>
        </IgbSelect>
        <IgbSelect Label="Vertical Animation" Change="VerticalAnimationChange">
            <IgbSelectItem Value="Grow" Selected="true">Grow</IgbSelectItem>
            <IgbSelectItem Value="Fade">Fade</IgbSelectItem>
            <IgbSelectItem Value="None">None</IgbSelectItem>
        </IgbSelect>
        <IgbSelect Label="Horizontal Animation" Change="HorizontalAnimationChange">
            <IgbSelectItem Value="Slide" Selected="true">Slide</IgbSelectItem>
            <IgbSelectItem Value="Fade">Fade</IgbSelectItem>
            <IgbSelectItem Value="None">None</IgbSelectItem>
        </IgbSelect>
        <IgbInput DisplayType=InputType.Number Value="320" Label="Duration" Change="AnimationDurationChange">
            <span slot="suffix">ms</span>
        </IgbInput>
    </article>
    <IgbStepper @ref="stepper">
        <IgbStep>
            <span slot="title">Personal Info</span>
            <IgbInput DisplayType=InputType.Text Label="Full Name"></IgbInput>
            <IgbInput DisplayType=InputType.Email Label="Email"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Delivery address</span>
            <IgbInput DisplayType=InputType.Text Label="City"></IgbInput>
            <IgbInput DisplayType=InputType.Text Label="Street"></IgbInput>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">NEXT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Payment</span>
            <IgbRadioGroup>
                <IgbRadio name="payment" Value="paypal" Checked="true">PayPal (n@mail.com; 18/02/2021)</IgbRadio>
                <IgbRadio name="payment" Value="visa">Visa (**** **** **** 1234; 12/23)</IgbRadio>
                <IgbRadio name="payment" Value="mastercard">MasterCard (**** **** **** 5678; 12/24)</IgbRadio>
            </IgbRadioGroup>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Next">SUBMIT</IgbButton>
        </IgbStep>
        <IgbStep>
            <span slot="title">Delivery status</span>
            <p>Your order is on its way. Expect delivery on 25th September 2021. Delivery address: San Jose, CA 94243.</p>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Previous">PREVIOUS</IgbButton>
            <IgbButton DisplayType="ButtonBaseType.Button" @onclick="Reset">RESET</IgbButton>
        </IgbStep>
    </IgbStepper>
</div>

@code {
    private IgbStepper stepper;

    public void Previous()
    {
        this.stepper.Prev();
    }

    public void Next()
    {
        this.stepper.Next();
    }

    public void Reset()
    {
        this.stepper.Reset();
    }

    public void OrientationChange(IgbSelectItemComponentEventArgs args)
    {
        StepperOrientation orientation = Enum.Parse<StepperOrientation>(args.Detail.Value);
        this.stepper.Orientation = orientation;
    }

    public void VerticalAnimationChange(IgbSelectItemComponentEventArgs args)
    {
        StepperVerticalAnimation animation = Enum.Parse<StepperVerticalAnimation>(args.Detail.Value);
        this.stepper.VerticalAnimation = animation;
    }

    public void HorizontalAnimationChange(IgbSelectItemComponentEventArgs args)
    {
        HorizontalTransitionAnimation animation = Enum.Parse<HorizontalTransitionAnimation>(args.Detail.Value);
        this.stepper.HorizontalAnimation = animation;
    }

    public void AnimationDurationChange(IgbComponentValueChangedEventArgs args)
    {
        double duration;
        double.TryParse(args.Detail.ToString(), out duration);
        this.stepper.AnimationDuration = duration;
    }
}
```


<!-- end: React,Blazor -->

<div class="divider--half"></div>

## API References

- [`IgbStepper`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStepper.html)
- [`IgbStep`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbStep.html)
- [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)
