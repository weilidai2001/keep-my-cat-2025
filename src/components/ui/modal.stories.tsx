import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Modal from "./modal";

const meta: Meta = {
  title: "UI/Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{ padding: "8px 16px", borderRadius: "4px", background: "#2d6cdf", color: "white", border: "none" }}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: 8 }}>Modal Title</h2>
            <p>This is a sample modal content.</p>
          </div>
        </Modal>
      </div>
    );
  },
};
