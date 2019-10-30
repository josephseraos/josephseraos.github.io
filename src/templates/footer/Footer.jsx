import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

const toTop = e => {
    e.preventDefault()
    // window.scrollTo(0, 0)

    var scrollDuration = 1000
    
    var scrollStep = -window.scrollY / (scrollDuration / 15)
    
    var scrollInterval = setInterval(function(){
        if ( window.scrollY !== 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

export default props => (
    <footer className="blog-footer">
        <p>Todos os direitos reservados.</p>
        <p>
            <Link to="/" onClick={toTop}>Voltar ao topo</Link>
        </p>
    </footer>
)
