import './news.css';
import Sidebar from '../../elements/sidebar/sidebar';
import NewsCard from '../../blocks/NewsCard/NewsCard';

function News() {
    return (
        <div className='news'>

            <header>
                <Sidebar/>
            </header>

            <main className='news__main'>

                <h1 className='news__title'>AgriNews Daily</h1>

                <span className='news__info'>Trending....</span>

                <div className='news__body'>

                    <div className='news__cards'>
                        
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                    </div>

                    <article className='news__article'> 
                        <div className='article__img'></div>
                        <h2 className='article__title'>
                            Strawberry Ginger
                        </h2>
                        <p className='article__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu. Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra, mauris, scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed. Ipsum et risus aliquam a aliquam vestibulum justo ipsum in. Nulla.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu. Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra, mauris, scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed. Ipsum et risus aliquam a aliquam vestibulum justo ipsum in. Nulla.</p>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default News;