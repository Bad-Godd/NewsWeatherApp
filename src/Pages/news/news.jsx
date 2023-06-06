import { useState, useEffect } from 'react';

import './news.css';

import Sidebar from '../../components/blocks/sidebar/sidebar';
import NewsCard from '../../components/elements/NewsCard/NewsCard';


function News(location) {


    return (
        <div className='page'>

            <header>
                <Sidebar location={location}/>
            </header>

            <main className='page__main'>

                <h1 className='page__title'>AgriNews Daily</h1>

                <h2 className='news__subtitle'>Trending....</h2>

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