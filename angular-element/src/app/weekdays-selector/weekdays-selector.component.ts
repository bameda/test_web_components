import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

type Day =
  'MON' |
  'TUE' |
  'WED' |
  'THU' |
  'FRI' |
  'SAT' |
  'SUN';

@Component({
  selector: 'app-weekdays-selector',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    :host {
      max-width: 24rem;
      display: flex;
    }

    .week-days-selector {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 1rem;
      width: 100%;
    }

    .week-days-selector .day {
      position: relative;
    }

    .week-days-selector input {
      opacity: 0;
      position: absolute;
    }

    .week-days-selector label {
      align-items: center;
      background: whithe;
      border: orange solid 1px;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      height: 3rem;
      justify-content: center;
      min-width: 3rem;
      text-align: center;
      transition: background-color .2s, color .2s;
    }

    .week-days-selector input[type=checkbox]:focus + label {
      outline: blue dotted 1px;
    }

    .week-days-selector input[type=checkbox]:checked + label {
      background: orange;
      color: white;
    }
  `],
  template: `
    <div class="week-days-selector">
      <div class="day">
        <input id="mon" name="mon" type="checkbox" value="MON" [attr.checked]="valueContains('MON')" (change)="onChange($event)" />
        <label for="mon">MON</label>
      </div>
      <div class="day">
        <input id="tue" name="tue" type="checkbox" value="TUE" [attr.checked]="valueContains('TUE')" (change)="onChange($event)" />
        <label for="tue">TUE</label>
      </div>
      <div class="day">
        <input id="wed" name="wed" type="checkbox" value="WED" [attr.checked]="valueContains('WED')" (change)="onChange($event)" />
        <label for="wed">WED</label>
      </div>
      <div class="day">
        <input id="thu" name="thu" type="checkbox" value="THU" [attr.checked]="valueContains('THU')" (change)="onChange($event)" />
        <label for="thu">THU</label>
      </div>
      <div class="day">
        <input id="fri" name="fri" type="checkbox" value="FRI" [attr.checked]="valueContains('FRI')" (change)="onChange($event)" />
        <label for="fri">FRI</label>
      </div>
      <div class="day">
        <input id="sat" name="sat" type="checkbox" value="SAT" [attr.checked]="valueContains('SAT')" (change)="onChange($event)" />
        <label for="sat">SAT</label>
      </div>
      <div class="day">
        <input id="sun" name="sun" type="checkbox" value="SUN" [attr.checked]="valueContains('SUN')" (change)="onChange($event)" />
        <label for="sun">SUN</label>
      </div>
    </div>
  `
})
export class WeekdaysSelectorComponent {
  @Input()
  set value(value: string) { this._value = JSON.parse(value); }
  get value(): string { return JSON.stringify(this._value); }
  _value = [] as Day[];

  @Output()
  change = new EventEmitter();

  valueContains(day: Day): boolean {
    return this._value.includes(day);
  }

  onChange = (event: Event) => {
    const val = (event.target as HTMLInputElement).value;

    if (this._value.includes(val as Day)) {
      this._value = this._value.filter((v) => v !== val);
    } else {
      this._value = [...this._value, val as Day];
    }

    this.change.emit('change');
  }
}