
// const [documentModalVisible, setDocumentModalVisible] = useState(false);


// const documentModalShow = () => {
//     setDocumentModalVisible(true);
//   };
//   const documentModalCancel = () => {
//     setTitle("");
//     setProjectId("");
//     setDepartmentId("");
//     setDocumentModalVisible(false);
//   };

// <Button
// type="primary"
// onClick={documentModalShow}
// // disabled={user?.user?.roleId != 1}
// style={{ marginRight: '10px' }}
// >
// Create MDR Yourself
// </Button>


// <Modal
//         title="Upload Document"
//         width={400}
//         centered
//         visible={documentModalVisible}
//         onCancel={documentModalCancel}
//         footer={null}
//         closeIcon={
//           <RiCloseFill className="remix-icon text-color-black-100" size={24} />
//         }
//       >
//         <Row justify="space-between" align="center">
//           <Col span={20}>
//             <Form layout="vertical" name="basic">
//               <Form.Item
//                 label="MDR Title"
//                 name="docTitle"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your title",
//                   },
//                 ]}
//               >
//                 <Input
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </Form.Item>

//               <Form.Item
//                 label="MDR Code"
//                 name="docCode"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your code",
//                   },
//                 ]}
//               >
//                 <Input
//                   value={title}
//                   onChange={(e) => setMdrCode(e.target.value)}
//                 />
//               </Form.Item>


//               <Form.Item
//                 label="Project Name"
//                 name="projectName"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Project Name",
//                   },
//                 ]}
//               >
//  <Select
//                   options={projectOptions}
//                   value={projectId}
//                   onChange={(value) => setProjectId(value)}
//                 />              </Form.Item>
//               <Form.Item
//                 label="Add Reviewers"
//                 name="reviewers"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Reviewers Name",
//                   },
//                 ]}
//               >
//                 <Checkbox.Group options={userOptions} value={selectedReviewer} onChange={setSelectedReviewer} />

//               </Form.Item> <Form.Item
//                 label="Add Approvers"
//                 name="approvers"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please select Approvers Name",
//                   },
//                 ]}
//               >
//                <Checkbox.Group options={userOptions} value={selectedApprover} onChange={setSelectedApprover} />
//               </Form.Item>
//               <Row>           
//               <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//                   <Button block onClick={record?navigateToMdrTemplateForUpdate:navigateToMdrTemplate} type="primary"htmlType="submit">MDR template</Button>
//                 </Col>
//                 {/* <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
//                   <Button block onClick={navigateToMdrTemplate} type="primary"htmlType="submit">Create Custom</Button>
//                 </Col> */}
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Modal>