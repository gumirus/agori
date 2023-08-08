import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="contant">
        <div className="container">
          <div className="container__top">
            <Categories />
            <Sort />
          </div>
          <h3 className="content__title">Выбирать</h3>
          <div className="content__items"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
