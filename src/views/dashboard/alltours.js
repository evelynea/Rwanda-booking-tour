import React from "react";
import Dashlayout from "../../components/dashboardlayout";
import { Form, Input } from "antd";
import { Table, Tag, Space } from 'antd';
import allavailabletours from "../../assets/constants/tours.json"
import allusers from "../../assets/constants/users.json"
import {EyeOutlined, EditOutlined, DeleteOutlined  } from "@ant-design/icons"
const Column = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Date Scheduled',
        dataIndex: 'dateScheduled',
        key: 'dateScheduled',
    },
    {
        title: 'Price ()',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Seats',
        dataIndex: 'Seats',
        key: 'seats',
    },
    {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
        <Space size="middle">
          <a><EyeOutlined /> </a>
          <a><EditOutlined /></a>
          <a><DeleteOutlined /></a>
        </Space>
    )
    },

];
const Column1 =[
    {
        title: 'First Name',
        dataIndex: 'first-name',
        key: 'first-name',
    },
    {
        title: 'Second Name',
        dataIndex: 'second-name',
        key: 'second-name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
        <Space size="middle">
          <a style={{color:"green"}}>Accept</a>
          <a style={{color:"red"}}>Decline</a>
          
        </Space>
    )
    },
]
const Alltours = () => {
    return (
        <>
        <Table columns={Column}  dataSource={allavailabletours}/>
        <Table columns={Column1}  dataSource={allusers}/>
</>
    )
}
export default Alltours;