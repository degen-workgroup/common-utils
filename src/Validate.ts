import ValidationError from './errors/ValidationError';

const Validate = {
  poapCode(code?: string): void {
    if (code == null) {
      return;
    }
    const POAP_CODE_REGEX = /^[\w\s\W]{1,50}$/;
    if (!POAP_CODE_REGEX.test(code)) {
      throw new ValidationError(
        'Please enter a poap code: \n' +
                '- 50 characters maximum\n ' +
                '- alphanumeric\n ' +
                '- special characters: .!@#$%&,?');
    }
  },

  numberToMint(numberToMint: number): void {
    if (numberToMint >= 1000 || numberToMint <= 0) {
      throw new ValidationError('A maximum of 1000 POAPs can be minted for a single event. Please let us know if you\'d like to see this increased. ');
    }
  },

  eventName(event?: string): void {
    if (event == null) {
      return;
    }
    const POAP_EVENT_REGEX = /^[\w\s\W]{1,250}$/;
    if (!POAP_EVENT_REGEX.test(event)) {
      throw new ValidationError(
        'Please enter a valid event: \n' +
          '- 250 characters maximum\n ' +
          '- alphanumeric\n ' +
          '- special characters: .!@#$%&,?');
    }
  },
};

export default Validate;
