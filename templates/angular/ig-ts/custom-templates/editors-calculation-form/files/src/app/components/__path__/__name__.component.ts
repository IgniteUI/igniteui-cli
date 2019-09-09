import { Component, ViewChild } from "@angular/core";
import {
	IgCheckboxEditorComponent,
	IgCurrencyEditorComponent,
	IgDatePickerComponent,
	IgMaskEditorComponent,
	IgNumericEditorComponent,
	IgPercentEditorComponent,
	IgTextEditorComponent
} from "igniteui-angular-wrappers";

@Component({
	selector: "$(filePrefix)",
	template: `
	<h2>$(description)</h2>
	<p>To calculate the approximate cost of your monthly installment you can use our credit calculator.</p>
	<div id="container">
		<div id="igCheckboxEditorsContainer">
			<form id="form" (ngSubmit)="onSubmit()">
				<table>
					<tr>
						<td>
							<ig-text-editor class="divHeight" [options]="firstNameOptions" [disabled]="!editorsEnabled" [(ngModel)]="firstNameOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="firstName"></ig-text-editor>
						</td>
						<td>
							First name
						</td>
					</tr>
					<tr>
						<td>
							<ig-text-editor class="divHeight" [options]="lastNameOptions" [disabled]="!editorsEnabled" [(ngModel)]="lastNameOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="lastName" ></ig-text-editor>
						</td>
						<td>
							Last name
						</td>
					</tr>
					<tr>
						<td>
							<ig-numeric-editor class="divHeight" [options]="creditAmountOptions" [disabled]="!editorsEnabled" [(ngModel)]="creditAmountOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="creditAmount"></ig-numeric-editor>
						</td>
						<td>
							Credit amount
						</td>
					</tr>
					<tr>
						<td>
							<ig-text-editor class="divHeight" [options]="currencyOptions" [disabled]="!editorsEnabled" [(ngModel)]="currencyOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="currency"></ig-text-editor>
						</td>
						<td>
							Currency
						</td>
					</tr>
					<tr>
						<td>
							<ig-percent-editor class="divHeight" [options]="interestRateOptions" [disabled]="!editorsEnabled" [(ngModel)]="interestRateOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="interestRate"></ig-percent-editor>
						</td>
						<td>
							Interest rate
						</td>
					</tr>
					 <tr>
						<td>
							<ig-date-picker class="divHeight" [options]="startDateOfCreditOptions" [disabled]="!editorsEnabled" [(ngModel)]="startDateOfCreditOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="startDateOfCredit"></ig-date-picker>
						</td>
						<td>
							Start date of the credit
						</td>
					</tr> 
					<tr>
						<td>
							<ig-numeric-editor class="divHeight" [options]="termOptions" [disabled]="!editorsEnabled" [(ngModel)]="termOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="term"></ig-numeric-editor>
						</td>
						<td>
							Term
						</td>
					</tr>
					<tr>
						<td>
							<ig-checkbox-editor class="divHeight" [checked]="salaryInBankOptions.checked" [disabled]="!editorsEnabled" [(ngModel)]="salaryInBankOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="salaryInBank" (click)="checkboxClicked()"></ig-checkbox-editor>
							<label> Is your salary transferred in the bank</label>
						</td>
					</tr>
					<tr>
						<td>
							<ig-mask-editor class="divHeight" [options]="pinOptions" [disabled]="!editorsEnabled" [(ngModel)]="pinOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="pin" [hidden]="!show"></ig-mask-editor>
						</td>
					</tr>
					<tr>
						<td>
							<div class="divHeight"><input id="btnReset" type="button" value="Reset" (click)="reset()" /> 
							<input id="btnEnable" type="button" value="Enable" [disabled] = "!btnEnabled" (click)="disableEditors(false)"/> 
							<input type="submit" id="submitBtn" value="Submit" /></div>
						</td>
					</tr>
				</table>
			</form>
		</div>

		<div id="valuesContainer" [hidden]="!showValuesContainer">
			<h3>Credit Details:</h3>
			<p>Dear Madam / Sir {{lastNameOptions.value}}, following are the details for your loan: </p>
			<br>
			<table class="creditTable">
				<tr>
					<td>
						Your credit:
					</td>
					<td>
						<div class="divHeight">
							<ig-currency-editor [options]="resultOptions" [currencySymbol]="resultOptions.currencySymbol" [(ngModel)]="resultOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="resultCredit" ></ig-currency-editor>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						You will have to return
					</td>
					<td>
						<div class="divHeight">
							<ig-currency-editor [options]="returnValueOptions" [currencySymbol]="returnValueOptions.currencySymbol" [(ngModel)]="returnValueOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="returnValue"></ig-currency-editor>
						</div>
					</td>
				</tr>
				<tr>
					<td>
						Your monthly payment will be
					</td>
					<td>
						<div class="divHeight">
							<ig-currency-editor [options]="monthlyPaymentOptions" [currencySymbol]="monthlyPaymentOptions.currencySymbol" [(ngModel)]="monthlyPaymentOptions.value" 
							[ngModelOptions]="{standalone: true}" widgetId="monthlyPaymentValue"></ig-currency-editor>
						</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
	`,
	styles: [`
	#container {
		width: 100%;
		min-width: 900px;
		max-width: 900px;
		display: inline-block;
		background-image: url("src/app/assets/logo.jpg");
		background-size: 90%;
		background-repeat: no-repeat;
		background-position: right bottom;
	}

	#igCheckboxEditorsContainer {
		top: 0px;
		left: 0px;
		height: 500px;
		width: 480px;
		padding-top: 15px;
		float: left;
		font-size: 14px;
	}

	#valuesContainer {
		top: 0px;
		right: 0px;
		height: 500px;
		width: 100%;
		padding-top: 15px;
		font-size: 14px;
	}

		#valuesContainer.p {
			font-size: 14px;
		}
		@media only screen and (max-width:780px){
			#igCheckboxEditorsContainer
			{
				float: none;
				height: auto;
			}
			#valuesContainer{
				margin-top: 20px;
			}
			 #container{
				 background-image:none;
			 }
		}`]
})
export class $(ClassName)Component {
	public show = false;
	public showValuesContainer = false;
	public btnEnabled = false;
	public editorsEnabled = true;
	public listData = ["EUR", "USD", "GBP"];

