// 3) Create a CreditCard component based on the image I showed you, or your own credit card. Style it with CSS as I showed you. You can also use inline styles if you wish. Take in a cardInfo prop that contains the name, expiration date, credit card number, and the name of the bank.
// Valid Thru

import React from 'react';
import CreditCardInfo from '../CreditCardInfo/CreditCardInfo';
import PropTypes from 'prop-types';
import './CreditCard.css';

var creditCard = {
	personName: {
		firstName: 'MAX',
		middleName: 'L.',
		lastName: 'JHONSON',
	},
	cardInfo: {
		bankName: 'Regions Bank, Inc.',
		creditCardNumber: '1234 5567 8910 1112',
		secCode: '1234',
		validThru: '05/06/2020',
	},
};

class CreditCard extends React.Component {
	render() {
		return (
			<div className="creditCard">
				<div className="creditCard-outline">
					<CreditCardInfo
						cardInfo={creditCard.cardInfo}
						personName={creditCard.personName}
					/>
				</div>
			</div>
		);
	}
}

export default CreditCard;
