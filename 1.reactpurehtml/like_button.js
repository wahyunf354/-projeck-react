const e = React.createElement;

// Display a "Like" <button>
function LikeButton() {
  return e(
    'button', {
      onClick: () => alert('ok')
    },
    'Like'
  );
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);