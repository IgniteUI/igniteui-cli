---
title: Angular Stepper Component – Ignite UI for Angular - MIT license 
_description: Use the Angular Stepper component to visualize content as a process and show its progress by dividing the content into logical steps. Learn how to do it.
_keywords: Angular Stepper component, Angular Wizard Component, Angular Stepper Control, Angular Wizard Control, Angular UI Components, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Infragistics
_license: MIT
_tocName: Stepper
---

# Angular Stepper Component Overview

The Ignite UI for Angular Stepper is a highly customizable component that visualizes content as a process and shows its progress by dividing the content into successive steps. It appears as a vertical or horizontal line. Provided by the Ignite UI for [Angular Component library](https://www.infragistics.com/products/ignite-ui-angular), the stepper component delivers a wizard-like workflow and multiple features like step validation, styling, orientation and keyboard navigation.


## Angular Stepper Example

In this Angular Stepper example, you can see how users are given the opportunity to customize their credit card and they pass trough the process in five logical steps - selecting card type, adding business information, filling in personal information, providing shipping details and confirmation.
Note that the fourth step in our Angular stepper demo gets enabled only if the user ticks the checkbox in the second step, signifying that their mailing address is different from the business physical address.

```typescript
import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IgxStepComponent, IgxStepContentDirective, IgxStepTitleDirective, IgxStepperComponent } from 'igniteui-angular/stepper';
import { IgxCardComponent, IgxCardContentDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxButtonDirective, IgxMaskDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { NgClass, DatePipe } from '@angular/common';

@Component({
    selector: 'app-stepper-overview-sample',
    styleUrls: ['./stepper-overview-sample.component.scss'],
    templateUrl: './stepper-overview-sample.component.html',
    imports: [IgxStepperComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, IgxBadgeComponent, IgxCardComponent, NgClass, IgxCardMediaDirective, IgxCardContentDirective, FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSelectComponent, IgxSelectItemComponent, IgxMaskDirective, IgxCheckboxComponent, IgxHintDirective, IgxRadioGroupDirective, IgxRadioComponent, IgxButtonDirective, IgxIconComponent, DatePipe]
})
export class StepperOverviewSampleComponent {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('stepper', { static: true })
    public stepper: IgxStepperComponent;

    public today: Date = new Date();

    public cards: any[] = [
        {
            img: 'assets/images/stepper/card-gold.png',
            price: 400,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Customized Advanced',
            description: 'Cash Mastercard'
        },
        {
            img: 'assets/images/stepper/card-red.png',
            price: 600,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Travel Advanced',
            description: 'World Mastercard'
        },
        {
            img: 'assets/images/stepper/card-blue.png',
            price: 500,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Golden',
            description: 'World Mastercard'
        }
    ];

    public states: string[] = [
        'Alabama', 'Arizona', 'California', 'Colorado', 'Florida',
        'Georgia', 'Hawaii', 'Illinois', 'Louisiana', 'Minnesota',
        'Nevada', 'New York', 'New Jersey', 'Ohio', 'Texas', 'Virginia', 'Washington'
    ];

    public selectedCard: any;

    public businessInformation: any = {
        name: '',
        physicalAddress: '',
        city: '',
        state: '',
        zip: null,
        taxIdNumber: null,
        differentAddress: false,
        nonUSBusinessActivity: null
    };

    public personalInformation: any = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        phoneNumber: '',
        email: '',
        authorization: false,
        agreementAccepted: false
    };

    public shippingDetails: any = {
        firstName: '',
        lastName: '',
        mailingAddress: '',
        city: '',
        state: '',
        zip: null
    };

    public selectCard(card: any): void {
        this.selectedCard = card;
        this.cdr.detectChanges();
        this.stepper.next();
    }

    public resetStepper(form1: NgForm, form2: NgForm, form3: NgForm): void {
        this.stepper.reset();
        this.selectedCard = null;
        form1.reset();
        this.businessInformation.differentAddress = false;
        form2.reset();
        this.personalInformation.authorization = false;
        this.personalInformation.agreementAccepted = false;
        form3.reset();
    }

    public handleKeyDown(evt: KeyboardEvent, card: any): void {
        if (evt.key.toLowerCase() === ' ' || evt.key.toLowerCase() === 'spacebar' || evt.key.toLowerCase() === 'space') {
            this.selectCard(card);
        }
    }
}
```
```html
<igx-stepper #stepper [linear]="true">

  <igx-step #step1 [isValid]="!!selectedCard" [completed]="!!selectedCard">
    <span igxStepTitle>Card Type</span>
    <div igxStepContent [tabIndex]="-1">
      <h2 class="sample-step-title">Choose your business credit card</h2>
      <div class="card-wrapper">
        @for (card of cards; track card) {
          <igx-card (click)="selectCard(card)"
            [ngClass]="{'selected-card': selectedCard === card}" [tabIndex]="0"
            (keydown)="handleKeyDown($event, card)" elevated>
            @if (selectedCard === card) {
              <igx-badge value="Your current choice"></igx-badge>
            }
            <igx-card-media>
              <img src="{{card.img}}" alt="">
            </igx-card-media>
            <igx-card-content>
              <span class="card-currency">{{card.price}}</span>
              <span class="card-title">{{card.offer}}</span>
              <p>{{card.type}}</p>
              <p>{{card.description}}</p>
            </igx-card-content>
          </igx-card>
        }
      </div>
    </div>
  </igx-step>

  <igx-step #step2 [isValid]="businessInformationForm.form.valid" [completed]="businessInformationForm.form.valid">
    <span igxStepTitle>Business information</span>
    <div igxStepContent [tabIndex]="-1">
      <div class="sample-row">
        <form class="flex-form" #businessInformationForm="ngForm">
          <igx-input-group type="box">
            <input igxInput name="name" id="name" type="text" [(ngModel)]="businessInformation.name"
              required />
              <label igxLabel for="name">Legal Business Name</label>
            </igx-input-group>
            <igx-input-group type="box">
              <input igxInput name="physicalAddress" id="physicalAddress" type="text"
                [(ngModel)]="businessInformation.physicalAddress" required />
                <label igxLabel for="physicalAddress">Business Physical Address</label>
              </igx-input-group>
              <div class="form-row">
                <igx-input-group type="box">
                  <input igxInput name="city" id="city" type="text" [(ngModel)]="businessInformation.city"
                    required />
                    <label igxLabel for="city">City</label>
                  </igx-input-group>
                  <igx-select type="box" name="state" [(ngModel)]="businessInformation.state" required>
                    @for (state of states; track state) {
                      <igx-select-item [value]="state">
                        {{state}}
                      </igx-select-item>
                    }
                    <label igxLabel>State</label>
                  </igx-select>
                  <igx-input-group type="box">
                    <input igxInput name="zip" id="zip" type="text" pattern="[0-9]{5}" [igxMask]="'00000'"
                      [placeholder]="'#####'" [(ngModel)]="businessInformation.zip" required />
                      <label igxLabel for="zip">ZIP Code</label>
                    </igx-input-group>
                  </div>
                  <igx-checkbox name="differentAddress" [(ngModel)]="businessInformation.differentAddress">
                    The mailing address is different than the business physical address
                  </igx-checkbox>
                  <igx-input-group type="box">
                    <input igxInput name="taxIdNumber" id="taxIdNumber" type="text" pattern="[9]{1}[0-9]{8}"
                      [placeholder]="'9##-##-####'" [igxMask]="'000-00-0000'"
                      [(ngModel)]="businessInformation.taxIdNumber" required />
                      @if (!businessInformationForm.controls['taxIdNumber']?.pristine
                        && !businessInformationForm.controls['taxIdNumber']?.valid) {
                        <igx-hint>
                          The Federal Tax ID Number should begin with 9
                        </igx-hint>
                      }
                      <label igxLabel for="taxIdNumber">Federal Tax ID Number</label>
                    </igx-input-group>
                    <p>Does this business operate outside the United States? <span class="sample-required">*</span></p>
                    <igx-radio-group type="box" name="nonUSBusinessActivity" alignment="vertical"
                      [(ngModel)]="businessInformation.nonUSBusinessActivity" required>
                      <igx-radio class="radio-sample" value="true">
                        Yes
                      </igx-radio>
                      <igx-radio class="radio-sample" value="false">
                        No
                      </igx-radio>
                    </igx-radio-group>
                  </form>
                  @if (selectedCard) {
                    <igx-card >
                      <igx-card-content>
                        <div class="sample-row sample-card">
                          <img src="{{selectedCard.img}}" alt="">
                          <div>
                            <span class="card-currency">{{selectedCard.price}}</span>
                            <span class="card-title">{{selectedCard.offer}}</span>
                            <p>{{selectedCard.type}}</p>
                            <p>{{selectedCard.description}}</p>
                          </div>
                        </div>
                      </igx-card-content>
                    </igx-card>
                  }
                </div>
                <div class="sample-step-actions">
                  <button igxButton="contained" (click)="stepper.prev()">Back</button>
                  <button igxButton="contained" (click)="stepper.next()"
                  [disabled]="!businessInformationForm.form.valid">Continue</button>
                </div>
              </div>
            </igx-step>

            <igx-step #step3 [isValid]="personalInformationForm.form.valid" [completed]="personalInformationForm.form.valid">
              <span igxStepTitle>Personal Information</span>
              <div igxStepContent [tabIndex]="-1">
                <div class="sample-row">
                  <form class="flex-form" #personalInformationForm="ngForm">
                    <igx-input-group type="box">
                      <input igxInput name="firstName" id="firstName" type="text"
                        [(ngModel)]="personalInformation.firstName" required />
                        <label igxLabel for="firstName">First Name</label>
                      </igx-input-group>
                      <igx-input-group type="box">
                        <input igxInput name="lastName" id="lastName" type="text"
                          [(ngModel)]="personalInformation.lastName" required />
                          <label igxLabel for="lastName">Last Name</label>
                        </igx-input-group>
                        <igx-input-group type="box">
                          <input igxInput name="jobTitle" id="jobTitle" type="text"
                            [(ngModel)]="personalInformation.jobTitle" required />
                            <label igxLabel for="jobTitle">Job Title</label>
                          </igx-input-group>
                          <igx-input-group type="box">
                            <input igxInput name="phoneNumber" id="phoneNumber" type="text"
                              [(ngModel)]="personalInformation.phoneNumber" required />
                              <label igxLabel for="phoneNumber">Phone Number</label>
                            </igx-input-group>
                            <igx-input-group type="box">
                              <input igxInput name="email" id="email" type="email" [(ngModel)]="personalInformation.email"
                                required email />
                                <label igxLabel for="email">Email Address</label>
                              </igx-input-group>
                              <igx-checkbox name="authorization" [(ngModel)]="personalInformation.authorization" required>
                                I confirm that I am authorized to borrow on behalf of this business. <span
                              class="sample-required">*</span>
                            </igx-checkbox>
                            <div class="sample-terms">
                              <igx-checkbox name="agreementAccepted" [(ngModel)]="personalInformation.agreementAccepted"
                                required>
                                I agree with the<span class="sample-required">*</span>
                              </igx-checkbox>
                              <a (click)="$event.stopPropagation()">Terms and Conditions</a>
                            </div>
                          </form>
                          @if (selectedCard) {
                            <igx-card >
                              <igx-card-content>
                                <div class="sample-row sample-card">
                                  <img src="{{selectedCard.img}}" alt="">
                                  <div>
                                    <span class="card-currency">{{selectedCard.price}}</span>
                                    <span class="card-title">{{selectedCard.offer}}</span>
                                    <p>{{selectedCard.type}}</p>
                                    <p>{{selectedCard.description}}</p>
                                  </div>
                                </div>
                              </igx-card-content>
                            </igx-card>
                          }
                        </div>
                        <div class="sample-step-actions">
                          <button igxButton="contained" (click)="stepper.prev()">Back</button>
                          <button igxButton="contained" (click)="stepper.next()"
                          [disabled]="!personalInformationForm.form.valid">Continue</button>
                        </div>
                      </div>
                    </igx-step>

                    <igx-step #step4 [disabled]="!businessInformation.differentAddress" [isValid]="shippingDetailsForm.form.valid"
                      [completed]="shippingDetailsForm.form.valid || (!businessInformation.differentAddress && step3.completed)">
                      <span igxStepTitle>Shipping Details</span>
                      <div igxStepContent [tabIndex]="-1">
                        <div class="sample-row">
                          <form class="flex-form" #shippingDetailsForm="ngForm">
                            <igx-input-group type="box">
                              <input igxInput name="sfirstName" id="sfirstName" type="text"
                                [(ngModel)]="shippingDetails.firstName" required />
                                <label igxLabel for="sfirstName">First Name</label>
                              </igx-input-group>
                              <igx-input-group type="box">
                                <input igxInput name="slastName" id="slastName" type="text"
                                  [(ngModel)]="shippingDetails.lastName" required />
                                  <label igxLabel for="slastName">Last Name</label>
                                </igx-input-group>
                                <igx-input-group type="box">
                                  <input igxInput name="mailingAddress" type="text" [(ngModel)]="shippingDetails.mailingAddress"
                                    required />
                                    <label igxLabel for="mailingAddress" id="mailingAddress">Mailing Address</label>
                                  </igx-input-group>
                                  <div class="form-row">
                                    <igx-input-group type="box">
                                      <input igxInput name="scity" id="scity" type="text" [(ngModel)]="shippingDetails.city"
                                        required />
                                        <label igxLabel for="scity">City</label>
                                      </igx-input-group>
                                      <igx-select type="box" name="sstate" [(ngModel)]="shippingDetails.state" required>
                                        @for (state of states; track state) {
                                          <igx-select-item [value]="state">
                                            {{state}}
                                          </igx-select-item>
                                        }
                                        <label igxLabel>State</label>
                                      </igx-select>
                                      <igx-input-group type="box">
                                        <input igxInput name="szip" id="szip" type="text" pattern="[0-9]{5}" [placeholder]="'#####'"
                                          [igxMask]="'00000'" [(ngModel)]="shippingDetails.zip" required />
                                          <label igxLabel for="szip">ZIP Code</label>
                                        </igx-input-group>
                                      </div>
                                    </form>
                                    @if (selectedCard) {
                                      <igx-card >
                                        <igx-card-content>
                                          <div class="sample-row sample-card">
                                            <img src="{{selectedCard.img}}" alt="">
                                            <div>
                                              <span class="card-currency">{{selectedCard.price}}</span>
                                              <span class="card-title">{{selectedCard.offer}}</span>
                                              <p>{{selectedCard.type}}</p>
                                              <p>{{selectedCard.description}}</p>
                                            </div>
                                          </div>
                                        </igx-card-content>
                                      </igx-card>
                                    }
                                  </div>
                                  <div class="sample-step-actions">
                                    <button igxButton="contained" (click)="stepper.prev()">Back</button>
                                    <button igxButton="contained" (click)="stepper.next()"
                                    [disabled]="!shippingDetailsForm.form.valid">Continue</button>
                                  </div>
                                </div>
                              </igx-step>

                              <igx-step #step5>
                                <span igxStepTitle>Confirmation</span>
                                <div igxStepContent [tabIndex]="-1">
                                  <div class="success-message">
                                    <div class="success-marker">
                                      <igx-icon>check</igx-icon>
                                    </div>
                                    <div class="success-text">
                                      <h2 class="sample-step-title">Your application for a business credit card has been sent
                                      successfully!</h2>
                                      <p>We will contact you within a few days.</p>
                                    </div>
                                  </div>
                                  @if (selectedCard) {
                                    <igx-card class="sample-small-card" >
                                      <igx-card-content>
                                        <strong class="sample-date">Application date: {{ today | date:'d MMM y' }}</strong>
                                        <div class="sample-row sample-card">
                                          <img src="{{selectedCard.img}}" alt="">
                                          <div>
                                            <span class="card-currency">{{selectedCard.price}}</span>
                                            <span class="card-title">{{selectedCard.offer}}</span>
                                            <p>{{selectedCard.type}}</p>
                                            <p>{{selectedCard.description}}</p>
                                          </div>
                                        </div>
                                      </igx-card-content>
                                    </igx-card>
                                  }
                                  <div class="sample-step-actions">
                                    <button igxButton="contained"
                                    (click)="resetStepper(businessInformationForm, personalInformationForm, shippingDetailsForm)">Reset</button>
                                  </div>
                                </div>
                              </igx-step>

                            </igx-stepper>
```
```scss
@use '../../../../variables' as *;

$sample-gap: 20px;
:host {
	display: block;
	padding: $sample-gap;
	max-width: rem(1150px);

	p {
		margin: 0;
	}
}

.sample-step-actions,
.card-wrapper,
.sample-row,
.flex-form,
.form-row,
.success-message,
.success-text {
	display: flex;
}

.sample-row {
	align-items: flex-start;
	gap: rem(50px);

	> * {
		flex: 1;
	}
}

.sample-step-actions {
	gap: $sample-gap;
	margin-top: $sample-gap * 2;
}

.card-wrapper {
	gap: rem(30px);
}

$my-card: card-theme(
	$schema: $light-schema,
	$border-radius: rem(8px),
	$content-text-color: color($default-palette, 'gray', 900),
);

@include card($my-card);

.selected-card {
	border: 2px solid color($default-palette, 'primary', 400);
	position: relative;
	overflow: initial;

	igx-badge {
		position: absolute;
		top: rem(-11px);
		left: 0;
		right: 0;
		margin: 0 auto;
		content: 'Current choice';
		padding: rem(4px) rem(8px);
		max-width: 50%;
	}
}

.igx-card {
	cursor: pointer;
	user-select: none;
	min-width: 280px;

	&:focus {
		outline: none;
		box-shadow: inset 0 0 0 1px color($default-palette, 'primary', 400),
			0 5px 5px -3px rgba(0, 0, 0, 0.26),
			0 8px 10px 1px rgba(0, 0, 0, 0.12),
			0 3px 14px 2px rgba(0, 0, 0, 0.08);
	}
}

.sample-step-title {
	font-size: rem(20px);
	letter-spacing: 0;
	font-weight: 500;
	line-height: normal;
	margin-bottom: rem(24px);
}

.igx-card__media {
	max-width: rem(340px);
	padding: rem(30px) rem(30px) 0 rem(30px);
}

.igx-card-content {
	text-align: center;

	p {
		font-size: rem(16px);
		line-height: rem(24px);
	}

	padding: rem(30px);
}

.card-title {
	display: block;
	font-size: rem(14px);
	font-weight: 500;
	margin: 0 rem(8px);
	color: color($default-palette, 'secondary');
}

.card-currency {
	display: block;
	font-size: rem(48px);
	color: color($default-palette, 'secondary');
	margin-bottom: rem(8px);

	&::before {
		content: '$';
		font-size: rem(34px);
		margin-right: rem(6px);
		position: relative;
		top: rem(-12px);
	}
}

.flex-form,
.form-row {
	gap: rem(16px);
}

.flex-form {
	flex-direction: column;

	igx-checkbox {
		white-space: nowrap;
	}
}

.sample-card {
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	img {
		width: rem(180px);
		max-width: rem(300px);
		min-width: rem(130px);
	}

	.card-title {
		font-size: 12px;
		margin:0 rem(4px);
	}

	.card-currency {
		font-size: rem(36px);
		margin-bottom: rem(4px);

		&::before {
			font-size: rem(22px);
			margin-right: rem(4px);
		}
	}

	p {
		font-size: rem(14px);
		white-space: nowrap;
	}
}

.radio-sample {
	margin-bottom: rem(16px);
}

.success-marker {
	display:flex;
	align-items: center;
	justify-content: center;
	width: rem(30px);
	height: rem(30px);
	border-radius: rem(15px);
	background: color($default-palette, 'success');
	color: #fff;
	user-select: none;
}

.success-message {
	align-items: center;
	gap: rem(16px);
	margin-bottom: rem(32px);
}

.success-text {
	flex-direction: column;

	.sample-step-title {
		margin: 0;
	}
}

.sample-date {
	display: block;
	margin-bottom: rem(16px);
	text-align: left;
	font-weight: 500;
}

.sample-small-card {
	max-width: rem(500px);
}

.sample-terms {
	display: flex;
	align-items: center;
	justify-content: flex-start;

	> a {
		margin-left: rem(8px);
		color: color($default-palette, 'primary');
		text-decoration: none;

		&:hover {
			color: color($default-palette, 'primary', 600);
		}
	}
}

.sample-required {
	color: color($default-palette, 'error');
	margin-left: rem(2px);
}
```

<div class="divider--half"></div>

Here is the a sample demonstrating how to achieve the above functionality using Angular Reactive Forms.

```typescript
import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxStepComponent, IgxStepContentDirective, IgxStepTitleDirective, IgxStepperComponent } from 'igniteui-angular/stepper';
import { IgxCardComponent, IgxCardContentDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxButtonDirective, IgxMaskDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { NgClass, DatePipe } from '@angular/common';

export interface BusinessInformation{
    name: FormControl<string | null>,
    physicalAddress: FormControl<string | null>,
    city: FormControl<string | null>,
    state: FormControl<string[] | null>,
    zip: FormControl<number | null>,
    taxIdNumber: FormControl<number | null>,
    differentAddress: FormControl<boolean | null>,
    nonUSBusinessActivity: FormControl<boolean | null>
}

export interface PersonalInformation{
    firstName: FormControl<string | null>,
    lastName: FormControl<string | null>,
    jobTitle: FormControl<string | null>,
    phoneNumber: FormControl<number | null>,
    email: FormControl<string | null>,
    authorization: FormControl<boolean | null>,
    agreementAccepted: FormControl<boolean | null>
}

export interface ShippingDetails{
    sfirstName: FormControl<string | null>,
    slastName: FormControl<string | null>,
    smailingAddress: FormControl<string | null>,
    scity: FormControl<string | null>,
    sstate: FormControl<string[] | null>,
    szip: FormControl<number | null>
}

@Component({
    selector: 'app-stepper-sample-reactive-forms',
    styleUrls: ['./stepper-sample-reactive-forms.component.scss'],
    templateUrl: './stepper-sample-reactive-forms.component.html',
    imports: [IgxStepperComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, IgxBadgeComponent, IgxCardComponent, NgClass, IgxCardMediaDirective, IgxCardContentDirective, FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSelectComponent, IgxSelectItemComponent, IgxMaskDirective, IgxCheckboxComponent, IgxHintDirective, IgxRadioGroupDirective, IgxRadioComponent, IgxButtonDirective, IgxIconComponent, DatePipe]
})
export class StepperSampleReactiveFormsComponent {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('stepper', { static: true })
    public stepper: IgxStepperComponent;

    public today: Date = new Date();

    public cards: any[] = [
        {
            img: 'assets/images/stepper/card-gold.png',
            price: 400,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Customized Advanced',
            description: 'Cash Mastercard'
        },
        {
            img: 'assets/images/stepper/card-red.png',
            price: 600,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Travel Advanced',
            description: 'World Mastercard'
        },
        {
            img: 'assets/images/stepper/card-blue.png',
            price: 500,
            offer: 'STATEMENT CREDIT OFFER',
            type: 'Business Golden',
            description: 'World Mastercard'
        }
    ];

    public states: string[] = [
        'Alabama', 'Arizona', 'California', 'Colorado', 'Florida',
        'Georgia', 'Hawaii', 'Illinois', 'Louisiana', 'Minnesota',
        'Nevada', 'New York', 'New Jersey', 'Ohio', 'Texas', 'Virginia', 'Washington'
    ];
    public selectedCard: any;

    public businessInformation:FormGroup<BusinessInformation>;
    public personalInformation:FormGroup<PersonalInformation>;
    public shippingDetails:FormGroup<ShippingDetails>;

    constructor() {
        this.businessInformation = new FormGroup<BusinessInformation>({
            name: new FormControl('', Validators.required),
            physicalAddress: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            state: new FormControl(this.states, Validators.required),
            zip: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{5}")]),
            taxIdNumber: new FormControl(null, [Validators.required,Validators.pattern("[9]{1}[0-9]{8}")]),
            differentAddress: new FormControl(false, Validators.required),
            nonUSBusinessActivity: new FormControl(null, Validators.required)
        })

        this.personalInformation = new FormGroup<PersonalInformation>({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            jobTitle: new FormControl('', Validators.required),
            phoneNumber: new FormControl(null, Validators.required),
            email: new FormControl('', Validators.required),
            authorization: new FormControl(false, Validators.requiredTrue),
            agreementAccepted: new FormControl(false, Validators.requiredTrue)
        })

        this.shippingDetails = new FormGroup<ShippingDetails>({
            sfirstName: new FormControl('', Validators.required),
            slastName: new FormControl('', Validators.required),
            smailingAddress: new FormControl('', Validators.required),
            scity: new FormControl('', Validators.required),
            sstate: new FormControl(this.states, Validators.required),
            szip: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{5}")])
        })
    };


    public selectCard(card: any): void {
        this.selectedCard = card;
        this.cdr.detectChanges();
        this.stepper.next();
    }

    public resetStepper(form1: FormGroup, form2: FormGroup, form3: FormGroup): void {
         this.stepper.reset();
         this.selectedCard = null;
         form1.reset();
         this.businessInformation.controls.differentAddress.setValue(false);
         form2.reset();
         this.personalInformation.controls.authorization.setValue(false);
         this.personalInformation.controls.agreementAccepted.setValue(false);
         form3.reset();
    }

    public handleKeyDown(evt: KeyboardEvent, card: any): void {
        if (evt.key.toLowerCase() === ' ' || evt.key.toLowerCase() === 'spacebar' || evt.key.toLowerCase() === 'space') {
            this.selectCard(card);
        }
    }

    public errorMessages(){
        if(this.businessInformation.controls.taxIdNumber.errors.required){
            return "This field is required"
        }

        if(this.businessInformation.controls.taxIdNumber.errors.pattern){
            return "The Federal Tax ID Number should begin with 9 and should have 9 digits"
        }
    }
}
```
```html
<igx-stepper #stepper [linear]="true">

  <igx-step #step1 [isValid]="!!selectedCard" [completed]="!!selectedCard">
    <span igxStepTitle>Card Type</span>
    <div igxStepContent [tabIndex]="-1">
      <h2 class="sample-step-title">Choose your business credit card</h2>
      <div class="card-wrapper">
        @for (card of cards; track card) {
          <igx-card (click)="selectCard(card)"
            [ngClass]="{'selected-card': selectedCard === card}" [tabIndex]="0"
            (keydown)="handleKeyDown($event, card)" elevated>
            @if (selectedCard === card) {
              <igx-badge value="Your current choice"></igx-badge>
            }
            <igx-card-media>
              <img src="{{card.img}}" alt="">
            </igx-card-media>
            <igx-card-content>
              <span class="card-currency">{{card.price}}</span>
              <span class="card-title">{{card.offer}}</span>
              <p>{{card.type}}</p>
              <p>{{card.description}}</p>
            </igx-card-content>
          </igx-card>
        }
      </div>
    </div>
  </igx-step>

  <igx-step #step2 [isValid]="businessInformation.valid" [completed]="businessInformation.valid">
    <span igxStepTitle>Business information</span>
    <div igxStepContent [tabIndex]="-1">
      <div class="sample-row">
        <form class="flex-form" [formGroup]="businessInformation">
          <igx-input-group type="box">
            <input igxInput name="name" id="name" type="text" formControlName="name" required/>
            <label igxLabel for="name">Legal Business Name</label>
          </igx-input-group>
          <igx-input-group type="box">
            <input igxInput name="physicalAddress" id="physicalAddress" type="text"
              formControlName="physicalAddress" required />
              <label igxLabel for="physicalAddress">Business Physical Address</label>
            </igx-input-group>
            <div class="form-row">
              <igx-input-group type="box">
                <input igxInput name="city" id="city" type="text" formControlName="city"
                  required />
                  <label igxLabel for="city">City</label>
                </igx-input-group>
                <igx-select type="box" name="state" formControlName="state" required>
                  @for (state of states; track state) {
                    <igx-select-item [value]="state">
                      {{state}}
                    </igx-select-item>
                  }
                  <label igxLabel>State</label>
                </igx-select>
                <igx-input-group type="box">
                  <input igxInput name="zip" id="zip" type="text" [igxMask]="'00000'"
                    [placeholder]="'#####'" formControlName="zip" required />
                    <label igxLabel for="zip">ZIP Code</label>
                  </igx-input-group>
                </div>
                <igx-checkbox name="differentAddress" formControlName="differentAddress">
                  The mailing address is different than the business physical address
                </igx-checkbox>
                <igx-input-group type="box">
                  <input igxInput name="taxIdNumber" id="taxIdNumber" type="text"
                    [placeholder]="'9##-##-####'" [igxMask]="'000-00-0000'"
                    formControlName="taxIdNumber" required/>
                    @if (businessInformation.controls.taxIdNumber.invalid && businessInformation.controls.taxIdNumber.touched) {
                      <igx-hint>
                        {{errorMessages()}}
                      </igx-hint>
                    }
                    <label igxLabel for="taxIdNumber">Federal Tax ID Number</label>
                  </igx-input-group>
                  <p>Does this business operate outside the United States? <span class="sample-required">*</span></p>
                  <igx-radio-group type="box" name="nonUSBusinessActivity" formControlName="nonUSBusinessActivity" alignment="vertical"
                    required>
                    <igx-radio class="radio-sample" value="true">
                      Yes
                    </igx-radio>
                    <igx-radio class="radio-sample" value="false">
                      No
                    </igx-radio>
                  </igx-radio-group>
                </form>
                @if (selectedCard) {
                  <igx-card >
                    <igx-card-content>
                      <div class="sample-row sample-card">
                        <img src="{{selectedCard.img}}" alt="">
                        <div>
                          <span class="card-currency">{{selectedCard.price}}</span>
                          <span class="card-title">{{selectedCard.offer}}</span>
                          <p>{{selectedCard.type}}</p>
                          <p>{{selectedCard.description}}</p>
                        </div>
                      </div>
                    </igx-card-content>
                  </igx-card>
                }
              </div>
              <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.prev()">Back</button>
                <button igxButton="contained" (click)="stepper.next()"
                [disabled]="!businessInformation.valid">Continue</button>
              </div>
            </div>
          </igx-step>

          <igx-step #step3 [isValid]="personalInformation.valid" [completed]="personalInformation.valid">
            <span igxStepTitle>Personal Information</span>
            <div igxStepContent [tabIndex]="-1">
              <div class="sample-row">
                <form class="flex-form" [formGroup]="personalInformation">
                  <igx-input-group type="box">
                    <input igxInput name="firstName" id="firstName" type="text"
                      formControlName="firstName" required />
                      <label igxLabel for="firstName">First Name</label>
                    </igx-input-group>
                    <igx-input-group type="box">
                      <input igxInput name="lastName" id="lastName" type="text"
                        formControlName="lastName" required />
                        <label igxLabel for="lastName">Last Name</label>
                      </igx-input-group>
                      <igx-input-group type="box">
                        <input igxInput name="jobTitle" id="jobTitle" type="text"
                          formControlName="jobTitle" required />
                          <label igxLabel for="jobTitle">Job Title</label>
                        </igx-input-group>
                        <igx-input-group type="box">
                          <input igxInput name="phoneNumber" id="phoneNumber" type="text"
                            formControlName="phoneNumber" required />
                            <label igxLabel for="phoneNumber">Phone Number</label>
                          </igx-input-group>
                          <igx-input-group type="box">
                            <input igxInput name="email" id="email" type="email" formControlName="email"
                              required email />
                              <label igxLabel for="email">Email Address</label>
                            </igx-input-group>
                            <igx-checkbox name="authorization" formControlName="authorization" required>
                              I confirm that I am authorized to borrow on behalf of this business. <span
                            class="sample-required">*</span>
                          </igx-checkbox>
                          <div class="sample-terms">
                            <igx-checkbox name="agreementAccepted" formControlName="agreementAccepted"
                              required>
                              I agree with the<span class="sample-required">*</span>
                            </igx-checkbox>
                            <a (click)="$event.stopPropagation()">Terms and Conditions</a>
                          </div>
                        </form>
                        @if (selectedCard) {
                          <igx-card >
                            <igx-card-content>
                              <div class="sample-row sample-card">
                                <img src="{{selectedCard.img}}" alt="">
                                <div>
                                  <span class="card-currency">{{selectedCard.price}}</span>
                                  <span class="card-title">{{selectedCard.offer}}</span>
                                  <p>{{selectedCard.type}}</p>
                                  <p>{{selectedCard.description}}</p>
                                </div>
                              </div>
                            </igx-card-content>
                          </igx-card>
                        }
                      </div>
                      <div class="sample-step-actions">
                        <button igxButton="contained" (click)="stepper.prev()">Back</button>
                        <button igxButton="contained" (click)="stepper.next()"
                        [disabled]="!personalInformation.valid">Continue</button>
                      </div>
                    </div>
                  </igx-step>

                  <igx-step #step4 [isValid]="shippingDetails.valid" [completed]="shippingDetails.valid || (!businessInformation.controls.differentAddress && step3.completed)">
                    <span igxStepTitle>Shipping Details</span>
                    <div igxStepContent [tabIndex]="-1">
                      <div class="sample-row">
                        <form class="flex-form" [formGroup]="shippingDetails">
                          <igx-input-group type="box">
                            <input igxInput name="sfirstName" id="sfirstName" type="text"
                              formControlName="sfirstName" required />
                              <label igxLabel for="sfirstName">First Name</label>
                            </igx-input-group>
                            <igx-input-group type="box">
                              <input igxInput name="slastName" id="slastName" type="text"
                                formControlName="slastName" required />
                                <label igxLabel for="slastName">Last Name</label>
                              </igx-input-group>
                              <igx-input-group type="box">
                                <input igxInput name="mailingAddress" type="text" formControlName="smailingAddress"
                                  required />
                                  <label igxLabel for="mailingAddress" id="mailingAddress">Mailing Address</label>
                                </igx-input-group>
                                <div class="form-row">
                                  <igx-input-group type="box">
                                    <input igxInput name="scity" id="scity" type="text" formControlName="scity"
                                      required />
                                      <label igxLabel for="scity">City</label>
                                    </igx-input-group>
                                    <igx-select type="box" name="sstate" formControlName="sstate" required>
                                      @for (state of states; track state) {
                                        <igx-select-item [value]="state">
                                          {{state}}
                                        </igx-select-item>
                                      }
                                      <label igxLabel>State</label>
                                    </igx-select>
                                    <igx-input-group type="box">
                                      <input igxInput name="szip" id="szip" type="text" pattern="[0-9]{5}" [placeholder]="'#####'"
                                        [igxMask]="'00000'" formControlName="szip" required />
                                        <label igxLabel for="szip">ZIP Code</label>
                                      </igx-input-group>
                                    </div>
                                  </form>
                                  @if (selectedCard) {
                                    <igx-card >
                                      <igx-card-content>
                                        <div class="sample-row sample-card">
                                          <img src="{{selectedCard.img}}" alt="">
                                          <div>
                                            <span class="card-currency">{{selectedCard.price}}</span>
                                            <span class="card-title">{{selectedCard.offer}}</span>
                                            <p>{{selectedCard.type}}</p>
                                            <p>{{selectedCard.description}}</p>
                                          </div>
                                        </div>
                                      </igx-card-content>
                                    </igx-card>
                                  }
                                </div>
                                <div class="sample-step-actions">
                                  <button igxButton="contained" (click)="stepper.prev()">Back</button>
                                  <button igxButton="contained" (click)="stepper.next()"
                                  [disabled]="!shippingDetails.valid">Continue</button>
                                </div>
                              </div>
                            </igx-step>

                            <igx-step #step5>
                              <span igxStepTitle>Confirmation</span>
                              <div igxStepContent [tabIndex]="-1">
                                <div class="success-message">
                                  <div class="success-marker">
                                    <igx-icon>check</igx-icon>
                                  </div>
                                  <div class="success-text">
                                    <h2 class="sample-step-title">Your application for a business credit card has been sent
                                    successfully!</h2>
                                    <p>We will contact you within a few days.</p>
                                  </div>
                                </div>
                                @if (selectedCard) {
                                  <igx-card class="sample-small-card" >
                                    <igx-card-content>
                                      <strong class="sample-date">Application date: {{ today | date:'d MMM y' }}</strong>
                                      <div class="sample-row sample-card">
                                        <img src="{{selectedCard.img}}" alt="">
                                        <div>
                                          <span class="card-currency">{{selectedCard.price}}</span>
                                          <span class="card-title">{{selectedCard.offer}}</span>
                                          <p>{{selectedCard.type}}</p>
                                          <p>{{selectedCard.description}}</p>
                                        </div>
                                      </div>
                                    </igx-card-content>
                                  </igx-card>
                                }
                                <div class="sample-step-actions">
                                  <button igxButton="contained" (click)="resetStepper(businessInformation, personalInformation, shippingDetails)">Reset</button>
                                </div>
                              </div>
                            </igx-step>

                          </igx-stepper>
```
```scss
@use '../../../../variables' as *;

$sample-gap: 20px;
:host {
	display: block;
	padding: $sample-gap;
	max-width: rem(1150px);

	p {
		margin: 0;
	}
}

.sample-step-actions,
.card-wrapper,
.sample-row,
.flex-form,
.form-row,
.success-message,
.success-text {
	display: flex;
}

.sample-row {
	align-items: flex-start;
	gap: rem(50px);

	> * {
		flex: 1;
	}
}

.sample-step-actions {
	gap: $sample-gap;
	margin-top: $sample-gap * 2;
}

.card-wrapper {
	gap: rem(30px);
}

$my-card: card-theme(
	$schema: $light-schema,
	$border-radius: rem(8px),
	$content-text-color: color($default-palette, 'gray', 900),
);

@include card($my-card);

.selected-card {
	border: 2px solid color($default-palette, 'primary', 400);
	position: relative;
	overflow: initial;

	igx-badge {
		position: absolute;
		top: rem(-11px);
		left: 0;
		right: 0;
		margin: 0 auto;
		content: 'Current choice';
		padding: rem(4px) rem(8px);
		max-width: 50%;
	}
}

.igx-card {
	cursor: pointer;
	user-select: none;
	min-width: 280px;

	&:focus {
		outline: none;
		box-shadow: inset 0 0 0 1px color($default-palette, 'primary', 400),
			0 5px 5px -3px rgba(0, 0, 0, 0.26),
			0 8px 10px 1px rgba(0, 0, 0, 0.12),
			0 3px 14px 2px rgba(0, 0, 0, 0.08);
	}
}

.sample-step-title {
	font-size: rem(20px);
	letter-spacing: 0;
	font-weight: 500;
	line-height: normal;
	margin-bottom: rem(24px);
}

.igx-card__media {
	max-width: rem(340px);
	padding: rem(30px) rem(30px) 0 rem(30px);
}

.igx-card-content {
	text-align: center;

	p {
		font-size: rem(16px);
		line-height: rem(24px);
	}

	padding: rem(30px);
}

.card-title {
	display: block;
	font-size: rem(14px);
	font-weight: 500;
	margin: 0 rem(8px);
	color: color($default-palette, 'secondary');
}

.card-currency {
	display: block;
	font-size: rem(48px);
	color: color($default-palette, 'secondary');
	margin-bottom: rem(8px);

	&::before {
		content: '$';
		font-size: rem(34px);
		margin-right: rem(6px);
		position: relative;
		top: rem(-12px);
	}
}

.flex-form,
.form-row {
	gap: rem(16px);
}

.flex-form {
	flex-direction: column;

	igx-checkbox {
		white-space: nowrap;
	}
}

.sample-card {
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	img {
		width: rem(180px);
		max-width: rem(300px);
		min-width: rem(130px);
	}

	.card-title {
		font-size: 12px;
		margin:0 rem(4px);
	}

	.card-currency {
		font-size: rem(36px);
		margin-bottom: rem(4px);

		&::before {
			font-size: rem(22px);
			margin-right: rem(4px);
		}
	}

	p {
		font-size: rem(14px);
		white-space: nowrap;
	}
}

.radio-sample {
	margin-bottom: rem(16px);
}

.success-marker {
	display:flex;
	align-items: center;
	justify-content: center;
	width: rem(30px);
	height: rem(30px);
	border-radius: rem(15px);
	background: color($default-palette, 'success');
	color: #fff;
	user-select: none;
}

.success-message {
	align-items: center;
	gap: rem(16px);
	margin-bottom: rem(32px);
}

.success-text {
	flex-direction: column;

	.sample-step-title {
		margin: 0;
	}
}

.sample-date {
	display: block;
	margin-bottom: rem(16px);
	text-align: left;
	font-weight: 500;
}

.sample-small-card {
	max-width: rem(500px);
}

.sample-terms {
	display: flex;
	align-items: center;
	justify-content: flex-start;

	> a {
		margin-left: rem(8px);
		color: color($default-palette, 'primary');
		text-decoration: none;

		&:hover {
			color: color($default-palette, 'primary', 600);
		}
	}
}

.sample-required {
	color: color($default-palette, 'error');
	margin-left: rem(2px);
}
```

## Getting Started with Ignite UI for Angular Stepper

To get started with the Ignite UI for Angular Stepper component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxStepperModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxStepperModule } from 'igniteui-angular/stepper';
// import { IgxStepperModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxStepperModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxStepperComponent` as a standalone dependency, or use the [`IGX_STEPPER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/stepper/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IGX_STEPPER_DIRECTIVES } from 'igniteui-angular/stepper';
// import { IGX_STEPPER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `<igx-stepper>
        <igx-step> 
            <p igxStepTitle>Step 1</p>
        </igx-step>
        <igx-step> 
            <p igxStepTitle>Step 2</p>
        </igx-step>
    </igx-stepper>`,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_STEPPER_DIRECTIVES, FormsModule, HammerModule]
    /* or imports: [IgxStepperComponent, FormsModule, HammerModule] */
})
export class HomeComponent {
    public task: Task;
}
```

