import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import EditModal from "../modal/EditModal";

export default function EmployeeDetails() {
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [allEmpDet, setAllEmpDet] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editModalData, setEditModalData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    const empData = {
      name: name,
      job: job,
      email: email,
      phone: phone,
      id: uuidv4(),
    };
    let data = JSON.parse(localStorage.getItem("allEmpDetails")) || [];
    data.push(empData);
    localStorage.setItem("allEmpDetails", JSON.stringify(data));
    window.location.reload();
  };
  useEffect(() => {
    const datas = localStorage.getItem("allEmpDetails");
    const empDetails = JSON.parse(datas) || [];
    setAllEmpDet(empDetails);
  }, []);
  const edit = (id) => {
    setIsEdit(true);
    const employeeDetGet = allEmpDet.find((itm) => itm.id !== id);
    // setEditModalData(employeeDetGet);
    setName(employeeDetGet.name);
    setEmail(employeeDetGet.email);
    setPhone(employeeDetGet.phone);
    setJob(employeeDetGet.job);
    setEditingId(id);
  };
  const update = (id) => {
    const updateEmpDetail = allEmpDet.map((itm) => {
      if (itm.id === editingId) {
        return { ...itm, name, email, phone, job };
      }
      return itm;
    });
    setAllEmpDet(updateEmpDetail);
    localStorage.setItem("allEmpDetails", JSON.stringify(updateEmpDetail));
    setIsEdit(false);
  };
  const deleteData = (id) => {
    let employeeData = JSON.parse(localStorage.getItem("allEmpDetails"));
    if (employeeData) {
      const localData = employeeData.filter((item) => item.id !== id);
      localStorage.setItem("allEmpDetails", JSON.stringify(localData));
      console.log("deleted");
      window.location.reload();
    } else {
      console.log("ppppp");
    }
  };
  return (
    <Wrapper>
      {isEdit == false ? (
        <form>
          <Table>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  // value={name}
                />
              </td>
            </tr>
            <tr>
              <td>Job</td>
              <td>
                <input
                  type="text"
                  placeholder="Job"
                  onChange={(e) => setJob(e.target.value)}
                  value={job}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </td>
            </tr>
          </Table>
          <Button onClick={submit}>Submit</Button>
        </form>
      ) : (
        ""
      )}

      <Table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>{" "}
        </thead>
        <Tbody>
          {allEmpDet && allEmpDet.length > 0 ? (
            allEmpDet.map((itm) => (
              <tr key={itm.id}>
                <td>{itm.name}</td>
                <td>{itm.job}</td>
                <td>{itm.email}</td>
                <td>{itm.phone}</td>
                <td>
                  <Button
                    style={{ marginBottom: ".5rem" }}
                    onClick={() => edit(itm.id)}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => deleteData(itm.id)}>Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No employee details found</td>
            </tr>
          )}
        </Tbody>
      </Table>
      {isEdit ? (
        <EditModal
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setJob={setJob}
          name={name}
          email={email}
          phone={phone}
          job={job}
          setIsEdit={setIsEdit}
          update={update}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 2rem;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
`;
const Tbody = styled.tbody`
  text-align: center;
`;
