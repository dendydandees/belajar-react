import React, { Component } from 'react'

/* 5 Passing data to state (Memulai data parent dari nol)
5.1 - constructor() dibutuhkan untuk menggunakan this, dan menerima props dari parent
- menetapkan initialState ke this.state sebagai data yang kosong
(lanjut ke line 23)
*/
class Form extends Component {
    constructor (props) {
        super(props)

        this.initialState = {
            name : '',
            job : '',
        }

        this.state = this.initialState
    }

    /* 5.2 - menambahkan function yang akan berjalan setiap kali perubahan dilakukan ke input
    - Event akan dikirimkan dan set the state of form untuk memiliki name(key) dan value sebagai input
    (lanjut ke line 34)
    */
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name] : value,
        })
    }

    /* 5.6 create method submitForm() yang akan memanggil function, dan mengirimkan form state sebagai character parameter yang di defiisikan pada App.js
    - ini juga akan reset state menjadi initial state, untuk menghapus form setelah mensubmit
    (lanjut ke line 56)
    */
    submitForm = () => {
        this.props.handleSubmit( this.state )
        this.setState( this.initialState )
    }

    /* 5.3 - mengambil 2 properties dari state dan kemudian menetapkan mereka sebagai values yang sesuai dengan form keys
    - handleChange() method dijalankan sebagai onChange dari input
    (lanjut ke App.js line ke 53)
    */
    /* 5.7 menambahkan submit button yang menggunakan onClick untuk menggantikan onSubmit karena tidak menggunakan fungsionalitas pengiriman standar (SELESAI)
    */
    render() {
        const { name, job } = this.state
        return (
            <form>
                <label>Name</label>
                <input type="text" name="name" value={ name } onChange={ this.handleChange } />

                <label>Job</label>
                <input type="text" name="job" value={ job } onChange={ this.handleChange } />
                <br/>

                <input type="button" value="Submit" onClick={ this.submitForm } />
            </form>
        )
    }
}

export default Form