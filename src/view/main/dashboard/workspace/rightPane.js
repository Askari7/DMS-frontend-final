import React from 'react'
import { Col, Input, Layout, Menu, Row, Button, Progress, Badge } from 'antd'
import HeaderHorizontal from '../../../../layout/components/header/HeaderHorizontal'
import MenuFooter from '../../../../layout/components/menu/footer'
import CustomiseTheme from '../../../../layout/components/customise'
import ScrollTop from '../../../../layout/components/scroll-to-top'
import { useSelector } from 'react-redux'
import { Box, IconButton, MenuItem, Tab, Tabs, TextField, Typography, } from '@mui/material'
const { TextArea } = Input;
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { FormattedMessage } from 'react-intl'
import WorkSpacePdf from '../../../../layout/components/pdf/WorkSpacePdf'
import { PDFDownloadLink } from '@react-pdf/renderer'


const RightPane = (props) => {

    const { aiRecommendation, generateSemantic, translate, workSpaceId, summary,  setModalFavOpen, exportPdf, specificQuestion, content, customise, isFavourite,removeFav, workSpaceName } = props;
    return (
        <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box mb={1.5} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontWeight={600} fontSize={15}><FormattedMessage id="workspace-ai" /></Typography>
                    <Box sx={{ display: 'flex', columnGap: '7px' }}>
                        {
                            isFavourite
                                ?
                                <Button disabled={!generateSemantic} onClick={() => removeFav({workSpaceId:workSpaceId, name:workSpaceName})}><FormattedMessage id="workspace-remove-favourite" /></Button>
                                :
                                <Button disabled={!generateSemantic} onClick={() => setModalFavOpen(true)}><FormattedMessage id="workspace-favourite" /></Button>
                        }

                        {
                            generateSemantic && generateSemantic?.length > 0
                            &&
                            exportPdf()
                        }
                    </Box>
                </Box>

                {/* <TextArea rows={9} value={text} /> */}
                <Box p={2} sx={{ height: '260px', backgroundColor: customise?.theme === 'dark' ? '#1f1f1f' : '#eef2ff', borderRadius: '7px', border: '1px solid #b9bcf8', boxSizing: 'border-box', overflowY: 'auto', color: customise?.theme === 'dark' ? 'white' : 'black' }}>
                    {aiRecommendation}
                </Box>
            </Box>

            <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontWeight={600} fontSize={15}><FormattedMessage id="workspace-semantic-search" /></Typography>
                </Box>


                {
                    generateSemantic?.map(result => (
                        <Box key={result?.verdictId}>
                           { result
                            &&
                            <Box  sx={{ display: 'flex', flexDirection: 'column', borderRadius: '9px', backgroundColor: customise?.theme === 'dark' ? '#1f1f1f' : 'white', height: 'fit-content' }}>
                            <Box pl={3} pr={3} pt={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between', boxSizing: 'border-box' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} fontWeight={600} fontSize={15}>{result?.verdictId} {' on '} {result?.verdictDate}</Typography>
                                    <Box sx={{ width: '40%' }}>
                                        <Progress percent={result?.similarityScore?.toFixed(2)} size='large' strokeColor={result?.similarityScore?.toFixed(2) >= 70 ? 'green' : (result?.similarityScore?.toFixed(2) <= 69 && result?.similarityScore?.toFixed(2) >= 40) ? '#ff8c00' : (result?.similarityScore?.toFixed(2) <= 39 && result?.similarityScore?.toFixed(2) >= 20) ? '#FFD580' : 'red'} />

                                    </Box>
                                </Box>
                                <Typography sx={{ mt: 2, color: '#8c939b', color: customise?.theme === 'dark' ? 'white' : 'black' }} fontSize={14}>
                                    {result?.pageContent}
                                </Typography>
                                <Typography sx={{ color: customise?.theme === 'dark' ? 'white' : 'black', mt: 2 }} component={'span'} fontWeight={600} fontSize={14}>URL: <Typography sx={{ color: '#8c939b' }} fontSize={14} href={result?.url} target="_blank" rel="noreferrer" component={'a'}>{result?.url}</Typography></Typography>

                            </Box>

                            <Box mt={3} sx={{ borderTop: '0.5px solid silver' }}>
                                <Box pl={2} pr={7} pt={1.5} pb={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }}>
                                    <Box sx={{ display: 'flex', }}>
                                        <IconButton>
                                            <ThumbUpOffAltIcon sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} />
                                        </IconButton>
                                        <IconButton>
                                            <ThumbDownOffAltIcon sx={{ color: customise?.theme === 'dark' ? 'white' : 'black' }} />
                                        </IconButton>
                                    </Box>

                                    <Box sx={{ display: 'flex', columnGap: '25px' }}>
                                        <TextField
                                            select
                                            label=<FormattedMessage id="workspace-2credits" />
                                            defaultValue="Translate into"
                                            inputProps={{ style: { color: customise?.theme === 'dark' ? 'white' : 'black' } }}
                    InputLabelProps={{
                        style: { color: customise?.theme === 'dark' ? '#FFF' : 'black' },
                    }}
                    sx={{ '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: customise?.theme === 'dark' ? '#333333 !important' : '#b2bec3' },width:'150px' }}
                                            // SelectProps={{
                                            //     native: true,
                                            // }}

                                        >
                                            <MenuItem defaultValue={'Translate into'} value={'Translate into'}>
                                                <FormattedMessage id="workspace-translate" />
                                            </MenuItem>
                                            <MenuItem onClick={(e) => translate({ language: e.target.innerText, workSpaceId: workSpaceId, article: result?.pageContent, totalCreditsUsed: 2 })} value={'French'}>
                                                <FormattedMessage id="workspace-french" />
                                            </MenuItem>
                                            <MenuItem onClick={(e) => translate({ language: e.target.innerText, workSpaceId: workSpaceId, article: result?.pageContent, totalCreditsUsed: 2 })} value={'Italian'}>
                                                <FormattedMessage id="workspace-italian" />
                                            </MenuItem>
                                            <MenuItem onClick={(e) => translate({ language: e.target.innerText, workSpaceId: workSpaceId, article: result?.pageContent, totalCreditsUsed: 2 })} value={'English'}>
                                                <FormattedMessage id="workspace-english" />
                                            </MenuItem>
                                        </TextField>
                                        <Badge count={'+2 credits'}>
                                        <Button style={{height:'100%'}} onClick={() => summary({ article: result?.pageContent, workSpaceId: workSpaceId, totalCreditsUsed: 2 })}><FormattedMessage id="workspace-summary" /></Button>
                                        </Badge>
                                    </Box>
                                </Box>
                            </Box>

                            </Box>}
                            </Box>

                        
                       
                    ))
                }



            </Box>

        </Box>
    )
}

export default RightPane