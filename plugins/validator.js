class ValidatorService {
  constructor(context) {
    this.context = context;
  }

  isRequired(content) {
    return content.length === 0;
  }

  isEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
  }

  isPhone(phone) {
    const regExp = /^[0-9]+$/;
    return regExp.test(String(phone).toLowerCase());
  }
}

export default (context, inject) => {
  inject("validatorService", new ValidatorService(context));
};
