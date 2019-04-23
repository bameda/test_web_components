import {
  LitElement,
  html,
  css,
  property,
  customElement
} from "lit-element";

@customElement("weekdays-selector")
export default class WeekDaysSelector extends LitElement {
  @property()
  selectedDays = {
    MONDAY: false,
    TUESDAY: false,
    WEDNESDAY: false,
    THURSDAY: false,
    FRIDAY: false,
    SATURDAY: false,
    SUNDAY: false
  };

  static get styles() {
    return css`
      :host {
        align-items: center;
        max-width: 24rem;
        display: flex;
        justify-content: center;
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

  render() {
    return html`
      <div class="week-days-selector">
        <div class="day">
          <input id="mon" name="mon" type="checkbox" value="MONDAY" ?checked="${this.selectedDays["MONDAY"]}" />
          <label for="mon">MON</label>
        </div>
        <div class="day">
          <input id="tue" name="tue" type="checkbox" value="TUESDAY" ?checked="${this.selectedDays["TUESDAY"]}" />
          <label for="tue">TUE</label>
        </div>
        <div class="day">
          <input id="wed" name="wed" type="checkbox" value="WEDNESDAY" ?checked="${this.selectedDays["WEDNESDAY"]}" />
          <label for="wed">WED</label>
        </div>
        <div class="day">
          <input id="thu" name="thu" type="checkbox" value="THURSDAY" ?checked="${this.selectedDays["THURSDAY"]}" />
          <label for="thu">THU</label>
        </div>
        <div class="day">
          <input id="fri" name="fri" type="checkbox" value="FRIDAY" ?checked="${this.selectedDays["FRIDAY"]}" />
          <label for="fri">FRI</label>
        </div>
        <div class="day">
          <input id="sat" name="sat" type="checkbox" value="SATURDAY" ?checked="${this.selectedDays["SATURDAY"]}" />
          <label for="sat">SAT</label>
        </div>
        <div class="day">
          <input id="sun" name="sun" type="checkbox" value="SUNDAY" ?checked="${this.selectedDays["SUNDAY"]}" />
          <label for="sun">SUN</label>
        </div>
      </div>
    `;
  }
}
