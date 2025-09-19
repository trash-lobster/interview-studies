var maxArea = function(height) {
    // keep track of max height we have achieved
    let maxHeight = 0;
    // two pointer, start and end (l and r)

    let l = 0;
    let r = height.length - 1;

    while ( l < r ) {
        const area = Math.min(height[l], height[r]) * (r - l);
        maxHeight = Math.max(maxHeight, area);
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxHeight
};