class Solution:
    def reverse(self, x: int) -> int:
        res=0
        if x > 0:
            res += int(str(x)[::-1])
        elif  x < 0:
            res += int(str(x)[:0:-1]) * -1
        else:
            res += x
        if res not in range(pow(-2, 31), pow(2, 31) - 1):
            return 0
        return res
