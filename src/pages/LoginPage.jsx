import Login from "../Login/Login";

const LoginPage = () => {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <h1>Log-in to your account</h1>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          fontFamily: "Arial",
          fontSize: "20px",
        }}
      >
        to plan a Travel
      </div>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
