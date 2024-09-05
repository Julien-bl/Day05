document.addEventListener('DOMContentLoaded', function() {
    let newDescription = 0
    function addtwo() {newDescription = newDescription++}

    addtwo()
    const description = document.getElementsByTagName("p")
   for (let i = 0; i < description.length; i++ )
    document.getElementsByTagName("p")[i].innerText = i
   })
