export function number_to_roman_numeral(num) {
    if (isNaN(num)) {
        return NaN;
    }
    const mapping = ["0", "I", "II", "III", "IV", "V","VI","VII","VIII","IX", "X", "XI", "XII", "XIII", "XIV", "XV","XVI","XVII","XVIII","XIX","XX","XXI"];
    if(num >= 0 && num <= 21){
        return mapping[num];
    }
    return "";
}