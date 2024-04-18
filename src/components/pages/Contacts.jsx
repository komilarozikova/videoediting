import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { Container } from '@mui/material';



export default function Contacts() {
  return (
    <Container sx={{textAlign:'center'}}>  
      <div>
          <section
            className=" my-5 section-container picture-section -default -round  -animated -visible"
            id="section-8400232"
          >
            <div style={{ textAlign: 'center' }}
              className="lazy-image js-lazy-image is-protected is-loaded"
              data-role="lazy-image"
              data-width={200}
              data-height={200}
              data-aspect={1.0}
            >
              <img style={{ borderRadius: '50%' }}
                alt="Контакты"
                className="lazyunload is-protected lazyautosizes lazyloaded"
                data-sizes="auto"
                data-src="https://img-s.wfolio.com/x/vzOf1YAptPkDHsVm5_3TTwl710YTO8eU/NXFMMegEmd9pvdHlkx2hVx0_Rkp4Mi1T/Pu6Eavw8VJklm32W9Lr6pNcVWzEimOgk/fD1-4RXgVv1VgP-SQUoOxitAuw4k7Q3M/GIbLOypr5mIJVOVaBn67L1Ckkh0XdMxp/j7ygob9iYvo.png"
                data-srcset="https://img-s.wfolio.com/x/vzOf1YAptPkDHsVm5_3TTwl710YTO8eU/NXFMMegEmd9pvdHlkx2hVx0_Rkp4Mi1T/Pu6Eavw8VJklm32W9Lr6pNcVWzEimOgk/fD1-4RXgVv1VgP-SQUoOxitAuw4k7Q3M/GIbLOypr5mIJVOVaBn67L1Ckkh0XdMxp/j7ygob9iYvo.png 200w"
                src="https://img-s.wfolio.com/x/vzOf1YAptPkDHsVm5_3TTwl710YTO8eU/NXFMMegEmd9pvdHlkx2hVx0_Rkp4Mi1T/Pu6Eavw8VJklm32W9Lr6pNcVWzEimOgk/fD1-4RXgVv1VgP-SQUoOxitAuw4k7Q3M/GIbLOypr5mIJVOVaBn67L1Ckkh0XdMxp/j7ygob9iYvo.png"
                sizes="200px"
                srcSet="https://img-s.wfolio.com/x/vzOf1YAptPkDHsVm5_3TTwl710YTO8eU/NXFMMegEmd9pvdHlkx2hVx0_Rkp4Mi1T/Pu6Eavw8VJklm32W9Lr6pNcVWzEimOgk/fD1-4RXgVv1VgP-SQUoOxitAuw4k7Q3M/GIbLOypr5mIJVOVaBn67L1Ckkh0XdMxp/j7ygob9iYvo.png 200w"
              />
            </div>
          </section>
      </div>
      <div
        id="section-8400132"
        className="sections-container -medium-width -top-align -xsmall-pad-before -medium-pad-after -background-default"
      >
              <section
                className=" my-5 section-container text-section -default wysiwyg -animated -visible"
                id="section-8400133"
              >
                <h1 align="center">
                  <b>MLSHV</b>
                </h1>
                <p style={{ textAlign: "center" }}>
                  Почта для связи: <b>mlshv.film@gmail.com</b>
                </p>
              </section>
      </div>
      <div
        id="section-8400138"
        className="sections-container -medium-width -top-align -no-pad-before -xsmall-pad-after -background-default"
      >
          <section
            className="section-container action-section -fill -center -animated -visible"
            id="section-8400139"
          >
            <a style={{ display: 'inline-block', width: '270px', minWidth: '140px', height: 'auto', padding: '18px 40px', overflow: 'hidden', border: '1px solid #000', borderRadius: '100px', outline: 'none', background: '#2b2b2b', letterSpacing: '0.2em', color: '#fff', fontSize: '12px', textDecoration: 'none', cursor: 'pointer' }}
              className="button -fill"
              href="https://t.me/mlshvfilm"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTelegramPlane} style={{paddingRight: '7'}} />
              Написать в&nbsp;Telegram
            </a>
          </section>
   

      </div>
      <div
        id="section-8400190"
        className="sections-container -medium-width -top-align -no-pad-before -no-pad-after -background-default"
      >
              <section
                className="my-2 section-container action-section -outline -center -animated -visible"
                id="section-8400191"
              >
                <a
                  style={{ display: 'inline-block', width: '270px', minWidth: '140px', height: 'auto', padding: '18px 40px', overflow: 'hidden', border: '1px solid #000', borderRadius: '100px', outline: 'none', letterSpacing: '0.2em', background: 'transparent', color: '#000000', fontSize: '12px', textDecoration: 'none', cursor: 'pointer' }}
                  className="button -outline"
                  href="http://instagram.com/mlshv.film"
                  target="_blank"
                >
                  ㅤ► Смотреть работыㅤ
                </a>
              </section>
      </div>
      <div
        id="section-8400161"
        className="sections-container -medium-width -top-align -medium-pad-before -no-pad-after -background-default"
      >
              <section
                className=" my-5 section-container text-section -default wysiwyg -animated -visible"
                id="section-8400162"
              >
                <p style={{ textAlign: "center" }}>
                  Малышев Илья Петрович / <b>ИНН 602718337346</b>
                </p>
              </section>
      </div>
    </Container>

  )
}
