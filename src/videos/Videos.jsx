import React from 'react'


const video_url = 'https://www.youtube.com/watch?v='
const img_url = 'https://img.youtube.com/vi/'

const videos = [
    {
        title: '#01 - Programação C - Preparação do ambiente Windows',
        video_id: 'f-_D-gJMVdo'
    }, {
        title: '#02 - Programação C - Preparação do ambiente Linux',
        video_id: 'Q7nj7z12czw'
    }, {
        title: '#03 - Programação C - Estrutura básica de um programa',
        video_id: '_gExehSNFVU'
    }, {
        title: '#04 - Programação C - Tipos básicos de dados',
        video_id: 'Wf5kmPRxXqA'
    }, 
]

const cols = "col-sm-6 col-md-4 col-lg-3 col-xl-2"

const Videos = props => (
    <main>
        <h4>Programação com Linguagem C</h4>
        <hr />
        <div className="row ">
            {videos.map((element, index, array) => (
                <div className={`${cols} m-auto`} style={{backgroundColor: ""}}>
                    <h6 className="text-truncate" title={element.title}>{element.title}</h6>
                    <a href={`${video_url}${element.video_id}`} title={element.title} target="_blank" rel="noopener noreferrer">
                        <img className="img-thumbnail rounded" src={`${img_url}${element.video_id}/0.jpg`} alt="" />
                    </a>
                </div>
            ))}
        </div>
    </main>
)

export default Videos
