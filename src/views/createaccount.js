import React from "react";

import { Modal, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const CreateAccount =()=>{
    const [modalvisible, setModalVisible] = useState(true);
    const onFinish = (values) => {
        console.log(values);

        localStorage.setItem("userLogedIn", true);
        navigate("/dash/newtour");
    };
    
    const navigate = useNavigate();
    return(
                         
                <Modal 
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
                    

                </Modal> 
    )
}
export default CreateAccount;