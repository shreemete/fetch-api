fetch("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817")
    .then(response => response.json())
    .then(obj => {

        let str = `<h1>${obj.message}</h1>
                    <table>
                        <tr>
                            <th>name</th>
                            <th>office</th>
                            <th>position</th>
                            <th>salary</th>
                        </tr>`;

        for (let i = 0; i < obj.data.length; i++) {
            str += `<tr> 
                                <td> ${obj.data[i].name}</td>
                                <td> ${obj.data[i].office}</td> 
                                <td> ${obj.data[i].position}</td>
                                <td> ${obj.data[i].salary}</td>
                    </tr>`;
        }
        str += '</table>';
        document.getElementById("container").insertAdjacentHTML("beforeend", str);

        console.log(obj);
    });