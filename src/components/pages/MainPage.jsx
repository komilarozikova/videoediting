import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function MainPage() {
    return (
        <div className="inner">
            <div
                id="section-8286429"
                className="sections-container -medium-width -top-align -medium-pad-before -medium-pad-after -background-default"
            >
                <div className="sections-container-inner" style={{ maxWidth: 'calc(100% - 24px * 2)', position: 'relative', margin: '0 auto', width: '100%', padding: '3.2em 0' }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <section
                                className="section-container text-section -default wysiwyg -animated -visible"
                                id="section-8286430"
                            >
                                <h3 style={{ textAlign: "center" }}>
                                    MLSHV <b>PACKS</b>
                                </h3>
                                <p style={{ textAlign: "center" }}>
                                    Наборы для<b>&nbsp;</b>создания <b>переходов</b>,{" "}
                                    <b>саунд-дизайна</b> и<b>&nbsp;цветокоррекции</b> (с&nbsp;
                                    <b>уроками</b> по&nbsp;использованию) на&nbsp;<b>компьютере</b>
                                    &nbsp;и&nbsp;<b>телефоне</b>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        maxWidth: 'calc(100% - 4% * 2)',
                        margin: '0 auto',
                    }}
                >
                    <Grid item xs={3}>
                        <Item sx={{ padding: '0', borderRadius: '16px', boxShadow: 'none' }}>
                            <div
                                className="col-sm-12 col-md-3"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <a className="link" href="/footages-v2">
                                    <img
                                        alt="MLSHV PACKS"
                                        className="lazyunload is-protected lazyautosizes ls-is-cached lazyloaded"
                                        data-sizes="auto"
                                        data-src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwQtnH8KoNjlhfRUpa-Z4hk/hwEY26oxM69PU7UnvPZGGs4HsmAXSWYa/VcemXlHERCE.jpg"
                                        data-srcset="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR9xg-v3fAcbMDyrSHSQthv7/hXg0MSog41qVzVDvzOCVlYrEItjvEokr/tdn5mcMuRkI.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9YzUS1nGJ1lQxTXXhMK0633/gnaatPYcwfOfAR0dRtJ3UBuUqDJ5duHX/b_Ac13FRBLw.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQS4X57Dn9Jg6AZsPYWghoSk/vVMTiWPdKW5MrP632mrwHQ5tYM7eTK0F/BqnpY58Yakw.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwQtnH8KoNjlhfRUpa-Z4hk/hwEY26oxM69PU7UnvPZGGs4HsmAXSWYa/VcemXlHERCE.jpg 960w"
                                        src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwQtnH8KoNjlhfRUpa-Z4hk/hwEY26oxM69PU7UnvPZGGs4HsmAXSWYa/VcemXlHERCE.jpg"
                                        sizes="249px"
                                        srcSet="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR9xg-v3fAcbMDyrSHSQthv7/hXg0MSog41qVzVDvzOCVlYrEItjvEokr/tdn5mcMuRkI.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9YzUS1nGJ1lQxTXXhMK0633/gnaatPYcwfOfAR0dRtJ3UBuUqDJ5duHX/b_Ac13FRBLw.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQS4X57Dn9Jg6AZsPYWghoSk/vVMTiWPdKW5MrP632mrwHQ5tYM7eTK0F/BqnpY58Yakw.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwQtnH8KoNjlhfRUpa-Z4hk/hwEY26oxM69PU7UnvPZGGs4HsmAXSWYa/VcemXlHERCE.jpg 960w"
                                        style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                                    />
                                </a>
                                <Box
                                    sx={{ padding: '30px 0' }}
                                >
                                    <Typography component='h3'
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start', paddingBottom: '10px'
                                        }}>
                                        <strong>НАБОР ФУТАЖЕЙ</strong> V2
                                    </Typography>
                                    <Typography component='p' sx={{ textAlign: 'start' }}>
                                        💳&nbsp;<strike>590₽</strike>&nbsp;&nbsp;<b>390₽</b>
                                    </Typography>
                                </Box>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ padding: '0', borderRadius: '16px', boxShadow: 'none' }}>
                            <div
                                className="col-sm-12 col-md-3"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <a className="link" href="/footages-v2">
                                    <img
                                        alt="MLSHV PACKS"
                                        className="lazyunload is-protected lazyautosizes ls-is-cached lazyloaded"
                                        data-sizes="auto"
                                        data-src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYyLH1gk_tiXNdP9JXv8FH-9/gKgvICtLJukDoPqULRqfoJoBrS1CLbD1/p_pmA-h2ePs.jpg"
                                        data-srcset="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR_RCr8hr-7YpJ614S0_Nh4K/cUicB0wl2i_EiK3CpG4j26Dqs8ChwNpE/WUJhT5SYqYo.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9ZKRTEECXn7OEcLblqNCUBJ/VNd2ycKppDsZkvZM76VxoINOk-N27lFL/ohQH5PVaMxA.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQQ_TvZOfJhebFpQsI23y2CZ/aeKcRkncXWL24uXGepNcZ4D9nSvWg6fI/q7qjpo5bx0M.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYyLH1gk_tiXNdP9JXv8FH-9/gKgvICtLJukDoPqULRqfoJoBrS1CLbD1/p_pmA-h2ePs.jpg 960w"
                                        src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYyLH1gk_tiXNdP9JXv8FH-9/gKgvICtLJukDoPqULRqfoJoBrS1CLbD1/p_pmA-h2ePs.jpg"
                                        sizes="444px"
                                        srcSet="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR_RCr8hr-7YpJ614S0_Nh4K/cUicB0wl2i_EiK3CpG4j26Dqs8ChwNpE/WUJhT5SYqYo.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9ZKRTEECXn7OEcLblqNCUBJ/VNd2ycKppDsZkvZM76VxoINOk-N27lFL/ohQH5PVaMxA.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQQ_TvZOfJhebFpQsI23y2CZ/aeKcRkncXWL24uXGepNcZ4D9nSvWg6fI/q7qjpo5bx0M.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYyLH1gk_tiXNdP9JXv8FH-9/gKgvICtLJukDoPqULRqfoJoBrS1CLbD1/p_pmA-h2ePs.jpg 960w"
                                        style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                                    />
                                </a>
                                <Box
                                    sx={{ padding: '30px 0' }}
                                >
                                    <Typography component='h3'
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start', paddingBottom: '10px'
                                        }}>
                                        <strong>НАБОР ЗВУКОВ</strong> V2
                                    </Typography>
                                    <Typography component='p' sx={{ textAlign: 'start' }}>
                                        💳&nbsp;<strike>590₽</strike>&nbsp;&nbsp;<b>390₽</b>
                                    </Typography>
                                </Box>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ padding: '0', borderRadius: '16px', boxShadow: 'none' }}>
                            <div
                                className="col-sm-12 col-md-3"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <a className="link" href="/footages-v2">
                                    <img
                                        alt="MLSHV PACKS"
                                        className="lazyunload is-protected lazyautosizes ls-is-cached lazyloaded"
                                        data-sizes="auto"
                                        data-src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwCBK79kcNxp4RSMzset62r/fOeYuTz-Z71V56kcNMfag8QaZEMI9Hj3/d33OiYlvbSI.jpg"
                                        data-srcset="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR9Icb_7jbfNgyLpBbEX3pZ4/6P-TZ2wE4SBzg6Iog4zUdPWI870wYZjv/8y0kNTPMntM.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9YGAXwdfVQWCK-1R_PVdsNh/fdp3wI369Wou0f9SmweCqUMOcTNyXfQT/KftR8_U75PY.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQS_qIjRUYUFcdqVQQEuzF-3/EUdX_jerhPwlllUpgQHfI6CR8BYt9Jco/sTb8ndl1ICI.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwCBK79kcNxp4RSMzset62r/fOeYuTz-Z71V56kcNMfag8QaZEMI9Hj3/d33OiYlvbSI.jpg 960w"
                                        src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwCBK79kcNxp4RSMzset62r/fOeYuTz-Z71V56kcNMfag8QaZEMI9Hj3/d33OiYlvbSI.jpg"
                                        sizes="444px"
                                        srcSet="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR9Icb_7jbfNgyLpBbEX3pZ4/6P-TZ2wE4SBzg6Iog4zUdPWI870wYZjv/8y0kNTPMntM.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9YGAXwdfVQWCK-1R_PVdsNh/fdp3wI369Wou0f9SmweCqUMOcTNyXfQT/KftR8_U75PY.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQS_qIjRUYUFcdqVQQEuzF-3/EUdX_jerhPwlllUpgQHfI6CR8BYt9Jco/sTb8ndl1ICI.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYwCBK79kcNxp4RSMzset62r/fOeYuTz-Z71V56kcNMfag8QaZEMI9Hj3/d33OiYlvbSI.jpg 960w"
                                        style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                                    />
                                </a>
                                <Box
                                    sx={{ padding: '30px 0' }}
                                >
                                    <Typography component='h3'
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start', paddingBottom: '10px'
                                        }}>
                                        <strong>LUTS PACK</strong>
                                    </Typography>
                                    <Typography component='p' sx={{ textAlign: 'start' }}>
                                        💳&nbsp;<strike>590₽</strike>&nbsp;&nbsp;<b>390₽</b>
                                    </Typography>
                                </Box>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ padding: '0', borderRadius: '16px', boxShadow: 'none' }}>
                            <div
                                className="col-sm-12 col-md-3"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <a className="link" href="/footages-v2">
                                    <img
                                        alt="MLSHV PACKS"
                                        className="lazyunload is-protected lazyautosizes ls-is-cached lazyloaded"
                                        data-sizes="auto"
                                        data-src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYzQgfllix-lRaDdXhLYCtkV/dldb-CvKjhxkM7-LaFtS_sYLMRCRAoaV/kZiCPLxri3Q.jpg"
                                        data-srcset="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR-rzEaXeJ_uxYu_IRRJyxGA/DAxouehI0r3Mx1Z4eIFlENoO0k8BZsRG/AX5H1MdP5SE.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9a1hQgFaAXKjEySu454MTn9/npxHUpHgqm1mPsDX3uEx1PQkKQFqP6CU/3bjUQED2SCQ.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQRk9hILQsi-iGvJGoS_ey8j/ghIInX4WEqmus0xXTYMh5TYDp5NObnl2/OcZjo5QYIts.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYzQgfllix-lRaDdXhLYCtkV/dldb-CvKjhxkM7-LaFtS_sYLMRCRAoaV/kZiCPLxri3Q.jpg 960w"
                                        src="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYzQgfllix-lRaDdXhLYCtkV/dldb-CvKjhxkM7-LaFtS_sYLMRCRAoaV/kZiCPLxri3Q.jpg"
                                        sizes="444px"
                                        srcSet="https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D0sg8p0cSCFo/7X7_Uot-yhodMx1D4MlydGFZ_6gRdaoR/_Duhisck8zdnZ9qfDYZ3pORwsvjOKkpt/rqlH-MPdmR-rzEaXeJ_uxYu_IRRJyxGA/DAxouehI0r3Mx1Z4eIFlENoO0k8BZsRG/AX5H1MdP5SE.jpg 320w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D3VU_3wL_Itb/DVwBBsXZ0VryI4trT4fQoPJ4eselgeMn/5WNWj4UnD1gymdBzq1bykHqEZaHZmwaq/EM1fjCqan9a1hQgFaAXKjEySu454MTn9/npxHUpHgqm1mPsDX3uEx1PQkKQFqP6CU/3bjUQED2SCQ.jpg 480w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6DyA7kK-9u94D/3K2wdcc4BrnYbsq5UgOp1-WWmPu_zdfE/XROLUNWE2HKTRTNE-Pr_oM_kB3OlKQ2s/Z2F9DYV3FQRk9hILQsi-iGvJGoS_ey8j/ghIInX4WEqmus0xXTYMh5TYDp5NObnl2/OcZjo5QYIts.jpg 640w, https://img-s.wfolio.com/x/YJzvsCqthX-D3-DHuXP6D2f0rYixTokR/SdH-MMipGWhSDakY-NJrTV8-HgDfFyGs/uSxqhXF_x_Yx3mahtDH-B3oY7SDKXcTT/mnlbZ6TyFYzQgfllix-lRaDdXhLYCtkV/dldb-CvKjhxkM7-LaFtS_sYLMRCRAoaV/kZiCPLxri3Q.jpg 960w"
                                        style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                                    />
                                </a>
                                <Box
                                    sx={{ padding: '30px 0' }}
                                >
                                    <Typography component='h3'
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start', paddingBottom: '10px'
                                        }}>
                                        <b>ВСЕ НАБОРЫ&nbsp;</b>
                                        <i>(ФУТАЖИ, ЗВУКИ, LUТЫ)</i>
                                    </Typography>
                                    <Typography component='p' sx={{ textAlign: 'start' }}>
                                        💳&nbsp;<strike>590₽</strike>&nbsp;&nbsp;<b>390₽</b>
                                    </Typography>
                                </Box>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{background: '#000', height: '300px', display: 'flex', alignItems: 'center'}}>
                <div className="container">
                    <div className="box1 ">
                    <section className="section-container text-section -default wysiwyg " id="section-9302751"><h3 style={{textAlign: 'center', color: '#fff'}}><b>FREE SAMPLE PACK</b></h3><p style={{textAlign: 'center' , color: '#fff'}}>Бесплатный пробный набор с&nbsp;футажами, звуками и&nbsp;LUТами для цветокоррекции.</p></section>
                    </div>
                    <Box className="box3" sx={{textAlign: 'center', pt: 3}}>
                        <section classNAme="section-container action-section -fill -center" id="section-9302753"><Button name="button" type="button" data-url="/forms/orders/new/40700?locale=ru&amp;page_id=1697000"  sx={{borderRadius: '100px', background: '#fff', p: 3, color: '#252525', '&:hover': {
                            background: '#fff'
                        } }}>📥 СКАЧАТЬ ПРОБНЫЙ НАБОР</Button></section>
                    </Box>
                </div>
            </Box>

        </div>

    )
}

export default MainPage;
