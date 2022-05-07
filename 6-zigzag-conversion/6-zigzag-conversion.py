class Solution:
    def convert(self, s: str, numRows: int) -> str:
        str=""
        step = 2 * numRows - 2
        if s is None and numRows <= 0:
            return ""
        if numRows == 1:
            return s
        for i in range(0, numRows):
            for j in range(i, len(s), step):
                str += s[j]
                if i != 0 and i != numRows - 1 and (j + step - 2 * i) < len(s):
                    str += s[j + step - 2 * i]
                    
        return str