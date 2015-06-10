

	var numerator;
	var  denominator;

	function rationalNumber(numerator1, denominator2){
		numerator = numerator1;
		denominator = denominator2;
	}


	function getDenominator() {
		return denominator;
	}

	function setDenominator(denominator) {
		this.denominator = denominator;
	}

	function getNumerator() {
		return numerator;
	}

	function setNumerator(numerator) {
		this.numerator = numerator;
	}


	function RationalNumber addRational( rn) {
		RationalNumber rn1 = new RationalNumber();
		// x1*y2 + x2*y1
		var  top = (this.numerator * rn.getDenominator())
				+ (this.denominator * rn.getNumerator());
		// y1*y2
		var  bottom = this.denominator * rn.getDenominator();
		
		rn1.setDenominator(bottom);
		rn1.setNumerator(top);
		return rn1;
	}

	private RationalNumber subRational(RationalNumber rn) {
		RationalNumber rn1 = new RationalNumber();
		// x1*y2 - x2*y1
		var top = (this.numerator * rn.getDenominator())
				- (this.denominator * rn.getNumerator());
		// y1*y2
		var bottom = this.denominator * rn.getDenominator();
		rn1.setDenominator(bottom);
		rn1.setNumerator(top);
		return rn1;
	}

	private RationalNumber multRational(RationalNumber rn) {
		RationalNumber rn1 = new RationalNumber();
		var top = (this.numerator * rn.getNumerator());
		// y1*y2
		var bottom = this.denominator * rn.getDenominator();
		rn1.setDenominator(bottom);
		rn1.setNumerator(top);
		return rn1;
	}
	private RationalNumber divRational(RationalNumber rn) {
		RationalNumber rn1 = new RationalNumber();
		var top = (this.numerator * rn.getDenominator());
		// y1*y2
		var bottom = this.denominator * rn.getNumerator();
		rn1.setDenominator(bottom);
		rn1.setNumerator(top);
		return rn1;
	}
	function toString(){
		var message = this.numerator + "/" + this.denominator;
		return message;
	}
	function RationalNumber Simplify() {
		RationalNumber number;
		var i = 2;
		var min = 0;
		var answer1 = 'n';
		var answer2 = 'n';

		if (numerator < 0) {
			answer1 = 'y';
			numerator = numerator * -1;
		}

		if (denominator < 0) {
			answer2 = 'y';
			denominator = denominator * -1;
		}

		if (numerator >= denominator) {
			min = denominator;
		}

		else {
			min = numerator;
		}

		while (i <= min) {
			if (numerator % i == 0 && denominator % i == 0) {
				numerator = numerator / i;
				denominator = denominator / i;
				if (numerator >= denominator) {
					min = denominator;
				} else {
					min = numerator;
				}

			} else {
				i++;
			}

		}
		if (denominator == 0) {

		}
		else if (numerator == 0) {

		}
		else {
			if (answer1 == 'y') {
				numerator = numerator * -1;
			}
			if (answer2 == 'y') {
				denominator = denominator * -1;
			}

			if (answer1 == 'y' && answer2 == 'y') {
				numerator = numerator * -1;
				denominator = denominator * -1;
			}
		}
		if (denominator == 1) {

		}
		if (denominator == -1) {
			numerator = numerator * -1;
		}
		number = new RationalNumber(numerator, denominator);
	return number;
	}

