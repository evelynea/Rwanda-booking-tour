import React from "react"
import Dashlayout from "../../components/dashboardlayout";
import { Form, Input, DatePicker, Space, InputNumber, Upload, Button } from "antd"
import { UploadOutlined } from '@ant-design/icons';

const Newtour = () => {
    const OnFinish = (values) => {
        console.log(values);
    }
    return (
        // <Dashlayout>
            <Form onFinish={OnFinish}>

                <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Space>
                    <Form.Item label="Date Scheduled">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Due Date">
                        <DatePicker />
                    </Form.Item>
                </Space>

                <Form.Item label="Images">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Space>
                <Form.Item label="price ($)">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="seats">
                    <InputNumber />
                </Form.Item>
                </Space>
                <br></br>
                <Button htmlType="submit" type="primary">
                    Register Now
                </Button>
            </Form>
        //  </Dashlayout>
    )
}
export default Newtour;