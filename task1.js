function lengthofLongestSubstring (s)
{
    let n = s.length;
    let longest = 0;
    let left = 0;

    let charIndexMap = new Map();
    
    for ( let right = 0; right < n; right++) {
        if 
    (charIndexMap.has(s[right])) {
    (left = Math.max(charIndexMap.get(s[right])) + 1, left);
    }
     charIndexMap.set(s[right]),right;
     longest = Math.max(longest,right -left +1);
}
     return longest;

}
