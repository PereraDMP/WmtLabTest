import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://your-backend-url/api/items"; // change after deploy

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const fetchItems = async () => {
    const res = await axios.get(API);
    setItems(res.data);
  };

  const addItem = async () => {
    await axios.post(API, { name });
    setName("");
    fetchItems();
  };

  const deleteItem = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple MERN App</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
