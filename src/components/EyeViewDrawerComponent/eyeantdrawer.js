"use client";

import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Collapse } from "antd";
import Image from "next/image";

const { Panel } = Collapse;

const EyeViewDrawerApp = ({ userData }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Utility function to format date and time
  const formatDateTime = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true, // To display in 12-hour format with AM/PM
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Button
        style={{
          border: "none",
          marginBottom: "5px",
          position: "relative",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={showDrawer}
      >
        <EyeOutlined
          style={{
            cursor: "pointer",
            fontSize: isHovered ? "20px" : "16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Button>

      <Drawer
        title={<div className="text-xl font-bold text-center">Student Information</div>}
        width={600}
        onClose={onClose}
        visible={open}
        placement="right"
        footer={
          <Space>
            <Button onClick={onClose} style={{ width: '100%' }}>Close</Button>
          </Space>
        }
        bodyStyle={{
          padding: "16px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 80px)",
        }}
      >
        <div className="text-[#393838]">
          {/* User Image Section */}
          <div className="flex justify-center mb-6">
          <Image
  src={userData.imageUrl}
  alt="Student"
  style={{
    width: "120px",  // Adjusted width for a cleaner look
    height: "120px",  // Proportional height
    borderRadius: "50%",  // Keep the circular shape
    border: "4px solid #1890ff",  // Blue border
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",  // Soft shadow for better focus
  }}
  width={120} height={120}  // Keep width and height consistent
/>

          </div>

          {/* Collapsible Sections */}
          <Collapse defaultActiveKey={['1']} accordion>
            {/* Personal Information Section */}
            <Panel header="Personal Information" key="1">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">RollNo:</div>
                <div>{userData.rollNo}</div>

                <div className="font-semibold">Name:</div>
                <div>{userData.fullName}</div>

                <div className="font-semibold">Father's Name:</div>
                <div>{userData.fatherName}</div>

                <div className="font-semibold">CNIC:</div>
                <div>{userData.cnic}</div>
              </div>
            </Panel>

            {/* Contact Information Section */}
            <Panel header="Contact Information" key="2">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Course:</div>
                <div>{userData.course}</div>

                <div className="font-semibold">Gender:</div>
                <div>{userData.gender}</div>

                <div className="font-semibold">Email:</div>
                <div>{userData.email}</div>

                <div className="font-semibold">City:</div>
                <div>{userData.city}</div>
              </div>
            </Panel>

            {/* Batch Information Section */}
            <Panel header="Batch Information" key="3">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Batch:</div>
                <div>{userData.batch}</div>

                <div className="font-semibold">Date of Birth:</div>
                <div>{userData.dateOfBirth}</div>
              </div>
            </Panel>

            {/* Qualification and Address Section */}
            <Panel header="Qualification and Address" key="4">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Qualification:</div>
                <div>{userData.qualification}</div>

                <div className="font-semibold">Address:</div>
                <div>{userData.address}</div>
              </div>
            </Panel>

            {/* Payment Information Section */}
            <Panel header="Payment Information" key="5">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Payment:</div>
                <div>{userData.payment}</div>

                <div className="font-semibold">Status:</div>
                <div>{userData.status}</div>

                <div className="font-semibold">Other-Status:</div>
                <div>{userData.otherStatus}</div>

                <div className="font-semibold">Registered:</div>
                <div>{formatDateTime(userData.createdAt)}</div>
              </div>
            </Panel>
          </Collapse>

          {/* Payment Image Section */}
          <div className="mt-4">
            {userData.paymentImg && userData.paymentImg !== "Not-Done" ? (
              <div className="flex justify-center mb-6">
                <Image
                  src={userData.paymentImg}
                  alt="Payment"
                  className="w-full h-40 rounded-xl shadow-md"
                  width={600}
                  height={400}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center h-32 border border-gray-300 rounded-md">
                <span className="text-lg font-semibold">Payment Not Done</span>
              </div>
            )}
            <div className="text-center font-semibold mt-2">Payment Image</div>
          </div>

        </div>
      </Drawer>
    </>
  );
};

export default EyeViewDrawerApp;
