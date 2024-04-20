import { Box, Container, Grid, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import React from 'react'



function Zvuki() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>       
             <Box className='container' sx={{width: {xs: '93%', sm: '95%' , md: '50%', }}}>
            <div className="col-sm-12">
                <section>
                    <ul style={{ padding: '0', paddingBottom: '1.5rem' , paddingTop: '1.5rem'}}>
                        <li style={{ listStyle: 'none' }}>
                            -  🎬 ПОЛНЫЙ НАБОР&nbsp;<b>ФУТАЖЕЙ, ЗВУКОВ И&nbsp;LUTS</b>

                        </li>
                    </ul>
                    <h1 style={{paddingBottom: '1rem'}}><b>ZVUKI</b></h1>
                    <p>3 набора: <b>футажи</b> для создания пленочного лука и&nbsp;переходов,&nbsp;<b>звуки</b> для саунд-дизайна&nbsp;и&nbsp;<b>LUТы</b>&nbsp;для цветокоррекции.</p>
                </section>
                <Grid container>
                    <Grid item xs={12}>
                        <img
                            alt="Sfx Pack v2"
                            className="lazyunload is-protected lazyautosizes lazyloaded"
                            data-sizes="auto"
                            data-src="//img-s.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43fW6LwNVx07A/uFZCjLs3Z25DLrb4vYk_FsM8Jy9DUslJ/y8THpblP1OOr3-tpXlf3vmgiq0OSJ-pY/2YHx39mGj1DgJYPEho0b66Ejx8d2wBhl/y0SgRiStulKeo_3Yl6QlEw.jpg"
                            data-srcset="//img-s.wfolio.com/x/u2udqsi1GtvWxPCA_p9YJ0Zp_TsbQh_O/yqgtzOSLt2iAszJNfbbTKAeE9vbvvu4o/gU_CNZNWG6oP99D_HnjhDu65YrkxQgkR/qrtZchMaFnMk2mHTAK9uhvrJK1vx-kbV/1PG4CqUwZI9heYo00GqfkA.jpg 280w, //img-s.wfolio.com/x/a9H5YtXA9lF_icWO127aB--TdaHrkjYZ/Bp7xUUSkqeoPs9A3PQToXM14acDgocVz/uhhaXNmhXY0kFtXKUn1X8hjd4K5gzmH3/tuTyohoy0SKHzwd99TqmbqaJ5YbRgmNZ/jpACf-1JiCqnENyo23Vnpw.jpg 440w, //img-s.wfolio.com/x/qXBFyKyoT-Wvta6bHxG91Bt7gdLhZnw0/GP6SOuQ9m-26MuBOh1lJjb91mxymxzbM/AF8N1ZzZUw8tzaN0Kc1x3OXpjEd9uD-t/XROhFfgFZJDp2WM60qBtJR0DLTqddsCO/KbhGN7G-lAxLQHInasucMQ.jpg 600w, //img-s.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43fW6LwNVx07A/uFZCjLs3Z25DLrb4vYk_FsM8Jy9DUslJ/y8THpblP1OOr3-tpXlf3vmgiq0OSJ-pY/2YHx39mGj1DgJYPEho0b66Ejx8d2wBhl/y0SgRiStulKeo_3Yl6QlEw.jpg 1240w"
                            src="//img-s.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43fW6LwNVx07A/uFZCjLs3Z25DLrb4vYk_FsM8Jy9DUslJ/y8THpblP1OOr3-tpXlf3vmgiq0OSJ-pY/2YHx39mGj1DgJYPEho0b66Ejx8d2wBhl/y0SgRiStulKeo_3Yl6QlEw.jpg"
                            sizes="712px"
                            srcSet="//img-s.wfolio.com/x/u2udqsi1GtvWxPCA_p9YJ0Zp_TsbQh_O/yqgtzOSLt2iAszJNfbbTKAeE9vbvvu4o/gU_CNZNWG6oP99D_HnjhDu65YrkxQgkR/qrtZchMaFnMk2mHTAK9uhvrJK1vx-kbV/1PG4CqUwZI9heYo00GqfkA.jpg 280w, //img-s.wfolio.com/x/a9H5YtXA9lF_icWO127aB--TdaHrkjYZ/Bp7xUUSkqeoPs9A3PQToXM14acDgocVz/uhhaXNmhXY0kFtXKUn1X8hjd4K5gzmH3/tuTyohoy0SKHzwd99TqmbqaJ5YbRgmNZ/jpACf-1JiCqnENyo23Vnpw.jpg 440w, //img-s.wfolio.com/x/qXBFyKyoT-Wvta6bHxG91Bt7gdLhZnw0/GP6SOuQ9m-26MuBOh1lJjb91mxymxzbM/AF8N1ZzZUw8tzaN0Kc1x3OXpjEd9uD-t/XROhFfgFZJDp2WM60qBtJR0DLTqddsCO/KbhGN7G-lAxLQHInasucMQ.jpg 600w, //img-s.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43fW6LwNVx07A/uFZCjLs3Z25DLrb4vYk_FsM8Jy9DUslJ/y8THpblP1OOr3-tpXlf3vmgiq0OSJ-pY/2YHx39mGj1DgJYPEho0b66Ejx8d2wBhl/y0SgRiStulKeo_3Yl6QlEw.jpg 1240w"
                            style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <section style={{padding: '3rem 0'}}>
                    <p>
                        <b>ВКЛЮЧАЕТ В&nbsp;СЕБЯ</b>
                    </p>
                    <p>
                        —Более 100 звуков burn, rise, woosh, flash, paper, atmospherе, vhs
                        и&nbsp;др.
                    </p>
                    <p>—&nbsp;Готовые переходы (combo) из&nbsp;нескольких звуков</p>
                    <p>—&nbsp;Уроки по&nbsp;использованию данного набора</p>
                </section>
                <Box sx={{ py: 3 , paddingBottom: '3rem'}}>
                    <p style={{ textAlign: "left" }}>
                        <b>ПОДХОДИТ&nbsp;ДЛЯ</b>
                    </p>
                    <Grid container sx={{ paddingLeft: '3rem' }}>
                        <Grid item xs={12}>
                            <img
                                alt="Sfx Pack v2"
                                className="lazyunload is-protected lazyautosizes lazyloaded"
                                data-sizes="auto"
                                data-src="https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rQlzpsFpXCbj/35QTrwB90BkhE31Mi0ib0aAQuBnxFMtF/i7utERPZH9jWPrBncF_9HidCjUljqxjZ/_J7lkM2vtl_h0VIw0vi_Rcp9GtrA0KcJ/VaHO9R2rNA7zLZS3RV9OjTXNjgRwKABN/kI9ElCF47xU.png"
                                data-srcset="https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rRVokP315ryX/8UyXyQOUbtfyU3wrWBQhcFa5jCqj2LcE/v3Lom2Ml78ZMqTxKkfiwRHmfj2VPbhJw/VcxEgrp6RwnhkgRLZbHCoPsVNo_8UjSL/myJFZz3f1EZVT07lAGkiEOUnkXacJqan/y8nzjuGQ-ZI.png 320w, https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rW4jJgGT7hRR/vCbHn-3_bcZQIrIzlVQFHf22liDEKFF4/zgsV0RBPZp013XWyWYHfyq8Qhy0o7oWk/zCta8CtU3WoB-kscB7YRaJBnqZjKEslx/QYMcf18or7ka30vsvWQk-8nuBbK-XOMu/1_KonjPilaU.png 480w, https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rQlzpsFpXCbj/35QTrwB90BkhE31Mi0ib0aAQuBnxFMtF/i7utERPZH9jWPrBncF_9HidCjUljqxjZ/_J7lkM2vtl_h0VIw0vi_Rcp9GtrA0KcJ/VaHO9R2rNA7zLZS3RV9OjTXNjgRwKABN/kI9ElCF47xU.png 587w"
                                src="https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rQlzpsFpXCbj/35QTrwB90BkhE31Mi0ib0aAQuBnxFMtF/i7utERPZH9jWPrBncF_9HidCjUljqxjZ/_J7lkM2vtl_h0VIw0vi_Rcp9GtrA0KcJ/VaHO9R2rNA7zLZS3RV9OjTXNjgRwKABN/kI9ElCF47xU.png"
                                sizes="587px"
                                srcSet="https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rRVokP315ryX/8UyXyQOUbtfyU3wrWBQhcFa5jCqj2LcE/v3Lom2Ml78ZMqTxKkfiwRHmfj2VPbhJw/VcxEgrp6RwnhkgRLZbHCoPsVNo_8UjSL/myJFZz3f1EZVT07lAGkiEOUnkXacJqan/y8nzjuGQ-ZI.png 320w, https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rW4jJgGT7hRR/vCbHn-3_bcZQIrIzlVQFHf22liDEKFF4/zgsV0RBPZp013XWyWYHfyq8Qhy0o7oWk/zCta8CtU3WoB-kscB7YRaJBnqZjKEslx/QYMcf18or7ka30vsvWQk-8nuBbK-XOMu/1_KonjPilaU.png 480w, https://img-s.wfolio.com/x/zhvKyN9TzF8xw5S9jqF3rQlzpsFpXCbj/35QTrwB90BkhE31Mi0ib0aAQuBnxFMtF/i7utERPZH9jWPrBncF_9HidCjUljqxjZ/_J7lkM2vtl_h0VIw0vi_Rcp9GtrA0KcJ/VaHO9R2rNA7zLZS3RV9OjTXNjgRwKABN/kI9ElCF47xU.png 587w"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Grid>
                    </Grid>


                </Box>
            </div>
        </Box>
            <Box sx={{ background: '#000' }}>

                <section>
                    <h3 style={{ textAlign: "center", color: '#fff', paddingTop: '3.2em' }}>
                        СТОИМОСТЬ ― <b>290₽</b>
                    </h3>
                </section>

                <section
                    style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '3.2em' }}
                >
                    <button
                        style={{ display: 'inline-block', width: '100%', maxWidth: '290px', minWidth: '140px', height: 'auto', padding: '18px 40px', overflow: 'hidden', border: '1px solid #000', borderRadius: '100px', outline: 'none', background: '#ffffff', letterSpacing: '0.2em', color: '#000000', fontSize: '12px', textDecoration: 'none', cursor: 'pointer' }}
                        name="button"
                        type="button"
                        data-url="/forms/orders/new/35794?locale=ru&page_id=1697064"
                        className="js-order-trigger button -fill"
                    >
                        <FontAwesomeIcon icon={faCreditCard} style={{ paddingRight: '7px' }} />
                        ПРИОБРЕСТИ В&nbsp;1 КЛИК
                    </button>
                </section>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '50%' },
                        marginRight: { xs: '0px', sm: '0px', md: '12rem', lg: '12rem' }
                    }}
                    style={{
                        position: 'absolute',
                        height: 'auto',
                        right: '0'
                    }}>
                    <Accordion sx={{ boxShadow: 'none', border: 'none' }}
                        expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <h4>Где найти уроки?</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            -  Уроки по&nbsp;использованию наборов и&nbsp;монтажу можно
                            посмотреть в&nbsp;разделе&nbsp;
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', border: 'none' }}
                        expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <h4>Не проходит оплата 💳</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            -  Иногда оплата зарубежными картами (Казахстан, рузия, страны
                            Европы и&nbsp;др.) может не&nbsp;проходить. Тогда
                            вы&nbsp;можете приобрести все те&nbsp;же наборы в&nbsp;моем
                            профиле&nbsp;
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', border: 'none' }}
                        expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <h4>Отзывы</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            - Смотреть отзывы
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: 'none', border: 'none' }}
                        expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <h4>Обновление набора</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            -      Набор периодически обновляется (повторная покупкадоступа
                            для этого не&nbsp;требуется). Новые файлы автоматически
                            станут доступны по&nbsp;имеющейся у&nbsp;вас ссылке
                            на&nbsp;диск.
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        <div style={{ background: '#000'}}>
        <div className='container' style={{width: '92%'}}>
                <section                >
                    <h3 style={{ textAlign: "center", paddingBottom: '3rem' , paddingTop: '3rem', color: '#fff'}}>
                        <b>СМОТРИТЕ ТАКЖЕ:</b>
                    </h3>
                </section>
                <Box sx={{ width: '100%', paddingBottom: '3rem' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                            <img
                            width="100%" height="100%" 
                                                alt="Sfx Pack v2"
                                             
                                                data-sizes="auto"
                                                data-src="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WoyIGJBnb7_SyQuHDb_JfD/IWaverf8UN_fUb7kmnbRglPge5B-3KMi/0SIjjMcpwmk.jpg"
                                                data-srcset="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uztNdZHdJ-Vg1/bSwLCL4vgSyIKv7GdrPaJc62Pm5Jcp5J/I7zLesSI4CdvEH4PJspx50607focbEAh/pA0aFMP5IMVoroLwceU-AzLTH5qYO99l/2b0T6A-FEVlXtY6jaMnRFItRr2NXVRuB/knRpi5epNbw.jpg 320w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzqGs97sYhSf6/VW_YSyAl-efxwWwcQU2qkt9CWgoHL1He/x-_W1XmE7MsC5lTdXPCSExIhasGw1dJ7/C0R0OJHeN03qcKV12rnDo9m3X0iMF56L/ks6DilnkZ5NL959PzLMwDAEOGBRgsuK6/x8nVTBdYkRY.jpg 480w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzoVFd17hC3uw/7DbGHdL_uhzEz-sz72WA3LwEMNQiafWg/_MbyPFlVa25Lo_5tIoaf97Z9E3roLQOc/cKztrhMij1fC0cJ1XSM5D-8J1-vQ2YD-/6jxmOaPLWO9Xn-7UpPyZYSQ6pSyDEJf5/yvIo1xrODSY.jpg 640w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WoyIGJBnb7_SyQuHDb_JfD/IWaverf8UN_fUb7kmnbRglPge5B-3KMi/0SIjjMcpwmk.jpg 960w"
                                                src="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WoyIGJBnb7_SyQuHDb_JfD/IWaverf8UN_fUb7kmnbRglPge5B-3KMi/0SIjjMcpwmk.jpg"
                                                sizes="348px"
                                                srcSet="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uztNdZHdJ-Vg1/bSwLCL4vgSyIKv7GdrPaJc62Pm5Jcp5J/I7zLesSI4CdvEH4PJspx50607focbEAh/pA0aFMP5IMVoroLwceU-AzLTH5qYO99l/2b0T6A-FEVlXtY6jaMnRFItRr2NXVRuB/knRpi5epNbw.jpg 320w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzqGs97sYhSf6/VW_YSyAl-efxwWwcQU2qkt9CWgoHL1He/x-_W1XmE7MsC5lTdXPCSExIhasGw1dJ7/C0R0OJHeN03qcKV12rnDo9m3X0iMF56L/ks6DilnkZ5NL959PzLMwDAEOGBRgsuK6/x8nVTBdYkRY.jpg 480w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzoVFd17hC3uw/7DbGHdL_uhzEz-sz72WA3LwEMNQiafWg/_MbyPFlVa25Lo_5tIoaf97Z9E3roLQOc/cKztrhMij1fC0cJ1XSM5D-8J1-vQ2YD-/6jxmOaPLWO9Xn-7UpPyZYSQ6pSyDEJf5/yvIo1xrODSY.jpg 640w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WoyIGJBnb7_SyQuHDb_JfD/IWaverf8UN_fUb7kmnbRglPge5B-3KMi/0SIjjMcpwmk.jpg 960w"
                                            />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                            <img
                            width="100%" height="100%" 
                                            alt="Sfx Pack v2"
                                            className="lazyunload is-protected lazyautosizes lazyloaded"
                                            data-sizes="auto"
                                            data-src="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WsK4Cucqeu6eh8weNv5fcg/JgzRVoRiLFNSZF5AmVZRkj8VxlxxchGa/c4tYfsX25kU.jpg"
                                            data-srcset="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uztNdZHdJ-Vg1/bSwLCL4vgSyIKv7GdrPaJc62Pm5Jcp5J/I7zLesSI4CdvEH4PJspx50607focbEAh/pA0aFMP5IMUpWu2M30T4BQ3l0vZsXKM9/6NNdmW3AwhehvNGtRlE3S5XkW-a_UzDf/Bop6dU994s0.jpg 320w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzqGs97sYhSf6/VW_YSyAl-efxwWwcQU2qkt9CWgoHL1He/x-_W1XmE7MsC5lTdXPCSExIhasGw1dJ7/C0R0OJHeN00VqU4FhvY1I_N4blwsBN32/nlN31wnXf4fMsiMWYyE7fFjItTtZ4I56/GrwpSyqtuMU.jpg 480w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzoVFd17hC3uw/7DbGHdL_uhzEz-sz72WA3LwEMNQiafWg/_MbyPFlVa25Lo_5tIoaf97Z9E3roLQOc/cKztrhMij1flKoxLcvFgi7GF8EJhVbXo/19Vs4Vtkt4Y2EjM3om_UBbNz4zPNIZHK/UZGsROS6XCI.jpg 640w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WsK4Cucqeu6eh8weNv5fcg/JgzRVoRiLFNSZF5AmVZRkj8VxlxxchGa/c4tYfsX25kU.jpg 960w"
                                            src="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WsK4Cucqeu6eh8weNv5fcg/JgzRVoRiLFNSZF5AmVZRkj8VxlxxchGa/c4tYfsX25kU.jpg"
                                            sizes="348px"
                                            srcSet="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uztNdZHdJ-Vg1/bSwLCL4vgSyIKv7GdrPaJc62Pm5Jcp5J/I7zLesSI4CdvEH4PJspx50607focbEAh/pA0aFMP5IMUpWu2M30T4BQ3l0vZsXKM9/6NNdmW3AwhehvNGtRlE3S5XkW-a_UzDf/Bop6dU994s0.jpg 320w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzqGs97sYhSf6/VW_YSyAl-efxwWwcQU2qkt9CWgoHL1He/x-_W1XmE7MsC5lTdXPCSExIhasGw1dJ7/C0R0OJHeN00VqU4FhvY1I_N4blwsBN32/nlN31wnXf4fMsiMWYyE7fFjItTtZ4I56/GrwpSyqtuMU.jpg 480w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzoVFd17hC3uw/7DbGHdL_uhzEz-sz72WA3LwEMNQiafWg/_MbyPFlVa25Lo_5tIoaf97Z9E3roLQOc/cKztrhMij1flKoxLcvFgi7GF8EJhVbXo/19Vs4Vtkt4Y2EjM3om_UBbNz4zPNIZHK/UZGsROS6XCI.jpg 640w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236WsK4Cucqeu6eh8weNv5fcg/JgzRVoRiLFNSZF5AmVZRkj8VxlxxchGa/c4tYfsX25kU.jpg 960w"
                                        />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                            <img
                            width="100%" height="100%" 
                                            alt="Sfx Pack v2"
                                            className="lazyunload is-protected lazyautosizes lazyloaded"
                                            data-sizes="auto"
                                            data-src="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236Vofv54vdq2SE_tsWYYZahv/V5HtA15a9RCNXPITHai3tezE3D3zWGDB/r8iwhhkAuB0.jpg"
                                            data-srcset="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uztNdZHdJ-Vg1/bSwLCL4vgSyIKv7GdrPaJc62Pm5Jcp5J/I7zLesSI4CdvEH4PJspx50607focbEAh/pA0aFMP5IMXfF1JoiH1vt33qiTYB6bYF/r2hHoQssxE9NAlVYpEn_xNIQNjAFMjKg/JwIuiC0INCU.jpg 320w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzqGs97sYhSf6/VW_YSyAl-efxwWwcQU2qkt9CWgoHL1He/x-_W1XmE7MsC5lTdXPCSExIhasGw1dJ7/C0R0OJHeN03fCNauTvTe8BFgti_un_wr/VA2PDgv-6YFGNQ6z4XMH_D7E0qSx7Dnn/ot03qz0dVHc.jpg 480w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzoVFd17hC3uw/7DbGHdL_uhzEz-sz72WA3LwEMNQiafWg/_MbyPFlVa25Lo_5tIoaf97Z9E3roLQOc/cKztrhMij1eE0QDeK6LlwIYkEXpfUOl3/sNKqLZoWe3OYDdGwv49D5P_DF-qEwl4W/iD0Erduugys.jpg 640w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236Vofv54vdq2SE_tsWYYZahv/V5HtA15a9RCNXPITHai3tezE3D3zWGDB/r8iwhhkAuB0.jpg 960w"
                                            src="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236Vofv54vdq2SE_tsWYYZahv/V5HtA15a9RCNXPITHai3tezE3D3zWGDB/r8iwhhkAuB0.jpg"
                                            sizes="348px"
                                            srcSet="https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uztNdZHdJ-Vg1/bSwLCL4vgSyIKv7GdrPaJc62Pm5Jcp5J/I7zLesSI4CdvEH4PJspx50607focbEAh/pA0aFMP5IMXfF1JoiH1vt33qiTYB6bYF/r2hHoQssxE9NAlVYpEn_xNIQNjAFMjKg/JwIuiC0INCU.jpg 320w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzqGs97sYhSf6/VW_YSyAl-efxwWwcQU2qkt9CWgoHL1He/x-_W1XmE7MsC5lTdXPCSExIhasGw1dJ7/C0R0OJHeN03fCNauTvTe8BFgti_un_wr/VA2PDgv-6YFGNQ6z4XMH_D7E0qSx7Dnn/ot03qz0dVHc.jpg 480w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzoVFd17hC3uw/7DbGHdL_uhzEz-sz72WA3LwEMNQiafWg/_MbyPFlVa25Lo_5tIoaf97Z9E3roLQOc/cKztrhMij1eE0QDeK6LlwIYkEXpfUOl3/sNKqLZoWe3OYDdGwv49D5P_DF-qEwl4W/iD0Erduugys.jpg 640w, https://img-s.wfolio.com/x/nX2nC7Qn_VgXknGPwg-uzgnplU_dWPRV/Gw2OI9Rl-4HpRcIJV_Uq4hKaIu9NJtwa/YhnXPMpk-ROqb1Mz2WRkzG71lqMPC86F/D_T8oQM236Vofv54vdq2SE_tsWYYZahv/V5HtA15a9RCNXPITHai3tezE3D3zWGDB/r8iwhhkAuB0.jpg 960w"
                                        />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
               
            </div>
        </div>
        </div>


    )
}

export default Zvuki