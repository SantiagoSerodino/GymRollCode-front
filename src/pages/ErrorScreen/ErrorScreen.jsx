import React from 'react'
import '../ErrorScreen/StyleErrorScreen.css'


const ErrorScreen = () => {

   return (
      <>
         <div className="container-fluid bodyErrorMG">
            <div className="row justify-content-center">
               <div className="col-12 col-md-6 col-lg-4">
                  <header className="text-center pt-2">
                  <img src="./src/assets/logoPagina2.png" alt="Logo de la página" className="img-fluid py-5 py-md-1 w-50" />
                  </header>
                  <div className="text-center py-4 ">
                  <img src="./src/assets/404.png" alt="Error 404" className="img-fluid w-100" />
                  </div>
                  <div className="text-center pb-2">
                  <h1 className=" text-uppercase fs-4 p-4">No se pudo conectar</h1>
                  <a href="/" className="btn  text-light bg-dark  my-2">HOME</a>
                  </div>
                  <div className=" container text-center pt-2">
                     <div className="row  copyrightMG">
                        <div className="col">
                           <p>© 2023 GymRoll</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ErrorScreen