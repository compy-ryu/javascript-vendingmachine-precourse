import Component from '../../core/Component.js';
import { $ } from '../../utils/element-utils.js';

export default class ChargeAmount extends Component {
  init() {
    this._props.state.add(this);
  }

  htmlTemplate() {
    const { state } = this._props;
    return `
    <h3>금액 투입</h3>
    <div>
      <input type="number" id="charge-input" placeholder="투입할 금액"/>
      <button id="charge-button">투입하기</button>
    </div>
    <p>투입한 금액: <span id="charge-amount">${state.value}</span></p>
    `;
  }

  bindEvent() {
    this.addEvent('click', '#charge-button', this.handleCharge.bind(this));
    this.addEvent('keyup', '#charge-input', this.handleCharge.bind(this));
  }

  handleCharge(event) {
    if (event.type === 'keyup' && event.key !== 'Enter') return false;

    const { putAmount } = this._props;
    putAmount($('#charge-input').value);
  }
}