module.exports = function getZerosCount(number, base) {
    var result = number;
    for (var i = 2; i <= base; i++) {
        if (base % i === 0) {
            var count1 = 0;
            while (base % i === 0) {
                count1++;
                base /= i;
            }
            var count2 = 0;
            var t = number;
            while (t / i > 0) {
                count2 += Math.floor(t / i);
                t /= i;

            }
            result = Math.min(result, count2 / count1);
        }
    }
    return Math.floor(result)
};