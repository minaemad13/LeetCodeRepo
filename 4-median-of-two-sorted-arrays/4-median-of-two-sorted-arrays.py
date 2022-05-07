class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        merged = nums1+nums2
        merged1= sorted(merged)
    
        if len(merged1) % 2 == 1:
            indx=int(len(merged1)/2)
            return merged1[indx]
        if len(merged1) % 2 == 0 :
            indx = int(len(merged1) / 2)
            median= (merged1[indx]+merged1[indx-1])/2
            return median