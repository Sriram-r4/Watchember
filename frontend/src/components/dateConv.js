export function dateConv(str) {
    var arr = str.split('-');
    return arr[2] + "-" + arr[1] + "-" + arr[0];
}