Now that you have the Angular Stepper module or directives imported, you can start with a basic configuration of the `igx-stepper` and its steps.
Now that you have the Angular Stepper module or directives imported, you can start with a basic configuration of the `igx-stepper` and its steps.

## Using the Angular Stepper

[IgxStepComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html) is the representation of every step that belongs to the [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html). Steps provide [isValid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#isValid), [active](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#active), [optional](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#optional), [disabled](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#disabled) and [completed](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#completed) properties, which give you the ability to configure the step states according to your business requirement.

### Declaring a Stepper

Now that we have the stepper module imported, let’s get started with its configuration.

Steps can be declared using one of the following approaches.

- Iterating through a data set

```html
<igx-stepper>
    <igx-step *ngFor="let step of stepsData" [disabled]=”step.disabled”>
        <igx-icon igxStepIndicator>
   {{step.indicator}}
        </igx-icon>

        <p igxStepTitle>
   {{step.title}}
        </p>
    </igx-step>
</igx-stepper>
```


- Creating static steps

```html
<igx-stepper>
    <igx-step> 
       <p igxStepTitle>Step 1</p>
    </igx-step>
    <igx-step> 
       <p igxStepTitle>Step 2</p>
    </igx-step>
</igx-stepper>
```

For each step the user has the ability to configure indicator, title, subtitle and content using the `igxStepIndicator`, `igxStepTitle`, `igxStepSubtitle` and `igxStepContent` directives as follows:

```html
<igx-stepper>
    <igx-step>
       <igx-icon igxStepIndicator>home</igx-icon>
       <p igxStepTitle>Home</p>
       <p igxStepSubtitle>Home Sub Title</p>
       <div igxStepContent>
          ...
       </div>
    </igx-step>
</igx-stepper>
```

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 500px" src="../images/stepper/stepper-step.png" alt="Ignite UI for Angular Stepper Step Structure" />

### Changing the Stepper Orientation

You can customize the stepper orientation through the exposed [orientation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#orientation) property. It takes a member of the `IgxStepperOrientation` enum - `Horizontal` _(default value)_ or `Vertical`.

**Horizontal Stepper Orientation**

`horizontal` is the default value for the `igx-stepper` [orientation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#orientation) property.
When the stepper is horizontally orientated you have the opportunity to determine whether the steps’ content would be displayed above or below the steps’ headers. This could be achieved by setting the [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) [contentTop](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#contentTop) boolean property, which default value is `false`. In case it is enabled the steps’ content would be displayed above the steps’ headers.

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 800px"  src="../images/stepper/stepper-contentTop.png" alt="Ignite UI for Angular Stepper Content Rendered Above Stepper" />

**Vertical Stepper Orientation**

You can easily switch from the horizontal to vertical layout. In order to change the default orientation you should set the [orientation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#orientation) property to `vertical`.

```html
<igx-stepper [orientation]="'vertical'">
 <igx-step>    
    …   
 </igx-step>

 <igx-step>    
    …   
 </igx-step>
</igx-stepper>
```

The sample below demonstrates how stepper [orientation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#orientation) and [titles position](stepper.md#customizing-the-steps) could be changed runtime.

```typescript
import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxStepComponent, IgxStepContentDirective, IgxStepTitleDirective, IgxStepperComponent, IgxStepperOrientation, IgxStepperTitlePosition } from 'igniteui-angular/stepper';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-stepper-label-position-and-orientation-sample',
    styleUrls: ['./stepper-label-position-and-orientation-sample.component.scss'],
    templateUrl: './stepper-label-position-and-orientation-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxStepperComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, IgxButtonDirective]
})
export class StepperLabelPositionAndOrientationSampleComponent {
    public orientation: IgxStepperOrientation = 'horizontal';
    public titlePosition: IgxStepperTitlePosition = 'bottom';
    public stepperOrientations: any[] = [
        {
            label: 'Horizontal', orientation: 'horizontal',
            selected: this.orientation === 'horizontal', togglable: true
        },
        {
            label: 'Vertical', orientation: 'vertical',
            selected: this.orientation === 'vertical', togglable: true
        }
    ];

    public stepperTitlePositions: any[] = [
        {
            label: 'Bottom', titlePosition: 'bottom',
            selected: this.titlePosition === 'bottom', togglable: true
        },
        {
            label: 'Top', titlePosition: 'top',
            selected: this.titlePosition === 'top', togglable: true
        },
        {
            label: 'End', titlePosition: 'end',
            selected: this.titlePosition === 'end', togglable: true
        },
        {
            label: 'Start', titlePosition: 'start',
            selected: this.titlePosition === 'start', togglable: true
        }
    ];

    public toggleOrientation(event: IButtonGroupEventArgs): void {
        this.orientation = this.stepperOrientations[event.index].orientation;
    }

    public toggleTitlePosition(event: IButtonGroupEventArgs): void {
        this.titlePosition = this.stepperTitlePositions[event.index].titlePosition;
    }
}
```
```html
<div class="sample-split">
    <igx-buttongroup [values]="stepperTitlePositions" (selected)="toggleTitlePosition($event)">
    </igx-buttongroup>
    <igx-buttongroup [values]="stepperOrientations" (selected)="toggleOrientation($event)">
    </igx-buttongroup>
</div>
<igx-stepper #stepper [titlePosition]="titlePosition" [orientation]="orientation">
    <igx-step>
        <span igxStepTitle>Order</span>
        <div igxStepContent>
            <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.next()">NEXT</button>
            </div>
        </div>
    </igx-step>
    <igx-step>
        <span igxStepTitle>Payment</span>
        <div igxStepContent>
            <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.prev()">PREVIOUS</button>
                <button igxButton="contained" (click)="stepper.next()">NEXT</button>
            </div>
        </div>
    </igx-step>
    <igx-step>
        <span igxStepTitle>Confirmation</span>
        <div igxStepContent>
            <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.prev()">PREVIOUS</button>
                <button igxButton="contained" (click)="stepper.reset()">RESET</button>
            </div>
        </div>
    </igx-step>
</igx-stepper>
```
```scss
$sample-gap: 20px;

:host {
	display: block;
	padding: $sample-gap;
}

.sample-split,
.sample-step-actions {
	display: flex;
	gap: $sample-gap;
}

.sample-split {
	> * {
		max-width: 380px;
		flex: 1;
	}

	margin-bottom: $sample-gap;
}
```

<div class="divider--half"></div>

### Step States

[IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) supports four steps states and each of them apply different styles by default:

- [**active**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#active) - Determines whether the step is the currently displayed. By design, if the user does not explicitly set some step’s active attribute to `true`, the initial active step would be the first non-disabled step.
- [**disabled**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#disabled) - Determines whether the step is interactable. By default, the disabled attribute of a step is set to `false`.
- [**optional**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#optional) - By default, the optional attribute of a step is set to `false`. If validity of a step in linear stepper is not required, then the optional attribute can be enabled in order to be able to move forward independently from the step validity.
- [**completed**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#completed) - By default, the completed attribute of a step returns `false`. The user, however, can override this default completed behavior by setting the completed attribute as needed. When step is marked as completed not only that the style of the step header is changed by default, but also the style of the progress line between the completed step and the next one. Both styles could be modified using the exposed [CSS variables](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-stepper-theme).

The [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) gives you the opportunity to set validation logic for each step through the two-way bindable [**isValid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#isValid) property. Based on its value it is decided whether the user will have the ability to move forward in linear stepper mode.
By default, the [isValid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html#isValid) property of a step is set to `true`.

### Linear Stepper

The `igx-stepper` gives you the opportunity to set its steps flow using the [linear](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#linear) property. By default, linear is set to `false` and the user is enabled to select any non-disabled step in the [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html).

When the [linear](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#linear) property is set to `true`, the stepper will require the current non-optional step to be valid before proceeding to the next one.

If the current non-optional step is not valid you cannot go forward to the next step until you validate the current one.

> [!NOTE]
> Optional steps validity is not taken into account in order to move forward.

The following example demonstrates how to configure a linear stepper:

```typescript
import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxStepActiveIndicatorDirective, IgxStepComponent, IgxStepContentDirective, IgxStepSubtitleDirective, IgxStepTitleDirective, IgxStepperComponent } from 'igniteui-angular/stepper';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-stepper-linear-sample',
    styleUrls: ['./stepper-linear-sample.component.scss'],
    templateUrl: './stepper-linear-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxStepperComponent, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxButtonDirective, IgxStepSubtitleDirective, IgxRadioGroupDirective, IgxRadioComponent]
})
export class StepperLinearSampleComponent {
    public linear = false;

    public user: any = {
        fullName: '',
        email: '',
        city: '',
        street: '',
        city2: '',
        street2: '',
        payment: ''
    };

    public paymentTypes: string[] = [
        'PayPal (n@mail.com; 18/02/2021)',
        'Visa (**** **** **** 1234; 12/23)',
        'MasterCard (**** **** **** 5678; 12/24)'
    ];

    public modes: any[] = [
        {
            label: 'Linear', linear: true,
            selected: this.linear === true, togglable: true
        },
        {
            label: 'Non Linear', linear: false,
            selected: this.linear === false, togglable: true
        }
    ];

    public toggleModes(event: IButtonGroupEventArgs): void {
        this.linear = this.modes[event.index].linear;
    }
}
```
```html
<div class="sample-split">
  <igx-buttongroup [values]="modes" (selected)="toggleModes($event)">
  </igx-buttongroup>
</div>

<igx-stepper #stepper [linear]="linear">

  <ng-template igxStepActiveIndicator>
    <igx-icon>edit</igx-icon>
  </ng-template>

  <igx-step #step1 [isValid]="form1.form.valid">
    <span igxStepTitle>Personal Info</span>
    <div igxStepContent>
      <form #form1="ngForm">
        <igx-input-group>
          <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName" required />
          <label igxLabel for="fullName" id="fullName">Full Name</label>
        </igx-input-group>
        <igx-input-group>
          <input igxInput name="email" type="email" [(ngModel)]="user.email" required email />
          <label igxLabel for="email" id="email">Email</label>
        </igx-input-group>
      </form>
      <div class="sample-step-actions">
        <button igxButton="contained" (click)="stepper.next()"
        [disabled]="!form1.form.valid && stepper.linear">NEXT</button>
      </div>
    </div>
  </igx-step>

  <igx-step #step2 [isValid]="form2.form.valid">
    <span igxStepTitle>Delivery address</span>
    <div igxStepContent>
      <form #form2="ngForm">
        <igx-input-group>
          <input igxInput name="city" type="text" [(ngModel)]="user.city" required />
          <label igxLabel for="city" id="city">City</label>
        </igx-input-group>
        <igx-input-group>
          <input igxInput name="street" type="text" [(ngModel)]="user.street" required />
          <label igxLabel for="street" id="street">Street</label>
        </igx-input-group>
      </form>
      <div class="sample-step-actions">
        <button igxButton="contained" (click)="stepper.prev()">Previous</button>
        <button igxButton="contained" (click)="stepper.next()"
        [disabled]="!form2.form.valid && stepper.linear">Next</button>
      </div>
    </div>
  </igx-step>

  <igx-step #step3 [optional]="true">
    <span igxStepTitle>Billing address</span>
    <span igxStepSubtitle>(optional)</span>
    <div igxStepContent>
      <form #form3="ngForm">
        <igx-input-group>
          <input igxInput name="bil-city" type="text" [(ngModel)]="user.city2" />
          <label igxLabel for="bil-city" id="bil-city">City</label>
        </igx-input-group>
        <igx-input-group>
          <input igxInput name="bil-street" type="text" [(ngModel)]="user.street2" />
          <label igxLabel for="bil-street" id="bil-street">Street</label>
        </igx-input-group>
      </form>
      <div class="sample-step-actions">
        <button igxButton="contained" (click)="stepper.prev()">Previous</button>
        <button igxButton="contained" (click)="stepper.next()">Next</button>
      </div>
    </div>
  </igx-step>

  <igx-step #step4 [isValid]="user.payment">
    <span igxStepTitle>Payment</span>
    <div igxStepContent>
      <igx-radio-group [(ngModel)]="user.payment" alignment="vertical" required>
        @for (paymentType of paymentTypes; track paymentType) {
          <igx-radio value="paymentType">
            {{ paymentType }}
          </igx-radio>
        }
      </igx-radio-group>
      <div class="sample-step-actions">
        <button igxButton="contained" (click)="stepper.prev()">Previous</button>
        <button igxButton="contained" (click)="stepper.next()">Submit</button>
      </div>
    </div>
  </igx-step>

  <igx-step #step5>
    <span igxStepTitle>Delivery status</span>
    <div igxStepContent>
      <p>Your order is on its way. Expect delivery on 25th September 2021. Delivery address: San Jose, CA 94243.
      </p>
      <div class="sample-step-actions">
        <button igxButton="contained" (click)="stepper.prev()">Previous</button>
        <button igxButton="contained" (click)="stepper.reset()">Reset</button>
      </div>
    </div>
  </igx-step>

</igx-stepper>
```
```scss
$sample-gap: 20px;

:host {
	display: block;
	padding: $sample-gap;
}

.sample-split,
.sample-step-actions {
	display: flex;
	gap: $sample-gap;
}

.sample-step-actions {
	margin-top: $sample-gap * 2;
}

.sample-split {
	> * {
		max-width: 380px;
		flex: 1;
	}

	margin-bottom: $sample-gap;
}

form {
	> * {
		margin-bottom: calc(#{$sample-gap} / 2);
	}

	margin-bottom: $sample-gap;
}

igx-radio {
	margin-bottom: $sample-gap;
}
```

<div class="divider--half"></div>

### Step Interactions

[IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) provides the following API methods for step interactions:

- [**navigateTo**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#navigateTo) – activates the step by given index.
- [**next**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#next) - activates the next non-disabled step.
- [**prev**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#prev) – activates the previous non-disabled step.
- [**reset**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#reset) – resets the stepper to its initial state.

> [!NOTE]
> The reset method would not clear the step`s content. This should be done manually.

### Customizing the Steps

The Ignite UI for Angular Stepper gives you the ability to configure different options for titles, indicators and more.

This could be achieved through the [stepType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#stepType) property of the [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html). It takes a member of the `IgxStepType` enum:

- Full _(default value)_
- Indicator
- Title

**Full**

If titles and subtitles are defined, with this setup both indicators and titles would be rendered.

The user would also have the ability to define the position of the title for the steps, so it could be placed before, after, above or below the step indicator.
The user can configure the title position using the [titlePosition](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#titlePosition) property. Both properties take member of `IgxStepperTitlePosition` enum:

- end
- start
- bottom
- top

When the `igx-stepper` is horizontally orientated, the title position default value is `bottom`.

When the orientation is set to vertical layout the title position by default is `end`.

> [!NOTE]
> [titlePosition](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#titlePosition) property is applicable **only** when the stepper [stepType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#stepType) property is set to `full`.

**Indicator**

If you want to display only indicators for the steps, set the [stepType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#stepType) option to `indicator`.

The step indicator supports any content, however with the restriction that its size would be always **24 pixels**. Having this in mind, we recommend using [IgxIconComponent](icon.md) or [IgxAvatarComponent](avatar.md) as step indicators.

**Title**

If you want to display only titles for the steps, set the [stepType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#stepType) option to `title`.

In this way if subtitles are defined, they will also be rendered below the step title.

> [!NOTE]
> This container could be re-templated as per your requirement without any size restrictions. For example, you could add an indicator with size greater than 24 pixels inside it.

The sample below demonstrates all exposed step types and how they could be changed:

```typescript
import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxStepComponent, IgxStepTitleDirective, IgxStepType, IgxStepperComponent } from 'igniteui-angular/stepper';

@Component({
    selector: 'app-stepper-steptypes-sample',
    styleUrls: ['./stepper-steptypes-sample.component.scss'],
    templateUrl: './stepper-steptypes-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxStepperComponent, IgxStepComponent, IgxStepTitleDirective]
})
export class StepperStepTypesSampleComponent {
    public stepType: IgxStepType = 'full';
    public stepTypes: any[] = [
        {
            label: 'Indicator', stepType: 'indicator',
            selected: this.stepType === 'indicator', togglable: true
        },
        {
            label: 'Title', stepType: 'title',
            selected: this.stepType === 'title', togglable: true
        },
        {
            label: 'Full', stepType: 'full',
            selected: this.stepType === 'full', togglable: true
        }
    ];

    public toggleStepType(event: IButtonGroupEventArgs): void {
        this.stepType = this.stepTypes[event.index].stepType;
    }
}
```
```html
<div class="sample-split">
    <igx-buttongroup [values]="stepTypes" (selected)="toggleStepType($event)"></igx-buttongroup>
</div>

<igx-stepper #stepper [stepType]="stepType">
    <igx-step>
        <span igxStepTitle>Pricing Plan</span>
    </igx-step>
    <igx-step>
        <span igxStepTitle>Car Details</span>
    </igx-step>
    <igx-step>
        <span igxStepTitle>Payment</span>
    </igx-step>
</igx-stepper>
```
```scss
$sample-gap: 20px;

:host {
    display: block;
    padding: $sample-gap;
}

.sample-split,
.sample-step-actions {
    display: flex;
    gap: $sample-gap;
}

.sample-step-actions {
    margin-top: $sample-gap * 2;
}

.sample-split {
    > * {
        max-width: 380px;
        flex: 1;
    }

    margin-bottom: $sample-gap;
}
```

<div class="divider--half"></div>

The [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) also allows you to customize the rendered indicators for active, invalid and completed steps. This could be achieved through the `igxStepActiveIndicator`, `igxStepInvalidIndicator` and `igxStepCompletedIndicator` directives:

```html
<igx-stepper>
    <ng-template igxStepActiveIndicator>
       <igx-icon>edit</igx-icon>
    </ng-template>

    <ng-template igxStepInvalidIndicator>
       <igx-icon>error</igx-icon>
    </ng-template>

    <ng-template igxStepCompletedIndicator>
       <igx-icon>check</igx-icon>
    </ng-template>
    ...
</igx-stepper>
```

> [!NOTE]
> This templates would be applied for all steps with the relevant state.

### Angular Stepper Animations

Angular Stepper Animations provide the end-users with a beautiful experience interacting with the defined steps. The available animation options differ depending on the orientation of the stepper.

When the stepper is **horizontally orientated**, it is configured to use the `slide` animation by default. It also supports `fade` as an alternative. The animations are configured through the [horizontalAnimationType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#horizontalAnimationType) input.

In **vertically orientated** layout, the animation type could be defined using the [verticalAnimationType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#verticalAnimationType) property. By default, its value is `grow` and the user has the ability to set it to `fade` as well.

Setting `none` to the both animation type inputs disables stepper animations.

[IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) gives you the ability to configure the duration of the transition between the steps. This could be achieved through the [animationDuration](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html#animationDuration) property, which takes a number as an argument and it is common to the both orientations.

## Keyboard Navigation

Angular Stepper provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the steps.
The [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html) navigation is compliant with [W3 accessibility standards](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html#accessibilityfeatures) and convenient to use.

**Key Combinations**

- <kbd>Tab</kbd> - moves the focus to the next tabbable element
- <kbd>Shift + Tab</kbd> - moves the focus to the previous tabbable element
- <kbd>Arrow Down</kbd> - moves the focus to the header of the next accessible step when the `igx-stepper` is **vertically orientated**
- <kbd>Arrow Up</kbd> - moves the focus to the header of the previous accessible step when the `igx-stepper` is **vertically orientated**
- <kbd>Arrow Left</kbd> - moves the focus to the header of the previous accessible step in both orientations
- <kbd>Arrow Right</kbd> - moves the focus to the header of the next accessible step in both orientations
- <kbd>Home</kbd> - moves the focus to the header of the FIRST enabled step in the `igx-stepper`
- <kbd>End</kbd> - moves the focus to the header of the LAST enabled step in the `igx-stepper`
- <kbd>Enter / Space</kbd> - activates the currently focused step

 > [!NOTE]
 > By design when the user presses the <kbd>Tab</kbd> key over the step header the focus will move to the step content container. In case the container should be skipped the developer should set the content container `[tabIndex]="-1"`.

The Stepper Component is also available in the low-code, [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder).

## Angular Stepper Styling

### Stepper Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table class="collapsible-table">
    <thead>
        <tr>
        <th>Primary Property</th>
        <th>Dependent Property</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody class="group">
        <tr class="primary">
        <td><details><summary><strong>$step-background</strong></summary></details></td>
        <td>$step-hover-background</td>
        <td>The background of the step header on hover</td>
        </tr>
        <tr class="dependent"><td></td><td>$step-focus-background</td><td>The background of the step header on focus</td></tr>
        <tr class="dependent"><td></td><td>$indicator-background</td><td>The background color of the step indicator</td></tr>
        <tr class="dependent"><td></td><td>$title-color</td><td>The color of the step title</td></tr>
        <tr class="dependent"><td></td><td>$subtitle-color</td><td>The color of the step subtitle</td></tr>
        <tr class="dependent"><td></td><td>$current-step-background</td><td>The background of the current step header</td></tr>
        <tr class="dependent"><td></td><td>$invalid-step-background</td><td>The background of the invalid step header</td></tr>
        <tr class="dependent"><td></td><td>$complete-step-background</td><td>The background of the complete step header</td></tr>
        <tr class="dependent"><td></td><td>$disabled-indicator-background</td><td>The indicator background of the disabled step</td></tr>
        <tr class="dependent"><td></td><td>$disabled-title-color</td><td>The title color of the disabled step</td></tr>
        <tr class="dependent"><td></td><td>$disabled-subtitle-color</td><td>The subtitle color of the disabled step</td></tr>
        <tr class="dependent"><td></td><td>$step-separator-color</td><td>The separator border color between steps</td></tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
        <td><details><summary><strong>$indicator-background</strong></summary></details></td>
        <td>$indicator-outline</td>
        <td>The outline color of the step indicator</td>
        </tr>
        <tr class="dependent"><td></td><td>$indicator-color</td><td>The text color of the step indicator</td></tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
        <td><details><summary><strong>$current-step-background</strong></summary></details></td>
        <td>$current-step-hover-background</td>
        <td>The background of the current step header on hover</td>
        </tr>
        <tr class="dependent"><td></td><td>$current-step-focus-background</td><td>The background of the current step header on focus</td></tr>
        <tr class="dependent"><td></td><td>$current-indicator-background</td><td>The background color of the current step indicator</td></tr>
        <tr class="dependent"><td></td><td>$current-title-color</td><td>The color of the current step title</td></tr>
        <tr class="dependent"><td></td><td>$current-subtitle-color</td><td>The color of the current step subtitle</td></tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
        <td><details><summary><strong>$invalid-indicator-background</strong></summary></details></td>
        <td>$invalid-indicator-outline</td>
        <td>The outline color of the invalid step indicator</td>
        </tr>
        <tr class="dependent"><td></td><td>$invalid-indicator-color</td><td>The color of the invalid step indicator</td></tr>
        <tr class="dependent"><td></td><td>$invalid-title-color</td><td>The color of the invalid step title</td></tr>
        <tr class="dependent"><td></td><td>$invalid-subtitle-color</td><td>The color of the invalid step subtitle</td></tr>
        <tr class="dependent"><td></td><td>$invalid-title-hover-color</td><td>The color of the invalid step title on hover</td></tr>
        <tr class="dependent"><td></td><td>$invalid-subtitle-hover-color</td><td>The color of the invalid step subtitle on hover</td></tr>
        <tr class="dependent"><td></td><td>$invalid-title-focus-color</td><td>The color of the invalid step title on focus</td></tr>
        <tr class="dependent"><td></td><td>$invalid-subtitle-focus-color</td><td>The color of the invalid step subtitle on focus</td></tr>
    </tbody>
    <tbody class="group">
        <tr class="primary">
        <td><details><summary><strong>$complete-step-background</strong></summary></details></td>
        <td>$complete-step-hover-background</td>
        <td>The background of the complete step header on hover</td>
        </tr>
        <tr class="dependent"><td></td><td>$complete-step-focus-background</td><td>The background of the complete step header on focus</td></tr>
        <tr class="dependent"><td></td><td>$complete-indicator-background</td><td>The background color of the complete step indicator</td></tr>
        <tr class="dependent"><td></td><td>$complete-indicator-color</td><td>The color of the completed step indicator</td></tr>
        <tr class="dependent"><td></td><td>$complete-title-color</td><td>The color of the complete step title</td></tr>
        <tr class="dependent"><td></td><td>$complete-subtitle-color</td><td>The color of the complete step subtitle</td></tr>
        <tr class="dependent"><td></td><td>$complete-title-hover-color</td><td>The color of the complete step title on hover</td></tr>
        <tr class="dependent"><td></td><td>$complete-subtitle-hover-color</td><td>The color of the complete step subtitle on hover</td></tr>
        <tr class="dependent"><td></td><td>$complete-title-focus-color</td><td>The color of the complete step title on focus</td></tr>
        <tr class="dependent"><td></td><td>$complete-subtitle-focus-color</td><td>The color of the complete step subtitle on focus</td></tr>
    </tbody>
</table>

Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the `igx-stepper` appearance.

First, in order to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [stepper-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-stepper-theme) and provide just a few base parameters. The theme will automatically generate all required styles, including state-specific colors and accessible contrasting foregrounds. You can also override any of the available parameters if you want more control over the appearance.

```scss
$stepper-theme: stepper-theme(
  $step-background: #351e65,
  $current-indicator-background: #f6cd28,

  $border-radius-step-header: 16px,
  $border-radius-indicator: 10px 4px 10px 4px,
);
```

The last step is to include the component's theme.

```scss
@include css-vars($custom-stepper-theme);
```

### Demo

The sample below demonstrates a simple styling applied through the [Ignite UI for Angular Theming](themes/index.md).

```typescript
import { Component, ViewChild } from '@angular/core';
import { IStepChangingEventArgs, IgxStepActiveIndicatorDirective, IgxStepCompletedIndicatorDirective, IgxStepComponent, IgxStepContentDirective, IgxStepSubtitleDirective, IgxStepTitleDirective, IgxStepperComponent } from 'igniteui-angular/stepper';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-stepper-styling-sample',
    styleUrls: ['./stepper-styling-sample.component.scss'],
    templateUrl: './stepper-styling-sample.component.html',
    imports: [IgxStepperComponent, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepCompletedIndicatorDirective, IgxStepComponent, IgxStepTitleDirective, IgxStepSubtitleDirective, IgxStepContentDirective, IgxButtonDirective]
})
export class StepperStylingSampleComponent {
    @ViewChild('stepper', { read: IgxStepperComponent })
    public stepper: IgxStepperComponent;

    public activeStepChanging(evt: IStepChangingEventArgs): void {
        this.stepper.steps.forEach(step => {
            if (step.index >= evt.oldIndex && step.index < evt.newIndex) {
                step.completed = true;
            }
        });
    }

    public reset(): void {
        this.stepper.steps.forEach(step => step.completed = false);
        this.stepper.reset();
    }
}
```
```html
<igx-stepper #stepper (activeStepChanging)="activeStepChanging($event)">
    <ng-template igxStepActiveIndicator>
        <igx-icon>edit</igx-icon>
    </ng-template>
    <ng-template igxStepCompletedIndicator>
        <igx-icon>check</igx-icon>
    </ng-template>
    <igx-step>
        <span igxStepTitle>Order</span>
        <span igxStepSubtitle>required</span>
        <div igxStepContent>
            <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.next()">NEXT</button>
            </div>
        </div>
    </igx-step>
    <igx-step>
        <span igxStepTitle>Payment</span>
        <span igxStepSubtitle>Optional</span>
        <div igxStepContent>
            <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.prev()">PREVIOUS</button>
                <button igxButton="contained" (click)="stepper.next()">NEXT</button>
            </div>
        </div>
    </igx-step>
    <igx-step>
        <span igxStepTitle>Confirmation</span>
        <span igxStepSubtitle>required</span>
        <div igxStepContent>
            <div class="sample-step-actions">
                <button igxButton="contained" (click)="stepper.prev()">PREVIOUS</button>
                <button igxButton="contained" (click)="reset()">RESET</button>
            </div>
        </div>
    </igx-step>
</igx-stepper>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$stepper-theme: stepper-theme(
  $step-background: #351e65,
  $current-indicator-background: #f6cd28,

  $border-radius-step-header: 16px,
  $border-radius-indicator: 10px 4px 10px 4px,
);

@include css-vars($stepper-theme);
```

### Styling with Tailwind

You can style the stepper using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-stepper`, `dark-stepper`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [stepper-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-stepper-theme). The syntax is as follows:

```html
<igx-stepper
  class="!light-stepper ![--step-background:#7B9E89] ![--border-radius-step-header:6px]">
  ...
</igx-stepper>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your stepper should look like this:

<div class="sample-container loading" style="height:200px">
    <iframe id="stepper-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/stepper-tailwind-styling-sample/' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## API Reference

- [IgxStepperComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsteppercomponent.html)
- [IgxStepComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxstepcomponent.html)

## Additional Resources

Our community is active and always welcoming new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

