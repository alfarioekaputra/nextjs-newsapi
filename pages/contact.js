import { useForm } from "react-hook-form";

import Layout from '../components/layout'
import Input from '../components/form/input';
import React, {useState} from 'react';

export default function Contact() {
    const initState = {
        name: '',
        email: '',
        body: ''
    }

    const [form, setForm] = useState(initState);
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };
    
    const handleChange = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }


    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <h1 className="title">Contact Us</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="Name" name="name" value={form.name} onChange={handleChange} register={register} required errors={errors}></Input>
                        <input type="submit" />
                    </form>
                </div>
            </section>
        </Layout>
    )
}