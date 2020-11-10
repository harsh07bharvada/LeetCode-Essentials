class Solution {
    public int[] productExceptSelf(int[] nums) {
        
        int len = nums.length;
        int[] leftProduct = new int[len];
        int[] rightProduct = new int[len];
        int[] res = new int[len];
        int l = 1,r=1;
        for(int i =0;i<len;i++)
        {
            l*= nums[i];
            leftProduct[i]=l;
        }
        l=1;
        for(int i =len-1;i>=0;i--)
        {
            l*= nums[i];
            rightProduct[i]=l;
        }
        //System.out.println(Arrays.toString(leftProduct));
        //System.out.println(Arrays.toString(rightProduct));
        for(int i = 0;i<len;i++)
        {
            if(i-1<0)
            {
                res[i]= rightProduct[i+1];
            }
            else if(i+1 == len)
            {
                res[i] = leftProduct[i-1];
            }
            else{
                res[i] = rightProduct[i+1] * leftProduct[i-1];
            }
        }
        
        return res;
        
    }
}