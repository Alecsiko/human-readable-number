module.exports = function toReadable(number) {
    const forOnenumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const forTwonumber = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const forThreenumber = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let inputNumb = String(number);

    if (inputNumb.length == 1) {
        return forOnenumber[inputNumb];

    } else if (inputNumb.length == 2) {
        if (inputNumb > 10 && inputNumb < 20) {
            return forTwonumber[inputNumb[1]];
        } else if (inputNumb[1] == 0) {
            return forThreenumber[inputNumb[0]]
        } else {
            return forThreenumber[inputNumb[0]] + ' ' + forOnenumber[inputNumb[1]]
        }

    } else if ( inputNumb.length == 3) {
        if(inputNumb[1] == 0 && inputNumb[2] == 0){
            return forOnenumber[inputNumb[0]] + ' ' + 'hundred'
        } else if(inputNumb[2] == 0){
            return forOnenumber[inputNumb[0]] + ' ' + 'hundred' + ' ' + forThreenumber[inputNumb[1]]
        } else if (inputNumb[1] == 0) {
            return forOnenumber[inputNumb[0]] + ' ' + 'hundred' + ' ' + forOnenumber[inputNumb[2]]
        } else if (inputNumb[1] == 1) {
            return forOnenumber[inputNumb[0]] + ' ' + 'hundred' + ' ' + forTwonumber[inputNumb[2]]
        } else {
            return forOnenumber[inputNumb[0]] + ' ' + 'hundred' + ' ' + forThreenumber[inputNumb[1]] + ' ' + forOnenumber[inputNumb[2]]
        }
    }

}
