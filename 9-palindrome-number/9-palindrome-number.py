class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if len(str(x)) == 1 :
            return True
        else :
            str1=str(x)
            str2=str1[::-1]
            if str1 == str2 :
                return True
            else:
                return False