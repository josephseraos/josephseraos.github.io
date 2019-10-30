import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Videos from '../videos/Videos'

const Home = props => (
    <main>
        <h4>Joseph Soares Alcântara</h4>
        <p>
            Graduado em Engenharia da Computação (2013) e Mestre em Engenharia Elétrica e de Computação (2015) pela
            Universidade Federal do Ceará (UFC), <em>campus</em> Sobral.
        </p>

        <p>
            Atuou em 2017 e 2018 como Professor Substituto no curso de Engenharia da Computação da Universidade Federal do Ceará (UFC),
            <em>campus</em> de Sobral. Atuou em 2016 e 2019 como professor na Faculdade Ieducare (FIED). Atua desde 2016 como
            Tutor Presencial no colégio Ethos, em Sobral, pela Universidade Anhanguera.
        </p>

        <p>
            É desenvolvedor de sistemas autônomo, atuando em projetos de controle de restaurantes, e de emissão de cupom fiscal eletrônico.
        </p>

        <p>
            Endereço eletrônico na Plataforma Lattes
            : <a href="http://lattes.cnpq.br/0434586084299668" target="_blank" rel="noopener noreferrer nofollow">http://lattes.cnpq.br/0434586084299668</a>
        </p>
    </main>
)


const Contatos = props => (
    <main>
        <h4>Joseph Soares Alcântara</h4>
        <address>
            E-mail: <a href="mailto:josephsoaresalcantara@gmail.com">josephsoaresalcantara@gmail.com</a>.<br />
            Tim / WhatsApp: <a href="https://wa.me/5588999190414" target="_blank" rel="noopener noreferrer">(88) 9-9919-0414</a><br />
            Claro: (88) 9-9227-5490<br />
            Sobral-CE
        </address>
    </main>
)


const Sistemas = props => (
    <main>
        <h4>Sistemas</h4>
        <p>MultiPSystem - Sistema para bares, pizzarias, restaurantes, lanchonetes e afins.</p>
    </main>
)


const Servicos = props => (
    <main>
        <h4>Serviços</h4>
        <ul>
            <li>Aulas de reforço de Programação de Computadores.</li>
            <li>Desenvolvimento de sistemas e de websites.</li>
            <li>Assistência técnica em computadores e notebooks.</li>
            <li>Fotografia de eventos: aniversário, batizado, comunhão, cristma.</li>
        </ul>
    </main>
)


const Docencia = props => (
    <main>
        <h4>Ethos (Anhanguera) - Tutor presencial</h4>
        <h5>Engenharia da Computação</h5>
        <p>
            Acesso ao portal (Colaborar): <a href="https://colaboraread.com.br" target="_blank" rel="noopener noreferrer">https://colaboraread.com.br</a><br />
            Acesso ao portal (antigo): <a href="https://ead.avaeduc.com.br" target="_blank" rel="noopener noreferrer">https://ead.avaeduc.com.br</a>
        </p>

        <hr/>

        <h4>UFC</h4>
        <h5>Engenharia da Computação</h5>
        
        <h6>2018.2</h6>
        <ul>
            <li>Arquitetura e Organização de Computadores</li>
            <li>Paradigmas de Linguagens de Programação</li>
            <li>Tecnologias Web</li>
            <li>Sistemas Operacionais</li>
            <li>Programação Computacional</li>
        </ul>
        
        <h6>2018.1</h6>
        <ul>
            <li>Técnicas de Programação</li>
            <li>Arquitetura e Organização de Computadores</li>
            <li>Paradigmas de Linguagens de Programação</li>
            <li>Tecnologias Web</li>
            <li>Sistemas Operacionais</li>
            <li>Programação Computacional</li>
        </ul>
        
        <h6>2017.2</h6>
        <ul>
            <li>Arquitetura e Organização de Computadores</li>
            <li>Paradigmas de Linguagens de Programação</li>
            <li>Programação Computacional</li>
            <li>Sistemas Operacionais</li>
        </ul>

        <h6>2017.1</h6>
        <ul>
            <li>Inteligência Computacional Aplicada</li>
            <li>Sistemas Operacionais</li>
            <li>Qualidade de Software</li>
            <li>Sistemas Embarcados</li>
        </ul>

        <hr/>

        <h4>FIED</h4>
        <h5>Sistemas de Informação</h5>
        <h6>2019.1</h6>
        <ul>
            <li>Teoria da Computação e Linguagens Formais</li>
            <li>Tópicos em Programação Web</li>
        </ul>

        <h6>2016.2</h6>
        <ul>
            <li>Comércio Eletrônico</li>
        </ul>

        <h6>2016.1</h6>
        <ul>
            <li>Linguagem de Programaçõ 1</li>
            <li>Banco de Dados 1</li>
        </ul>
    </main>
)


const Livros = props => (
    <main>
        <h4>Livros</h4>
        <p>Lista de livros</p>
    </main>
)


const Cursos = props => (
    <main>
        <h4>Cursos</h4>
        <p>Lista e agenda de cursos</p>
    </main>
)


const Fotos = props => (
    <main>
        <h4>Fotos</h4>
        <p>Em breve estarei divulgando aqui, o meu portifólio fotográfico.</p>
    </main>
)


export default props => (
    <Switch>
        <Route path='/home' component={ Home } />
        <Route path='/contatos' component={ Contatos } />
        <Route path='/sistemas' component={ Sistemas } />
        <Route path='/servicos' component={ Servicos } />
        <Route path='/docencia' component={ Docencia } />
        <Route path='/livros' component={ Livros } />
        <Route path='/cursos' component={ Cursos } />
        <Route path='/videos' component={ Videos } />
        <Route path='/fotos' component={ Fotos } />
        <Redirect exact from='/' to='/home' />
        <Redirect from='*' to='/' />
    </Switch>
)
