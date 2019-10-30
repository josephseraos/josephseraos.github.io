import './Header.css'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const blogLinkClicked = e => {
    e.preventDefault()

    alert('Esse link está desabilitado, pois o Blog encontra-se indisponível temporariamente.')
}

export default props => (
    <Fragment>
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">

                <div className="col-12 text-center">
                    <Link className="blog-header-logo text-dark" to="/">Joseph S. Alcântara</Link>
                </div>

            </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between justify-content-md-center">
                <Link className='p-2 text-muted' to='/home'><i className="fa fa-home"></i> Home</Link>
                <Link className='p-2 text-muted' to='/contatos'><i className="fa fa-envelope"></i> Contatos</Link>
                <Link className='p-2 text-muted' to='/sistemas'><i className="fa fa-desktop"></i> Sistemas</Link>
                <Link className="p-2 text-muted" to="/servicos"><i className="fa fa-briefcase"></i> Serviços</Link>
                <Link className="p-2 text-muted" to="/docencia"><i className="fa fa-chalkboard-teacher"></i> Docência</Link>
                {/* <Link className='p-2 text-muted' to='/livros'><i className="fa fa-book"></i> Livros</Link> */}
                {/* <Link className='p-2 text-muted' to='/cursos'><i className="fa fa-chalkboard"></i> Cursos</Link> */}
                <Link className="p-2 text-muted" to="/videos"><i className="fa fa-video"></i> Vídeos</Link>
                <Link className="p-2 text-muted" to="/fotos"><i className="fa fa-camera"></i> Fotos</Link>
                <a className="p-2 text-muted" href="http://blog.joseph-soares.com" target="_blank" rel="noopener noreferrer" onClick={blogLinkClicked}><i className="fab fa-wordpress"></i> Blog</a>
            </nav>
        </div>
    </Fragment>
)