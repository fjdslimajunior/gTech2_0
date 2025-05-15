import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #004aad;
  color: white;
  &h1,
  h3 {
    text-align: center;
    color: white;
    font-size: xx-large;
  }
  &Link:hove {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
`;

const NotFound = () => {
    return (
        <ErrorPage>
            
        <main>
          <h1>Page Not Found!</h1>
          <br />
          <h3>404</h3>
          <Link to="/">Return!</Link>
        </main>
      </ErrorPage>
    );
}
 
export default NotFound;