	public doOnLoad;
	public getResult;
	public reset;
	public onSubmit;
	public disableEditors;
	public checkboxClicked;

	public firstNameOptions: IgTextEditor;
	public lastNameOptions: IgTextEditor;
	public creditAmountOptions: IgNumericEditor;
	public currencyOptions: IgTextEditor;
	public interestRateOptions: IgPercentEditor;
	public startDateOfCreditOptions: IgDatePicker;
	public termOptions: IgNumericEditor;
	public salaryInBankOptions: IgCheckboxEditor;
	public pinOptions: IgMaskEditor;
	public resultOptions: IgCurrencyEditor;
	public returnValueOptions: IgCurrencyEditor;
	public monthlyPaymentOptions: IgCurrencyEditor;

	constructor() {
		this.firstNameOptions = {
		};

		this.lastNameOptions = {
			toUpper: true
		};
		this.creditAmountOptions = {
			placeHolder: "e.g. 3000",
			value: 1000,
			minValue: 500,
			maxValue: 10000
		};
		this.currencyOptions = {
			buttonType: "dropdown",
			listItems: this.listData,
			visibleItemsCount: 2,
			value: "EUR"
		};
		this.interestRateOptions = {
			placeHolder: "Interest rate",
			displayFactor: 1,
			value: 8.70,
			minValue: 6.70,
			maxValue: 16
		};
		this.startDateOfCreditOptions = {
			placeHolder: "e.g. " + new Date().getDay() + "/10/" + new Date().getFullYear(),
			minValue: new Date(2015, 5, 1),
			maxValue: new Date(2020, 11, 31),
			value: new Date(),
			locale: "en",
			regional: "en"
		};
		this.termOptions = {
			placeHolder: "Term (months)",
			value: 24,
			minValue: 6,
			maxValue: 120,
			buttonType: "spin",
			spinDelta: 6
		};
		this.salaryInBankOptions = {
			value: false,
			checked: false
		};
		this.pinOptions = {
			placeHolder: "Enter your PIN",
			inputMask: "LL-000",
			show: this.show
		};
		this.resultOptions = {
			readOnly: true,
			width: 150
		};
		this.returnValueOptions = {
			readOnly: true,
			width: 150
		};
		this.monthlyPaymentOptions = {
			readOnly: true,
			width: 150
		};

		this.checkboxClicked = () => {
			this.show = !this.show;
		};

		this.doOnLoad = () => {
			this.showValuesContainer = false;
		};

		this.onSubmit = () => {
			// calculate the total amount of the credit
			const sumToGive = this.creditAmountOptions.value;
			const loanPeriod = this.termOptions.value;
			const salaryIsInBank = this.salaryInBankOptions.value;
			let selectedInterestRate = this.interestRateOptions.value;

			if (salaryIsInBank) {
				selectedInterestRate -= 1;
			}

			const monthlyPaymentNoInterestRate = sumToGive / loanPeriod;
			const interestRate = parseFloat(selectedInterestRate) / 100.0;
			const monthlyInterestRate = monthlyPaymentNoInterestRate * interestRate;
			const monthlyPaymentInterestRate = monthlyPaymentNoInterestRate + monthlyInterestRate;
			const sumToReceive = monthlyPaymentInterestRate * loanPeriod;
			const bankDividend = sumToReceive - sumToGive;

			this.getResult(sumToGive, sumToReceive, monthlyPaymentInterestRate);
			this.disableEditors(true);
		};

		this.reset = () => {
			this.firstNameOptions.value = "";
			this.lastNameOptions.value = "";
			this.creditAmountOptions.value = 1000;
			this.currencyOptions.value = "EUR";
			this.interestRateOptions.value = 8.70;
			this.startDateOfCreditOptions.value = new Date();
			this.termOptions.value = 24;
			this.salaryInBankOptions.value = false; //has value() for both IgCheckboxEditor and IgCheckboxEditorComponent.
			this.pinOptions.value = "";
			this.disableEditors(false);
			this.show = false;
		};

		this.disableEditors = (disable) => {
			this.editorsEnabled = !disable;
			this.btnEnabled = disable;

			if (!disable) {
				this.resultOptions.value = null;
				this.returnValueOptions.value = null;
				this.monthlyPaymentOptions.value = null;
			}
		};

		this.getResult = (creditAmount, getSumToReceive, getMonthlyPaymentInterestRate) => {
			this.showValuesContainer = true;
			let currencySymbol;
			const selectedCurrency = this.currencyOptions.value;
			const returnAmount = Math.round(getSumToReceive).toFixed(2);
			const monthlyPayment = Math.round(getMonthlyPaymentInterestRate).toFixed(2);

			switch (selectedCurrency) {
				case "EUR":
					currencySymbol = "€";
					break;
				case "USD":
					currencySymbol = "$";
					break;
				case "GBP":
					currencySymbol = "£";
					break;
				default:
					currencySymbol = "€";
			}

			this.resultOptions.currencySymbol = currencySymbol;
			this.resultOptions.value = creditAmount;

			this.returnValueOptions.currencySymbol = currencySymbol;
			this.returnValueOptions.value = returnAmount;

			this.monthlyPaymentOptions.currencySymbol = currencySymbol;
			this.monthlyPaymentOptions.value = monthlyPayment;
		};
	}
}
