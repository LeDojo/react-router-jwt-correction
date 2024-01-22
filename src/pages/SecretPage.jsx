import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const SecretPage = () => {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  if (!token) {
    return (
      <div>
        <h1>Not authorized, baby 🚫</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Secret Page</h1>
      <img src="https://picsum.photos/400/300" alt="random" />
    </div>
  );
};

export default SecretPage;
