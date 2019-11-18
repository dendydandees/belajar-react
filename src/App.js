/* 1. Creating Class Component
1.1 import Component sebagai properti pada react
(Lanjut ke line 32)
*/
import React, { Component } from 'react'
//2.4 import custom element (Lanjut ke line 33)
import Table from './Table'
//
import Form from './Form'

class App extends Component {
    /* 4. State
    4.1 create a state untuk memanipulasi data (data pada line 22 dipindahkan kedalam state.characters) digantikan dengan 5.1 (5.1 berada pada file Form.js)
    (lanjut ke line 36)
    */
    state = {
        characters : [
            /*
            {
                name : 'Charlie',
                job : 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
            */
        ],
    }
    
    /* 4.2 - Retrieve (mengambil) state
    - memberikan method pada state this.setState()
    (lanjut ke line 50)
    */
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters : characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    /* 5.4 - membuat function handleSubmit() yang akan mengupdate state dengan data yang sudah ada dari this.state.characters
    - menambahkan character parameter menggunakan ES6 spread operator
    (lanjut ke line 98)
    */
    handleSubmit = character => {
        this.setState({ characters : [ ...this.state.characters, character ]
        })
    }

    render () {
        //4.3 Meneruskan function kepada Component (lanjut ke line 83)
        const { characters } = this.state

        /* 3. Props 
        3.1 create simple component untuk props
        menyimpan data pada array of objects, seolah olah membawa API berbasis JSON (Lanjut ke line 37)
        
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
        */
        
        return (
        // 1.2 adding className to div element (Lanjut ke line 43)
        // 2.5 mendefinisikan <Table />, disebut dengan custom component (SELESAI)
        //3.2 mengirimkan data JSON ke child component (Lanjut ke Table.js line 55)
        // 4.4 merender button di setiap characters yang dapat memanggil function (lanjut ke Table.js line 53)
        // 5.5 merender <Form /> dengan properties dari function handleSubmit()(lanjut ke Form.js line 34)
        <div className="container">
            <h1>Hello React !</h1>
            <Form handleSubmit={ this.handleSubmit } />
            <Table characterData={ characters } removeCharacter={ this.removeCharacter } />
        </div>
        )
    }
}

/* 1.3 export Component and load in index.js
- (Lanjut ke index.js line 3)
*/
export default App