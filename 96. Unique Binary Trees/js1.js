var numTrees = function (n) {

    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += (dp[j] * dp[i - j - 1]);
        }
        dp[i] = sum;
    }
    return dp[n];

};