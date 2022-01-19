import  React from 'react'
import './App.css'

const App = () => {
    //Aqui estamos criando o elemento direto, onde não podemos usar as tags 
    // return React.createElement('a', {href: 'https://www.linkedin.com/in/alessandramurat/'}, 'Alessandra Murat')

    //Usando o jsx

    return <a href='https://www.linkedin.com/in/alessandramurat/'> Alessandra Murat</a>
}

export default App;