import html from '/public/html_css.jpeg'
import disney from '/public/disney.png'
import coder from '/public/onlinecoder.jpeg'
import responsive from '/public/responsive.jpeg'
import tictac from '/public/tictac.jpeg'
import webdev from '/public/webdev.jpeg'

export default function Projects() {
    return (
        
            <div className="container mb-4" >
                <h1 className="text-danger text-center mb-4">My Projects</h1>
                <div className="container text-center">
                    <div className="row col-md -6 " >
                        <div className="col">
                        <img className="img img-thumbnail mb-5  w-75" src={html} alt="html css"  />
                            <img className="img img-thumbnail mb-4 w-75" src={disney} alt="disney"  />
                            <img className="img img-thumbnail mt-5 mb-4 w-75" src={tictac} height={500} alt="tic tac"  />                                              
                            
                        </div>
                        <div className="col">
                        <img className="img img-thumbnail w-75 mb-5" src={coder} alt="coder" />
                            <img className="img img-thumbnail mb-4 w-75" src={responsive} alt="responsive" />
                            <img className="img img-thumbnail w-75" src={webdev} alt="web dev" />
                        </div>
                    </div>
                </div>
                <hr className =" w-75 mx-auto border border-danger border-2 opacity-50"/>
                {/* carosel */}
                <div id="carouselExampleAutoplaying" className="carousel slide my-5" data-bs-ride="carousel">
  <div className ="carousel-inner">
    <div className ="carousel-item active">
      <img src={webdev} className="d-block w-50 mx-auto" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img className="d-block w-50 mx-auto" src={html} alt="html css"/>
    </div>
    <div className ="carousel-item">
      <img  src={disney}  className="d-block w-50 mx-auto" alt="..." />
    </div>
  </div>
  <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Previous</span>
  </button>
  <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
  <hr className =" w-75 mx-auto border border-danger border-2 opacity-50"/>
</div>

{/* end of carosoul */}

                      
        </div>
                     )
}