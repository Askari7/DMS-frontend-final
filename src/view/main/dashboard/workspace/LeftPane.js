import React, { useState } from 'react'
import { Col, Input, Layout,  Row, Button, Select, Form } from 'antd'
import HeaderHorizontal from '../../../../layout/components/header/HeaderHorizontal'
import MenuFooter from '../../../../layout/components/menu/footer'
import CustomiseTheme from '../../../../layout/components/customise'
import ScrollTop from '../../../../layout/components/scroll-to-top'
import { useSelector } from 'react-redux'
import { Box, MenuItem, Tab, Tabs, TextField, Typography, Menu } from '@mui/material'
import { FormattedMessage } from 'react-intl'
const { TextArea } = Input;

const LeftPane = (props) => {
    const { specificQuestion, setSpecificQuestion, content, setContent, value, handleChange, noOfResults, setNoOfResults, generateResults, returnInitialState, fetchingResults, customise } = props;
    //  const useStyles = makeStyles((theme) => ({
    //     menuPaper: {
    //       backgroundColor: "lightblue"
    //     }
    //   }));

    //   const classes= useStyles();

    return (
        <>
            <Button type='primary' onClick={() => returnInitialState()} >
                + <FormattedMessage id="workspace-new-workspace" />
            </Button>

            <Box mt={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{ color: (customise?.theme === 'dark') ? 'white' : 'black' }} label={<FormattedMessage id="workspace-semantic-search" />} />
                    <Tab sx={{ color: (customise?.theme === 'dark') ? 'white' : 'black' }} label={<FormattedMessage id="workspace-lexbot" />} />
                </Tabs>
            </Box>

            <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box mb={0.5} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', columnGap: '30px', alignItems: 'center' }}>
                        <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontWeight={600} fontSize={15}><FormattedMessage id="workspace-content" /></Typography>
                    </Box>
                    <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontSize={13}>{content?.length}/4000</Typography>
                </Box>

                {/* <TextArea required value={content}  rows={7} 
                onChange={(e) =>{ 
                    localStorage.setItem('content', e?.target?.value)
                    setContent(e.target.value)
                    }}
                 maxLength={4000} placeholder='Content' 

                 /> */}

                <TextField
                    value={content}
                    multiline
                    label={<FormattedMessage id="workspace-2credits" />}
                    minRows={5}
                    onChange={(e) => {
                        localStorage.setItem('content', e?.target?.value)
                        setContent(e.target.value)
                    }}
                    // sx={{color:'white', 'Input':{color:'white'}}}
                    sx={{ '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: customise?.theme === 'dark' ? '#333333 !important' : '#b2bec3' }, '.Mui-focused': { borderColor: 'blue' } }}
                    inputProps={{ style: { color: customise?.theme === 'dark' ? 'white' : 'black', fontSize: '14px', fontFamily: 'sans-serif' }, maxLength: 4000 }}
                    // sx={{ '&:input': { color: 'red' }}}
                    //  maxLength={4000} 
                    placeholder="Content"
                    InputLabelProps={{
                        style: { color: customise?.theme === 'dark' ? '#FFF' : 'black', fontSize: '15px', fontFamily: 'sans-serif' },
                    }}

                />
            </Box>

            <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box mb={0.5} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', columnGap: '30px', alignItems: 'center' }}>
                        <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontWeight={600} fontSize={15}><FormattedMessage id="workspace-specific-question" /></Typography>
                        {/* <Typography fontWeight={600} fontSize={13}>(optional)</Typography> */}
                    </Box>
                    <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontSize={13}>{specificQuestion?.length}/400</Typography>
                </Box>
                {/* <TextArea required rows={4} maxLength={400} value={specificQuestion} 
                onChange={(e) => {
                    setSpecificQuestion(e.target.value)
                    localStorage.setItem('specificQuestion', e?.target?.value)
                    }} 
                placeholder='Question' /> */}

                <TextField
                    value={specificQuestion}
                    multiline
                    label={<FormattedMessage id="workspace-question" />}
                    minRows={4}
                    onChange={(e) => {
                        setSpecificQuestion(e.target.value)
                        localStorage.setItem('specificQuestion', e?.target?.value)
                    }}
                    sx={{ '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: customise?.theme === 'dark' ? '#333333 !important' : '#b2bec3', fontFamily: 'sans-serif' }, '.MuiOutlinedInput-root .MuiOutlinedInput-focused':{color:'red'}  }}
                    inputProps={{ style: { color: customise?.theme === 'dark' ? 'white' : 'black', fontSize: '14px', fontFamily: 'sans-serif' }, maxLength: 400, }}
                    InputLabelProps={{
                        style: { color: customise?.theme === 'dark' ? '#FFF' : 'black', fontSize: '15px', fontFamily: 'sans-serif' },
                    }}
                // sx={{ '&:input': { color: 'red' }}}
                //  maxLength={4000} 
                // placeholder={<FormattedMessage id="workspace-question" />}

                />
            </Box>


            <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', columnGap: '30px', alignItems: 'center' }}>
                        <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontWeight={600} fontSize={15}><FormattedMessage id="workspace-how-many" /></Typography>
                    </Box>

                </Box>
                <Box mt={0.5} sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                    {/* <Input placeholder='no of result' style={{ width: '50%' }} /> */}
                    {/* <Select
                        defaultValue={noOfResults}
                        value={noOfResults}
                        style={{
                            width: '50%',
                        }}
                        onChange={(value) => {
                            setNoOfResults(value)
                            localStorage.setItem('noOfResults', value)
                        }}
                        options={[
                            {
                                value: 2,
                                label: 2,
                            },
                            {
                                value: 3,
                                label: 3,
                            },
                            {
                                value: 4,
                                label: 4,
                            },
                            {
                                value: 5,
                                label: 5,
                            },
                        ]}
                    /> */}
                    <TextField
                        select
                        label={`+${noOfResults} credits`}
                        defaultValue={noOfResults}
                        inputProps={{ style: { color: customise?.theme === 'dark' ? 'white' : 'black', fontSize: '14px', } ,}}
                        InputLabelProps={{
                            style: { color: customise?.theme === 'dark' ? 'white' : 'black', fontSize: '15px', },
                        }}
                        sx={{ '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: customise?.theme === 'dark' ? '#333333 !important' : '#b2bec3' }, width: '130px', color:'red',}}
                        // SelectProps={{
                        //     native: true,
                        // }}
                        onChange={(e) => {
                            const value = e.target.value
                            setNoOfResults(value)
                            localStorage.setItem('noOfResults', value)
                        }}
                 

                    >
                    {/* <Menu  sx={{backgroundColor:'red'}}> */}
                        <MenuItem value={2}>
                            2
                        </MenuItem>
                        <MenuItem value={3}>
                            3
                        </MenuItem>
                        <MenuItem value={4}>
                            4
                        </MenuItem>
                        <MenuItem value={5}>
                            5
                        </MenuItem>
                    {/* </Menu> */}
                    </TextField>
                    {/* <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontSize={13}>+{noOfResults} <FormattedMessage id="workspace-credits" /></Typography> */}
                </Box>
            </Box>

            <Box mt={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black', width: '50%' }} fontWeight={600} fontSize={15}><FormattedMessage id="workspace-input-sources" /></Typography>
                <Box mt={0.5} sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                    <Input placeholder='4P.290/ 2005' style={{ width: '50%' }} />
                    {/* <Typography fontSize={13}>+2 <FormattedMessage id="workspace-credits" /></Typography> */}
                </Box>
                <Box mt={1.5} sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                    <Input placeholder='4P.290/ 2005' style={{ width: '50%' }} />
                </Box>
                <Box mt={1.5} sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                    <Input placeholder='4P.290/ 2005' style={{ width: '50%' }} />
                </Box>
            </Box>

            <Box mt={7} mb={1} sx={{ display: 'flex', justifyContent: 'flex-end', }}>

                <Box sx={{ backgroundColor: customise?.theme === 'dark' ? '#525a62' : '#D3D3D3', width: '100px', height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px' }}>
                    <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontSize={12}>+{2 + Number(noOfResults)} <FormattedMessage id="workspace-credits" /></Typography>
                </Box>

            </Box>

            <Button onClick={() => generateResults({ totalResults: noOfResults, context: content, totalCreditsUsed: 2 + Number(noOfResults) })} loading={fetchingResults} disabled={content?.length <= 0} style={{ width: '100%', }} type='primary'><FormattedMessage id="workspace-generate" /></Button>

        </>
    )
}

export default LeftPane