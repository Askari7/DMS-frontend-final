import React, { useState } from 'react';
import { CarryOutOutlined, CheckOutlined, FormOutlined } from '@ant-design/icons';
import { Select, Switch, Tree } from 'antd';
const treeData = [
  {
    title: 'CEO Shoaib',
    key: 'Shoaib',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'Mechanical Lead Zubair',
        key: 'Zubair',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
 
];
const EmployeeTree = ({ data }) => {
    const users = [
        // ... your user data with id, companyId, roleId, department, departmentId, email, firstName, lastName
      ];
      
      const roles = {
        1: 'CEO',
        2: 'LEAD',
        3: 'Senior Engineer',
        4: 'Junior Engineer',
        5: 'Designer/Draughtman',
      };
      
      const departments = {
        1: 'Project Management',
        2: 'Mechanical',
        3: 'Electrical',
        4: 'Process',
        5: 'Piping',
        6: 'Civil/Structure',
        7: 'Instrumentation',
      };
      
      const treeData = [];
      
      function buildTree(users, parentKey = null) {
        const children = users.filter(
          (user) => user.departmentId === parentKey || user.roleId === 1 // Include CEO regardless of department
        );
      
        if (!children.length) {
          return null;
        }
      
        return children.map((user) => ({
          title: `${user.firstName} ${user.lastName}`,
          key: user.id.toString(),
          icon: <CarryOutOutlined />, // Assuming you have an icon component
          children: buildTree(users, user.id), // Recursively build children
        }));
      }
      
      // Populate treeData with hierarchical structure
      treeData.push({
        title: 'CEO Shoaib', // Assuming CEO information is not in user data
        key: 'Shoaib',
        icon: <CarryOutOutlined />,
        children: buildTree(users),
      });
    const [showLine, setShowLine] = useState(true);
    const [showIcon, setShowIcon] = useState(false);
    const [showLeafIcon, setShowLeafIcon] = useState(true);
    const onSelect = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
    };
    const handleLeafIconChange = (value) => {
      if (value === 'custom') {
        return setShowLeafIcon(<CheckOutlined />);
      }
      if (value === 'true') {
        return setShowLeafIcon(true);
      }
      return setShowLeafIcon(false);
    };
    return (
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          showLine: <Switch checked={!!showLine} onChange={setShowLine} />
          <br />
          <br />
          showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
          <br />
          <br />
          showLeafIcon:{' '}
          <Select defaultValue="true" onChange={handleLeafIconChange}>
            <Select.Option value="true">True</Select.Option>
            <Select.Option value="false">False</Select.Option>
            <Select.Option value="custom">Custom icon</Select.Option>
          </Select>
        </div>
        <Tree
          showLine={
            showLine
              ? {
                  showLeafIcon,
                }
              : false
          }
          showIcon={showIcon}
          defaultExpandedKeys={['0-0-0']}
          onSelect={onSelect}
          treeData={treeData}
        />
      </div>
    );
  };
export default EmployeeTree;
