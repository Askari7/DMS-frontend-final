import React from 'react'
import CustomiseTheme from '../../../layout/components/customise'
import ProtectedAppPage from '../Protected'
import ScrollTop from '../../../layout/components/scroll-to-top'
import { Layout, Tabs as TabsAnt, Radio, message, Modal, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import WorkSpaceTable from './WorkSpaceTable'
import { deleteWorkspace, getHistory, markFav, removeFromFavourites } from '../../../redux/workspace/workspaceActions'
import { useEffect } from 'react'
import IntlMessages from '../../../layout/components/lang/IntlMessages'
import { FormattedMessage } from 'react-intl';

const WorkspaceHistory = () => {
    const dispatch = useDispatch();
    const customise = useSelector(state => state.customise)

    const [tabValue, setTabValue] = useState(0);
    const [time, setTime] = useState('all');
    const [loading, setLoading] = useState(false);
    const [workSpaceName, setWorkSpaceName] = useState('');
    const [modalFavOpen, setModalFavOpen] = useState(false)
    const [workSpaceId, setWorkSpaceId] = useState('');

    const [tableData, setTableData] = useState();
     const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 5,
          total:1,
        },
      });


    const handleChange = (_, val) => {
        setTableParams({
            pagination: {
              current: 1,
              pageSize: 5,
              total:1,
            },
          });
        setTabValue(val);       
    }

    const onChange = (e) => {
        setTime(e.target.value);
    };

    const fetchData = async () => {
        setLoading(true)
        const res = await dispatch(getHistory({ favourites: tabValue, time:time, page: tableParams?.pagination?.current }));
        setTableData(res?.data?.results)
        setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: res?.data?.totalResults ,
            },
          });
        setLoading(false)
        console.log(res, 'res')
    }

    useEffect(() => {
        fetchData()
    }, [tabValue, time, JSON.stringify(tableParams)])

    const deleteClickedWorkSpace= async(id) => {
        const res = await dispatch(deleteWorkspace({id}));
        message.success('WorkSpace deleted')
        console.log(res, 'res of delete')
        fetchData()
    }

    const removeFav = async (param) => {
      console.log(param,'param')
      const res = await dispatch(removeFromFavourites(param))
      message.success(res?.message)
      fetchData()
  }

  const markAsFav = async (param) => {
    console.log(param,'param')
    const res = await dispatch(markFav(param));
    setModalFavOpen(false);
    setTabValue(1)
    setWorkSpaceId('');
    setWorkSpaceName('');
    message.success(res?.message);
    // fetchData()
}

    const tableProps = {
        tableData,
        tableParams,
        setTableParams,
        loadingData:loading,
        deleteClickedWorkSpace,
         customise,
         removeFav,
         markAsFav,
         setModalFavOpen,
         setWorkSpaceId
    }




    return (
        <Layout className={`hp-app-layout hp-bg-color-black-20 hp-bg-color-dark-90 ${customise.navigationBg && 'hp-app-layout-bg'}`}>
            <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                <Box p={2} sx={{ backgroundColor: customise?.theme === 'dark' ? '#141414' : 'white', boxSizing: 'border-box' }}>
                    <Typography fontWeight={600} fontSize={'1.2rem'} sx={{color: customise?.theme === 'dark' ? 'white' : 'black'}} fontFamily={'sans-serif'}><IntlMessages id="workspaceh-fav"/></Typography>
                    <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Tabs value={tabValue} sx={{ fontFamily: 'sans-serif',  }} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={<IntlMessages id="favourites"/>} value={1} sx={{ fontFamily: 'sans-serif',color:  (customise?.theme === 'dark' && tabValue !== 1) ? 'white' : 'black'}} />
                            <Tab label={<IntlMessages id="workspaceh"/>} value={0} sx={{ fontFamily: 'sans-serif',color:  (customise?.theme === 'dark' && tabValue !== 0) ? 'white' : 'black' }} />
                        </Tabs>

                        {/* <TabsAnt defaultActiveKey="1" items={items} onChange={onCahange} />; */}

                        <Radio.Group
                            value={time}
                            onChange={onChange}
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            <Radio.Button value="all"><IntlMessages id="all"/></Radio.Button>
                            <Radio.Button value="monthly"><IntlMessages id="last-30"/></Radio.Button>
                            <Radio.Button value="weekly"><IntlMessages id="last-week"/></Radio.Button>
                        </Radio.Group>
                    </Box>
                </Box>
                <Divider />
                <Box p={2} sx={{ boxSIzing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: customise?.theme === 'dark' ? '#141414' : 'white'}}>
                    <Box pt={3} pb={1} pl={3} pr={3} sx={{ borderRadius: '5px', backgroundColor: customise?.theme === 'dark' ? '#1f1f1f' : 'white', width: '100%' }}>
                        {tableData && <WorkSpaceTable {...tableProps} />}
                    </Box>



                </Box>


            </Box>

            <Modal
                title={<FormattedMessage id="workspace-favourite" />}
                centered
                visible={modalFavOpen}
                onOk={() => {
                    if (workSpaceName.trim() === '') {
                        message.error('Please enter your workspace name')
                        return
                    }
                     markAsFav({workSpaceId, name:workSpaceName})
                }}
                onCancel={() =>  {
                    setModalFavOpen(false)
                    setWorkSpaceId('')
                    setWorkSpaceName('')
                }}
            >
                {
                    <Input placeholder='Enter workspace name' value={workSpaceName} onChange={e => setWorkSpaceName(e.target.value)} style={{ width: '100%' }} />   
                }
            </Modal>

            

            <CustomiseTheme />
            <ProtectedAppPage />
            <ScrollTop />
        </Layout>
    )
}

export default WorkspaceHistory