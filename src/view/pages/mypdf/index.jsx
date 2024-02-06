import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { saveData, loadData, getAllKeys } from '../../storage';
import { useLocation } from 'react-router-dom';
import CommentPanel from './commentPanel';

const PdfViewer = () => {
  const { search } = useLocation();
  const [remarks, setRemarks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const params = new URLSearchParams(search);
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));

  const docId = params.get('documentId');

  // Load comments from cookies on component mount
  useEffect(() => {
    const loadedRemarks = loadData('remarks');
    if (loadedRemarks) {
      const documentRemarks = loadedRemarks[docId] || [];
      setRemarks(documentRemarks);
    }
  }, [docId]);


  const handleAccept = () => {
    message.success('Document approved');
  };

  const handleReject = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalSubmit = () => {
    // Handle the submission of remarks here
    const newRemark = `${user.user.firstName} ${user.user.lastName}: ${remarks}`;
  
    // Save the new remark to cookies
    saveData('remarks', { [docId]: [...(loadData('remarks')[docId] || []), newRemark] });
  
    // Update the remarks state with the new remark
    setRemarks([...(loadData('remarks')[docId] || []), newRemark]);
    setModalVisible(false);
  };
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* PDF Viewer component */}
      <div style={{ flex: '1', height: '50%', overflowY: 'auto' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/3059-GEN-TR-001B_R2.pdf" />
        </Worker>
      </div>

      {/* Comment Panel */}
      <div style={{ flex: '0 0 300px', marginLeft: '16px', borderLeft: '1px solid #ccc', padding: '16px' }}>
        <CommentPanel remarks={remarks} />
      </div>

      {/* Buttons */}
      <div style={{ marginLeft: '16px', textAlign: 'center' }}>
        <Button type="primary" onClick={handleAccept}>
          Accept
        </Button>
        <Button type="danger" onClick={handleReject} style={{ marginLeft: '8px' }}>
          Reject
        </Button>
      </div>

      {/* Remarks Modal */}
      <Modal
        title="Enter Remarks"
        visible={modalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalSubmit}
      >
        <Input.TextArea
          placeholder="Enter your remarks here"
          rows={4}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default PdfViewer;
