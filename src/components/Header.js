import React from "react";
import "./Header.css"
import logo from '../assets/logo.PNG';
import { Link } from "react-router-dom";
import Aboutus from "../views/aboutus";
import Toursview from "../views/tours";
import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";


const Header = () => {
    const [visible, setVisible] = useState(false);
    const onFinish = (values) => {
        console.log(values);

        localStorage.setItem("userLogedIn", true);
        navigate("/dash/newtour");
    };
    
    const navigate = useNavigate();
    return (
        <>
            <Modal
                visible={visible}
                width="40%"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                
            >
                <h1>Signin Form</h1>
                <Form onFinish={onFinish}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email" }]}
                    >
                        <Input type="email"/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, type: "password" }]}
                    >
                        <Input type="password"/>
                    </Form.Item>
                    <Button htmlType="submit" onClick={()=>{ localStorage.setItem("userlogin",true); navigate("/dash/newtour")}}>
                        {""}
                        Login{""}
                    </Button>
                    <p> Don't have an account?</p>
                    
                    <a href="#" onClick={() => setVisible(true)}>CREATE ACCOUNT</a>
                </Form>
                </Modal>
                {/* <Modal 
                 visible={modalvisible}
                 width="40%"
                 onOk={() => setModalVisible(false)}
                 onCancel={() => setModalVisible(false)}
                >
                <Form onFinish={onFinish}>
                <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, type: "name" }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Button htmlType="submit" onClick={()=>{ localStorage.setItem("usercreated",true); navigate("/dash/newtour")}}>
                        {""}
                        CREATE{""}
                    </Button>
                </Form>
                    

                </Modal> */}
                <div className="header">

                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="navbar">
                        <a href="/home">HOME</a>
                        <a href="/tours">TOURS</a>
                        <a href="/aboutus">ABOUT US</a>
                        {/* <link to ="Dashboard"></link> */}
                        <a href="/contact">CONTACT</a>
                        <a href="#" onClick={() => setVisible(true)}>SIGN IN</a>

                    </div>
                </div>
                </>
            )
}

export default Header;