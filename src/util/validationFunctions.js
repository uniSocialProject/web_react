const emailValidation = (email) => {
    var re =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(email);
};

const passwordStrenght = (password) => {
    let passwordStrenghtPoint = 0;

    //regexs
    const isDecimal = /^(?=.*\d)/;
    const isCapitalLetter = /^(?=.*[A-Z])/;
    const isSpecialChar =
        /(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])/;

    //!tests
    //is Number ?
    isDecimal.test(password) ? passwordStrenghtPoint++ : passwordStrenghtPoint;
    //is contain capital letter?
    isCapitalLetter.test(password)
        ? passwordStrenghtPoint++
        : passwordStrenghtPoint;
    //is contain special char (!,@,<,...)?
    isSpecialChar.test(password)
        ? passwordStrenghtPoint++
        : passwordStrenghtPoint;
    //is long ?
    password.trim().length > 8
        ? passwordStrenghtPoint++
        : passwordStrenghtPoint;

    return passwordStrenghtPoint;
};

console.log(passwordStrenght('asdasD@asDDD1231'));
