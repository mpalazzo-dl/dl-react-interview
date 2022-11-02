import "./styles.css";

export default function App() {
  const usersApi = "https://reqres.in/api/users";
  const usersApiDelay = "https://reqres.in/api/users?delay=1";

  return (
    <div className="App">
      <h2>My Users:</h2>
      <div className="users">... users listed here</div>
    </div>
  );
}
