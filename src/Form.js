import React from 'React';

import sanitizeEmail from './sanitizeEmail';

export default class Form extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      email: '',
    };
  }

  render() {
    const {email} = this.state;

    return (
      <form>
        <label htmlFor="id-1" style={{marginRight: '8px'}}>
          Email
        </label>
        <input
          id="id-1"
          onChange={this._handleChangeEmail}
          placeholder="e.g. name@example.com"
          type="email"
          value={email}
        />
      </form>
    );
  }

  _handleChangeEmail = (e) => {
    this.setState({
      email: sanitizeEmail(e.currentTarget.value),
    });
  }
}
