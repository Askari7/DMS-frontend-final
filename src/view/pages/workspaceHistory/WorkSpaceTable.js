import { Button, Space, Table, Tag } from 'antd';
import React, { useState } from 'react'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import WorkSpacePdf from '../../../layout/components/pdf/WorkSpacePdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import IntlMessages from '../../../layout/components/lang/IntlMessages';





const WorkSpaceTable = (props) => {
    const { tableData, loadingData, tableParams, setTableParams, deleteClickedWorkSpace, customise, removeFav, markAsFav, setModalFavOpen, setWorkSpaceId } = props;
    const history = useHistory();

       const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
}


    const columns = [
        {
            title: '',
            key: 'comment icon',
            render: () => (
                <SmsOutlinedIcon />
            ),
            width:'2%'
        },
        {
            title: <IntlMessages id="Id"/>,
            key: 'id',
            render: (_, { results, uuid }) => (
                <>
                    
                 <Typography fontSize={13} fontFamily={'sans-serif'}>{uuid?.substring(0,7) ?? '--'}</Typography>
                        
                </>
            ),
            width:'3%'
        },
        {
            title: <IntlMessages id="date"/>,
            key: 'date',
            width: 150,
            render: (_, { results, createdAt }) => (
                <>
                   <Typography fontSize={13} fontFamily={'sans-serif'}>{createdAt ? new Date(createdAt).toDateString() : '--'}</Typography>
                </>
            ),
            width:'8%'
        },
        {
            title: <IntlMessages id="context"/>,
            key: 'context',
            width: '27%',
            render: (_, data) => (
                <>
                    {data?.context}
                </>
            ),
        },
        {
            title: '',
            dataIndex: 'button',
            key: 'button',
            width: '15%',
            render: (_, data) => (
                <Button type={'primary'} onClick={e => history.push({ pathname: '/pages/workspace', state: { aiRecommendation: data?.aiRecommendation, context: data?.context, question: data?.question ? data?.question : '', generateSemantic: data?.results, workSpaceId: data?.id, isFavourite:data?.isFavourite, workSpaceName: data?.name } })}><IntlMessages id='open-in-workspace' /></Button>
            ),
        },

        {
            title: '',
            key: 'fav',
            width: '6%',
            render: (_, data) => (
                <>
                    {
                        <Space size="middle">
                            {/* <IconButton onClick={() => data?.isFavourite ? removeFav({id:data?.id, name:data?.name}) : markAsFav({workSpaceId:data?.id, name:data?.name})}> */}
                            <IconButton 
                             onClick={() => {
                                if (data?.isFavourite) {
                                    removeFav({workSpaceId:data?.id, name:data?.name}) 
                                } else {
                                    setWorkSpaceId(data?.id)
                                    setModalFavOpen(true)
                                }
                                
                                }}
                            >
                            <StarOutlinedIcon sx={{ color: data?.isFavourite ? 'gold' : 'grey', '&:hover':{ color: data?.isFavourite ? 'grey' : 'gold'} }} />
                            </IconButton>
                        </Space>
                    }

                </>
            ),
        },

        {
            title: '',
            key: 'action',
            width: '20%',
            render: (_, data) => (
                <>
                    {
                        <Space size="middle">


                            <PDFDownloadLink document={<WorkSpacePdf context={data?.context} question={data?.question || ''} results={data?.results} aiRecommendation={data?.aiRecommendation} />} fileName="workspace.pdf">
                                {({ loading, }) =>
                                    !loading && <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <FileDownloadOutlinedIcon />
                                        <Typography fontFamily={'sans-serif'} fontSize={'0.8rem'} >{<IntlMessages id='export-as' />}</Typography>

                                    </Box>
                                }
                            </PDFDownloadLink>
                            
                            <IconButton onClick={() => deleteClickedWorkSpace(data?.id)}>
                                <DeleteOutlineOutlinedIcon sx={{'&:hover': {color:'red'}, color: customise?.theme === 'dark' ? 'white' : 'black'}}/>
                            </IconButton>
                        </Space>
                    }

                </>
            ),
        },
    ];





    return (
        <Table loading={loadingData} scroll={{ x: 1000 }} pagination={tableParams?.pagination} columns={columns} dataSource={tableData}  onChange={handleTableChange}/>
    )
}

export default WorkSpaceTable