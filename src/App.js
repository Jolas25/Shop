import "./App.scss";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: "Крісло LISELEJE",
          img: "https://cdn3.jysk.com/getimage/wd2.medium/198316",
          desc: "Lorem Lorem Lorem Lorem",
          category: "chairs",
          price: "2500",
        },
        {
          id: 2,
          title: "Стіл обідній RINGSTED",
          img: "https://cdn4.jysk.com/getimage/wd2.medium/126795",
          desc: "Lorem Lorem Lorem Lorem",
          category: "tables",
          price: "5500",
        },
        {
          id: 3,
          title: "Ліжко ALNOR",
          img: "https://cdn2.jysk.com/getimage/wd2.medium/139288",
          desc: "Lorem Lorem Lorem Lorem",
          category: "beds",
          price: "9999",
        },
        {
          id: 4,
          title: "Шафа HAGENDRUP",
          img: "https://cdn1.jysk.com/getimage/wd2.medium/34895",
          desc: "Lorem Lorem Lorem Lorem",
          category: "wardrobes",
          price: "5500",
        },
        {
          id: 5,
          title: "Шафа HAGENDRUP 3дв",
          img: "https://cdn4.jysk.com/getimage/wd2.medium/50255",
          desc: "Lorem Lorem Lorem Lorem",
          category: "wardrobes",
          price: "7500",
        },
        {
          id: 6,
          title: "Крісло UDSBJERG",
          img: "https://cdn2.jysk.com/getimage/wd2.medium/113717",
          desc: "Lorem Lorem Lorem Lorem",
          category: "chairs",
          price: "3250",
        },
        {
          id: 7,
          title: "Стіл обідній TYLSTRUP",
          img: "https://cdn4.jysk.com/getimage/wd2.medium/203944",
          desc: "Lorem Lorem Lorem Lorem",
          category: "tables",
          price: "3500",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((el) => el.id !== id),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({
        currentItems: this.state.items,
      });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
