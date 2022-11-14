'use strict';

const e =React.createElement(
    'h1',
    [],
    "Hello World",
  );

/*class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}*/

const domContainer = document.querySelector('#title1');
ReactDOM.render(e, domContainer);