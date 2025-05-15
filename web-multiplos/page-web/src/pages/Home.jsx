import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "primeicons/primeicons.css";

// Estilos
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 64vh;
  background-color: #f8f9fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  margin-top: -15rem;
  margin-bottom: 10rem;
  font-size: 2rem;
  color: #333;
&h1{
  align-items: center;
}
`;

const List = styled.ul`

  list-style: none;
  padding: 0;
  display:flex;
  flex-direction: row;
  gap: 10em;
`;

const ListItem = styled.li`
  margin: 1px 0;
  /* border: 1px solid #004bad; */
  /* border-radius: 10px; */
  align-items: center;

  a {
    text-decoration: none;
    color: #004bad;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #004bad;
    }
  }
`;



const Home = () => {
    return (
      <>
        {/* <h1>Home</h1> */}
        <MainContainer>
          <Title>Lista de Exercícios</Title>
          <div className="ListItem">
            <List>
              <ListItem
                className="pi pi-receipt"
                style={{ fontSize: "1.2rem", gap: "20px" }}>
                <Link to={"/ContentOne/1/Água"}>Beber Água </Link>
              </ListItem>
              <ListItem
                className="pi pi-receipt"
                style={{ fontSize: "1.2rem", gap: "20px" }}
              >
                <Link to={"/ContentOne/2/Sol"}>Tomar Sol </Link>
              </ListItem>
              <ListItem
                className="pi pi-receipt"
                style={{ fontSize: "1.2rem", gap: "20px" }}
              >
                <Link to={"/ContentOne/3/Café"}>Beber Café </Link>
              </ListItem>
            </List>
          </div>
          {/* <div className="main-content-block">Content 2</div> */}
          {/* <div className="main-content-block">Content 3</div> */}
        </MainContainer>
      </>
    );
}

export default Home;