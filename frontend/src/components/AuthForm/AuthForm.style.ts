import styled from "styled-components";

export const AuthFormContainer = styled.div`
  width: 400px;
  height: fit-content;
  margin: 100px auto;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`
export const Error = styled.p`
  color: red;
  font-size: 13px;
  margin-top: -12px;
  width: fit-content;
`;