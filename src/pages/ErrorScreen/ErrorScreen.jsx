import React from 'react'
import '../ErrorScreen/StyleErrorScreen.css'

const ErrorScreen = () => {

   return (
      <>
      <body className='bodyErrorMG '>
      <div>ErrorScreen</div>
      <header ClassName='container text-center py-4'>
         <img src='./src/assets/logoPagina2.png' alt='Logo de la página' ClassName='img-fluid logoImgMG' />
      </header>
         <div ClassName='container text-center py-5'>
            <img src='./src/assets/404.png' alt='Error 404' ClassName='img-fluid errorImgMG' />
         </div>
         <div ClassName='container text-center pb-5'>
            <h1 ClassName='numero404MG '>no se puedo conectar</h1>
            <a href='/' ClassName='btn btn-primary volverBtnMG'>Volver a la página principal</a>
         </div>
         <footer ClassName=' container text-center py-4'>
            <p ClassName='copyrightMG'>© 2023 Nombre de la Página | Disculpa las molestias</p>
         </footer>
         
      </body>
      
      </>
   )
}

export default ErrorScreen