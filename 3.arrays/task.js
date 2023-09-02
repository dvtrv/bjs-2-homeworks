


function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((number, id) => number === arr2[id]);
}

function getUsersNamesInAgeRange(users, gender) {
    let a = users.filter((users) => users.gender === gender);
    console.log(a);
    if (a.length === 0) {
        return 0;
    }
    let b = a.reduce((acc, item) => acc + item.age, 0);
    let c = b / a.length;
    return c;
}