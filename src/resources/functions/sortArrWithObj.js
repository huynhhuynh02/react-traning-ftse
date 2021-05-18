/**
 * 
 * @param {Array} array array to be sorted
 * @param {String} order sort order, must be string "asc" or "desc"
 * @param {String} itemPropsToSort path to the target props of array item obj used for sorting, each level have a dot (.) seperation
 * @returns new array that is sorted
 * 
 * Example:
 * array = [
 * {num: {id: 3}, name: "C"}, 
 * {num: {id: 1}, name: "A"}, 
 * {num: {id: 2}, name: "B"}
 * ]
 * sortArrWithObj(array, "asc", "num.id")
 */
export default function sortArrWithObj(array, order, itemPropsToSort) {
    let newArr = array;
    for (let timeLoop = 0; timeLoop < newArr.length; timeLoop++) {
        let temp = "";
        for (let index = 0; index < newArr.length - 1; index++) {
            try {
                if (order === "asc") {
                    if (itemPropsToSort) {
                        let propsArr = itemPropsToSort.split(".");
                        let curProps = newArr[index];
                        let nextProps = newArr[index + 1];
                        propsArr.forEach(element => {
                            curProps = curProps[element];
                            nextProps = nextProps[element];
                        });
                        if (curProps > nextProps) {
                            temp = newArr[index];
                            newArr[index] = newArr[index + 1];
                            newArr[index + 1] = temp;
                        }
                    } else {
                        if (newArr[index] > newArr[index + 1]) {
                            temp = newArr[index];
                            newArr[index] = newArr[index + 1];
                            newArr[index + 1] = temp;
                        }
                    }
                } else if (order === "desc") {
                    if (itemPropsToSort) {
                        let propsArr = itemPropsToSort.split(".");
                        let curProps = newArr[index];
                        let nextProps = newArr[index + 1];
                        propsArr.forEach(element => {
                            curProps = curProps[element];
                            nextProps = nextProps[element];
                        });
                        if (curProps < nextProps) {
                            temp = newArr[index];
                            newArr[index] = newArr[index + 1];
                            newArr[index + 1] = temp;
                        }
                    } else {
                        if (newArr[index] < newArr[index + 1]) {
                            temp = newArr[index];
                            newArr[index] = newArr[index + 1];
                            newArr[index + 1] = temp;
                        }
                    }
                }
            } catch (err) {
                console.log('Error with order param (must be "asc" or "desc"), current order param: ' + err);
            }
        }
    }

    return newArr;
}