import {
  LitElement,
  html,
  css,
  property,
  customElement
} from "lit-element";

type Day = 
  "MON" |
  "TUE" |
  "WED" |
  "THU" |
  "FRI" |
  "SAT" |
  "SUN";

@customElement("weekdays-selector")
export default class WeekDaysSelector extends LitElement {
  @property({ type: Array, reflect: false })
  value: Day[] = [];

  static get styles() {
    return css`
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
    `;
  }

  onChange = (event: Event) => {
    const val = (<HTMLInputElement>event.target)!.value;

    if (this.value.includes(<Day>val)) {
      this.value = this.value.filter(v => v !== val);
    }
    else {
      this.value = [...this.value, <Day>val];
    }

    const evt = new Event('change');
    this.dispatchEvent(evt);
  };

  render() {
    return html`
      <div class="week-days-selector">
        <div class="day">
          <input id="mon" name="mon" type="checkbox" value="MON" ?checked="${this.value.includes("MON")}" @change="${this.onChange}" />
          <label for="mon">MON</label>
        </div>
        <div class="day">
          <input id="tue" name="tue" type="checkbox" value="TUE" ?checked="${this.value.includes("TUE")}" @change="${this.onChange}" />
          <label for="tue">TUE</label>
        </div>
        <div class="day">
          <input id="wed" name="wed" type="checkbox" value="WEDY" ?checked="${this.value.includes("WED")}" @change="${this.onChange}" />
          <label for="wed">WED</label>
        </div>
        <div class="day">
          <input id="thu" name="thu" type="checkbox" value="THU" ?checked="${this.value.includes("THU")}" @change="${this.onChange}" />
          <label for="thu">THU</label>
        </div>
        <div class="day">
          <input id="fri" name="fri" type="checkbox" value="FRI" ?checked="${this.value.includes("FRI")}" @change="${this.onChange}" />
          <label for="fri">FRI</label>
        </div>
        <div class="day">
          <input id="sat" name="sat" type="checkbox" value="SAT" ?checked="${this.value.includes("SAT")}" @change="${this.onChange}" />
          <label for="sat">SAT</label>
        </div>
        <div class="day">
          <input id="sun" name="sun" type="checkbox" value="SUN" ?checked="${this.value.includes("SUN")}" @change="${this.onChange}" />
          <label for="sun">SUN</label>
        </div>
      </div>
    `;
  }
}