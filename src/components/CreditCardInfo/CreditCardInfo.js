import React from 'react';
import './CreditCardInfo.css';
import PropTypes from 'prop-types';

class CreditCardInfo extends React.Component {
	render() {
		return (
			<div className="creditCard-info">
				<div className="bankName">{this.props.cardInfo.bankName}</div>
				<div className="cardNumber">{this.props.cardInfo.creditCardNumber}</div>
				<div className="secCode">{this.props.cardInfo.secCode}</div>
				<div className="validity">
					<div className="validThru">
						<ul>VALID</ul>
						<ul>THRU</ul>
					</div>
					<div className="validDate">{this.props.cardInfo.validThru}</div>
				</div>

				<div className="cardHolder-name">
					<div>
						{this.props.personName.firstName} {this.props.personName.middleName}{' '}
						{this.props.personName.lastName}
					</div>
				</div>
			</div>
		);
	}
}

export default CreditCardInfo;
