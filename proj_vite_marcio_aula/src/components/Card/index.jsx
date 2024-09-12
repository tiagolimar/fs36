import './style.css';

export default function Card({media}){
    return (
        <div className="card-media col shadow-sm rounded-2 text-white p-2">
            <div className="row">
                <div className="col col-2">
                    <i className={" bi bi-" + media.toLowerCase()}></i>
                </div>
                <div className="col">
                    <p className="m-0 fw-bold fs-5">{media}</p>
                    <p className="m-0 subtitulo fw-light">{media}</p>
                    <p className="my-2">{media} is the biggest social online plataform</p>
                </div>
            </div>
        </div>
    )
}