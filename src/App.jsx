function App() {
  return (
    <div className="h-screen bg-white dark:bg-blue-800 text-black dark:text-white">
      <h1 className="text-black dark:text-black">Hello there </h1>
      <button
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
        }}
      ></button>
    </div>
  );
}

export default App;
