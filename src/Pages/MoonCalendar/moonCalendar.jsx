import "./moonCalendar.css";

import Sidebar from "../../components/blocks/sidebar/sidebar";
import GardenCard from "../../components/elements/GardenCard/gardenCard";

function MoonCalendar(location) {
  return (
    <div className="moon">
      <header>
        <Sidebar location={location} />
      </header>

      <main className="moon__main">
        <h1 className="news__title">Moon calendar</h1>
        <div className="moon__block">
          <div>
            <div className="main__top">
              <div className="moon__info">
                <div className="moon__info_left">
                  <span className="moon__date">3</span>
                  <span className="moon__day">Wendsday</span>
                </div>

                <div className="moon__info_right">
                  <img className="moon__image" src="./images/moon.png" alt="" />
                  <span className="moon__condition">Full</span>
                </div>
              </div>
              <div>
                <div className="moon__info2">
                  <h2>Благоприятные дни: 1, 2, 4, 5, 6, 7, 11, 16, 17, 19, 26, 29, 30, 31</h2>
                  <h2>Нейтральные дни: 8, 9, 10, 12, 13, 14, 15, 18, 20, 27, 28</h2>
                  <h2>Неблагоприятные дни: 21, 22, 23</h2>
                </div>
              </div>
            </div>

            <h2 className="moonCalendar__title">Suitable for planting:</h2>
            <div className="moonCalendar__planting">
              {/* {crops.map(item => {
                        return (
                            <GardenCard 
                                key = {item.id}
                                url = {item.url}
                                title = {item.title}
                                productId = {item.id}/>)
                    })} */}
              <GardenCard /> <GardenCard /> <GardenCard /> <GardenCard /> <GardenCard />
              <GardenCard />
            </div>

            <h2 className="moonCalendar__title">Suitable for gardening activities:</h2>
            <div className="moonCalendar__planting">
              <GardenCard /> <GardenCard /> <GardenCard /> <GardenCard /> <GardenCard />
              <GardenCard />
            </div>
          </div>
          <article className="moon__article">
            <div className="article__img"></div>
            <h2 className="article__title">Strawberry Ginger</h2>
            <p className="article__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat
              consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu.
              Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra, mauris,
              scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed. Ipsum et
              risus aliquam a aliquam vestibulum justo ipsum in. Nulla.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default MoonCalendar;
