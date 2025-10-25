console.log("Script is loaded!");
body {
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.chat-container {
  width: 400px;
  height: 500px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

#chat-box {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.input-area {
  display: flex;
  border-top: 1px solid #ddd;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
}

button {
  padding: 10px 15px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
}
