/*
myArray = [1,2,3,4,5,6,7,8,9];
function my_max(Array) {
    i = 0;
    max = Array[i];
    while (i < Array.length) {
        i++;
        if (max < Array[i]) {
            max = Array[i];
            console.log(max);
        }
    }
    return max
}
mmax = my_max(myArray);
alert(mmax);

myString = "abcdefg";
function vowel_count(String) {
    return String.length;
};
mvowel = vowel_count(myString);
alert(mvowel);
*/

function reverse(st) {
    var i = st.length;
    var re = "";
    while (i > 0) {
        re = re + st[i-1];
        i--;
    }
    return re;
};
mreverse = reverse("This is a string");
alert(mreverse);

/*
for(var i=st.length; i<st.length; i--) {
Return my_Max()
}
*/

/* 0430133818 An Levine */