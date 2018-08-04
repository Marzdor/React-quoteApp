import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: ""
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }
  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          text: data.quote,
          author: data.author
        });
      });
  }
  handleNewQuote() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          text: data.quote,
          author: data.author
        });
      });
  }
  handleTweet() {
    const textToTweet = this.state.text + "\n - " + this.state.author;
    if (textToTweet.length > 140) {
      alert("Tweet should be less than 140 Chars");
    } else {
      const twtLink =
        "http://twitter.com/home?status=" + encodeURIComponent(textToTweet);
      window.open(twtLink, "_blank");
    }
  }
  render() {
    return (
      <article id="quote-box">
        <section>
          <p id="text">{this.state.text}</p>
          <h2 id="author">{this.state.author}</h2>
        </section>
        <section>
          <button id="new-quote" onClick={this.handleNewQuote}>
            New Quote
          </button>
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            onClick={this.handleTweet}
          >
            Tweet Quote
          </a>
        </section>
      </article>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
