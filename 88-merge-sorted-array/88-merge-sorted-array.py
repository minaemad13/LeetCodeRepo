class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        
        # replace=lambda a,b,s:a[:s]+b+a[s+len(b):]
        # nums1 = replace(nums1,nums2,m)
        nums1[m:len(nums1)]=nums2
        nums1.sort()
             
