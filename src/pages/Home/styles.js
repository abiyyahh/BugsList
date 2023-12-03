import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
  input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  font-size: 16px;
  }
  
  input:focus {
  outline: none;
  border-color: #5c9eff;
  box-shadow: 0 0 5px #5c9eff;
  }
`;

export const CharaList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Chara = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
