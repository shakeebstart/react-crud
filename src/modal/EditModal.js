import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function EditModal({
  setName,
  setEmail,
  setJob,
  setPhone,
  name,
  job,
  email,
  phone,
  setIsEdit,
  update,
}) {
  return (
    <Wrapper>
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={() => setIsEdit(false)}>x</CloseButton>
          <Table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="job">Job</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="job"
                    placeholder="Job"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="phone">Phone</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Button onClick={update}>Update</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </ModalContent>
      </ModalContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  position: relative;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  color: red;
`;
