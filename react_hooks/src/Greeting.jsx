import { ThemeContext } from "./contexts/theme-contex"

const Greeting = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {(value) => (
          <div
            style={{
              padding: 20,
              borderRadius: 10,
              backgroundColor: value.theme === 'light' ? '#eee' : '#333',
              color: value.theme === 'dark' ? '#eee' : '#333',
            }}
          >
            <h1>Hello world!</h1>
          </div>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default Greeting