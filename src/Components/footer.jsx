import footer from '/public/footer.png'
export default function Footer(){

    return(
        <>
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2 d-block mx-auto" src={footer} alt="" width="50" height="50"/>
        <small className="d-block mb-3 text-light text-center">© 2017–2021</small>
      </div>
      <div className="col-6 col-md">
        <h5 className="text-danger">Features</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5 className="text-danger">Resources</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5 className="text-danger">About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
        </>
    )
}