import './NewsCard.css';

function NewsCard(props) {
    return(
        <div className='newsCard'>

            <div className='newsCard__info'>

                <svg className='newsCard__bookmark' width="24" height="24" viewBox="0 0 24 24">
                    <path d="M17.3333 1.33337H6.66659C6.31296 1.33337 5.97383 1.47385 5.72378 1.7239C5.47373 1.97395 5.33325 2.31309 5.33325 2.66671V21.2867C5.33304 21.551 5.41136 21.8093 5.55828 22.029C5.70519 22.2487 5.91406 22.4197 6.15838 22.5204C6.40269 22.6212 6.67143 22.647 6.93047 22.5947C7.1895 22.5424 7.42716 22.4143 7.61325 22.2267L11.9733 17.88L16.3933 22.28C16.5801 22.4658 16.8178 22.592 17.0763 22.6428C17.3348 22.6935 17.6026 22.6666 17.8458 22.5653C18.089 22.464 18.2968 22.293 18.4429 22.0737C18.5889 21.8544 18.6668 21.5968 18.6666 21.3334V2.66671C18.6666 2.31309 18.5261 1.97395 18.2761 1.7239C18.026 1.47385 17.6869 1.33337 17.3333 1.33337Z"/>
                </svg>
            
                <h1 className='newsCard__title'>
                    {props.title}
                </h1>

                <p className='newsCard__text'>
                    {props.summary}
                </p>

                <h2 className='newsCard__author'>
                    {props.author} / {props.rights}
                </h2>

                <span className='newsCard__date'>
                    {props.date}
                </span>


            </div>
        </div>


    )
}

export default NewsCard;