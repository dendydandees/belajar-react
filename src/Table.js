import React, { Component } from 'react'

/* 2. Create a simple component
2.1 simple component use ES6 arrow function
(Lanjut ke line 55)
*/
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

/* diganti oleh props pada point 3.1
const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    )
}
*/


/* 3.5 memetakan data props yang berupa objek dalam array
- props dikirimkan sebagai parameter,
- map untuk memetakan array dan mengembalikan table row untuk setiap objek dalam array, hasilnya akan terdapat di dalam variabel rows sebagai expression
- key digunakan sebagai index untuk tiap row. Pada react keys digunakan untuk mengidentifikasi tiap list item. 
(SELESAI)
*/
/* 4.5 merender button pada component 
- index sebagai parameter untuk acuan filter pada function mengetahui item yang akan di remove
- pada button diberikan onClick() untuk mengirimkan function removeCharacter()
(lanjut ke line 74)
*/
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key = { index }>
                <td>{ row.name }</td>
                <td>{ row.job }</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{ rows }</tbody>
}

class Table extends Component {
    render() {
        //3.3 Data yang diterima dari App.js didefiniskan menggunakan ES6 property shorthand (lanjut ke line 62)
        //4.6 Mendefinisikan function sama seperti pada 3.3 (lanjut ke line 72)
        const { characterData, removeCharacter } = this.props

        return (
            //2.2 simple component digunakan oleh <table>, dengan syarat harus berada difile yang sama (lanjut ke line 64)
            //3.4 Data yang didefinisikan di line 54 dimasukan sebagai properties (lanjut ke line 48)
            //4.7 Function yang didefinisikan pada line 65 dimasukan sebagai properties sama seperti 3.4 (lanjut ke line)
            <table>
                <TableHeader />
                <TableBody characterData = { characterData } removeCharacter = { removeCharacter } />
            </table>
        )
    }
}

/*2.3 export component
- (Lanjut ke App.js line 6)
*/
export default Table