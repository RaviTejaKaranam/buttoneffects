import "./ErrorButton.css";
function addErrorAnimation(e) {
  e.target.textContent = "Error";
  e.target.classList.add("animation");
}

function ErrorButton() {
  return (
    <button className="error-button" onClick={(e) => addErrorAnimation(e)}>
      Click Me
    </button>
  );
}

export default ErrorButton;
