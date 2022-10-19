function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={callApi}>Call API</button>
        </header>
      </div>
  );
}

function callApi() {
    fetch('https://simple-node-server-try.herokuapp.com', { method: 'GET' })
    // fetch('http://localhost:3001/details', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringify(json)))
}

export default App;

