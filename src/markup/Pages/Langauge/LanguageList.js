import { Button } from "@material-ui/core";
import { color } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import Header from './../../Layout/Header';
import LanguageCreate from './LanguageCreate';
import { Link } from 'react-router-dom';

export default function LanguageList() {
    const onDelete = (id) => {
        axios.delete(`/api/v1.0/languages/${id}`).then(res => {
            alert('Deleted Successfully');
            window.location.reload(false);

        }).catch(err => {
            console.log(err);
        });
    }
  const [APIData, setAPIData] = useState([
  ]);
  function fetchData() {
    axios.get(`/api/v1.0/languages/`).then((response) => {
        setAPIData(response.data);
      },);  
}
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="center">
        <Header></Header>
        <Button component={Link} to="/languages/create" variant="contained" color="primary">Create</Button>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.name}</Table.Cell>
                <Button  style={{backgroundColor: '#FF0000', color: '#FFFFFF'}} onClick={() => onDelete(data.id)}>Delete</Button>

              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
