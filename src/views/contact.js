import React from "react"
import "../components/Header.css"
import HomeLayout from "../components/homelayout";
import "./aboutus.css"
import { FacebookOutlined  } from '@ant-design/icons';
// import Form from "rc-field-form/es/Form";
import { Form,Input, DatePicker, Space, InputNumber, Upload, Button } from "antd"

// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Contact = () => {
       return (
                     <HomeLayout>
                            <div className="contact-container">
              <div className="contact">
                            <h1>Find us!</h1>
                            <p>loklfjaljfksjdsndfsfnnkdfnkfnkajndfnksdnfksjnfdnsnfksnf</p>
                            <br></br>
                            <button>Find us on the map</button>
              </div>

              <div className="user-contact">
                     <Form>
                     <Form.Item name="first name" label="First Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="last name" label="Last Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="comment" label="Comment" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                {/* <Space>
                    <Form.Item label="Date Scheduled">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Due Date">
                        <DatePicker />
                    </Form.Item>
                     </Space> */}
                     <br></br>
                     <Button>SUBMIT</Button>
                     </Form>

              </div>

              </div>

                     </HomeLayout>
       )
}
export default Contact;
