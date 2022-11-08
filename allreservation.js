let collection = []

function submit() {
    let fname = document.getElementById("fname")
    let number = document.getElementById("number")
    let day = document.getElementById("day")
    let datetime = document.getElementById("datetime")
    let person = document.getElementById("person")

    let obj = {}

    obj.fname = fname.value;
    obj.number = number.value;
    obj.day = day.value;
    obj.datetime = datetime.value;
    obj.person = person.value

    collection.push(obj)
    update()
    console.log(collection)

}

function update() {
    localStorage.setItem("data", JSON.stringify(collection))
}

let booktable = document.getElementById('booktable');
booktable.addEventListener('click', submit)