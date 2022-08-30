import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import style from '../../../css/language.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useAlert } from 'react-alert'

export default function LanguageCreate() {
    const [name, setName] = useState('');
    const postData = () => {
        console.log(name);
        axios.post(`/api/v1.0/languages/create`,{
            name: name
        }).then(res => {
            alert('Added Successfully');
            window.location.reload(false);

        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div className='main'>
            <Form className="create-form">
                <Form.Field>
                    <label>Language</label>
                    <input placeholder='Language Name' onChange={(e) => setName(e.target.value)}/>
                    <Button onClick={postData} type='submit'>Submit</Button>
                </Form.Field>
                
            </Form>
        </div>
    )
}