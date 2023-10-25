import React from "react";
import axios from "@/services/axios";
import { Form, Input } from "antd";
import Rating from "@/components/common/Rating";

const Respond = () => {
  const handleSubmit = () => {
    console.log('handleSubmit')
  };

  return (
    <div id="respond" className="comment-respond mb-lg-0">
      <Form
        name="rating-form"
        onFinish={handleSubmit}
        id="commentform"
        className="comment-form"
      >
        <div className="d-flex align-items-center justify-content-between mr-8">
          <h4 className="title-border">Leave a Rating</h4>
          <Rating />
        </div>
        <div className="add-comment">
          <div className="w-full">
            <Form.Item name="message">
              <Input.TextArea
                rows={8}
                autoSize={false}
                size="large"
                className="w-full rounded placeholder:text-sm placeholder:text-gray-500 py-2 border-gray-500 "
                placeholder="Enter Message..."
              />
            </Form.Item>
            <Form.Item>
              <button htmlType="submit" className="lab-btn">
                <span>Submit Rating</span>
              </button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Respond;
