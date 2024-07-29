'use client';
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout';
import parse from 'html-react-parser';
import { Accordion, AccordionItem } from '@nextui-org/react';

const jobsPostInfo = [
  {
    id: 1,
    jobTitle: 'Technical Leads (Engineer Manager)',
    jobDesc: `
    <div>
    <h5>Are you a seasoned engineer with a passion for leadership and innovation? We&rsquo;re looking for a dynamic Technical Lead to guide our talented team and drive cutting-edge projects to success.</h5><br/>
  <h5><span style="text-decoration: underline;"><strong>About You</strong></span></h5>
  <p>🔧 Lead and mentor a team of skilled engineers&nbsp;</p>
  <p>💡 Drive technical strategy and ensure high-quality deliverables&nbsp;</p>
  <p>📈 Collaborate with cross-functional teams to innovate and solve complex problems&nbsp;</p>
  <p>⚙️ Oversee the development lifecycle from design to deployment</p>
  <p>&nbsp;</p>
  <p><span style="text-decoration: underline;"><strong>You Will:</strong></span></p>
  <p>✅ Proven experience in software engineering and team leadership &nbsp;</p>
  <p>✅ Strong technical expertise in [relevant technologies]&nbsp;</p>
  <p>✅ Excellent problem-solving and communication skills&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><span style="text-decoration: underline;">You Should Have</span>:</strong></p>
  <p>🌟 Work with a passionate and collaborative team</p>
  <p>📚 Opportunities for professional growth and development</p>
  <p>🏆 Competitive salary and benefits</p>
  <p>🚀 Be part of a company that values innovation and excellence</p>
  <p>&nbsp;</p>
  <table style="height: 72px;" width="611">
  <tbody>
  <tr>
  <td style="width: 145.75px;">&nbsp;Seniority Level</td>
  <td style="width: 145.75px;">&nbsp;Employment Type</td>
  <td style="width: 145.75px;">&nbsp;Job Function</td>
  <td style="width: 145.75px;">&nbsp;Salary</td>
  </tr>
  <tr>
  <td style="width: 145.75px;"><strong>&nbsp;Mid Level</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Full Time</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Engineering</strong></td>
  <td style="width: 180px;"><strong>&nbsp;$ 50K - $80K / Yearly</strong></td>
  </tr>
  </tbody>
  </table>
  </div>`,
  },
  {
    id: 2,
    jobTitle: 'Sr. Software Engineer (Backend)',
    jobDesc: `
    <div>
    <h5>Are you a seasoned engineer with a passion for leadership and innovation? We&rsquo;re looking for a dynamic Technical Lead to guide our talented team and drive cutting-edge projects to success.</h5><br/>
  <h5><span style="text-decoration: underline;"><strong>About You</strong></span></h5>
  <p>🔧 Lead and mentor a team of skilled engineers&nbsp;</p>
  <p>💡 Drive technical strategy and ensure high-quality deliverables&nbsp;</p>
  <p>📈 Collaborate with cross-functional teams to innovate and solve complex problems&nbsp;</p>
  <p>⚙️ Oversee the development lifecycle from design to deployment</p>
  <p>&nbsp;</p>
  <p><span style="text-decoration: underline;"><strong>You Will:</strong></span></p>
  <p>✅ Proven experience in software engineering and team leadership &nbsp;</p>
  <p>✅ Strong technical expertise in [relevant technologies]&nbsp;</p>
  <p>✅ Excellent problem-solving and communication skills&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><span style="text-decoration: underline;">You Should Have</span>:</strong></p>
  <p>🌟 Work with a passionate and collaborative team</p>
  <p>📚 Opportunities for professional growth and development</p>
  <p>🏆 Competitive salary and benefits</p>
  <p>🚀 Be part of a company that values innovation and excellence</p>
  <p>&nbsp;</p>
  <table style="height: 72px;" width="611">
  <tbody>
  <tr>
  <td style="width: 145.75px;">&nbsp;Seniority Level</td>
  <td style="width: 145.75px;">&nbsp;Employment Type</td>
  <td style="width: 145.75px;">&nbsp;Job Function</td>
  <td style="width: 145.75px;">&nbsp;Salary</td>
  </tr>
  <tr>
  <td style="width: 145.75px;"><strong>&nbsp;Mid Level</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Full Time</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Engineering</strong></td>
  <td style="width: 180px;"><strong>&nbsp;$ 50K - $80K / Yearly</strong></td>
  </tr>
  </tbody>
  </table>
  </div>`,
  },
  {
    id: 3,
    jobTitle: 'Sr. Software Engineer (React Frontend)',
    jobDesc: `
    <div>
    <h5>Are you a seasoned engineer with a passion for leadership and innovation? We&rsquo;re looking for a dynamic Technical Lead to guide our talented team and drive cutting-edge projects to success.</h5><br/>
  <h5><span style="text-decoration: underline;"><strong>About You</strong></span></h5>
  <p>🔧 Lead and mentor a team of skilled engineers&nbsp;</p>
  <p>💡 Drive technical strategy and ensure high-quality deliverables&nbsp;</p>
  <p>📈 Collaborate with cross-functional teams to innovate and solve complex problems&nbsp;</p>
  <p>⚙️ Oversee the development lifecycle from design to deployment</p>
  <p>&nbsp;</p>
  <p><span style="text-decoration: underline;"><strong>You Will:</strong></span></p>
  <p>✅ Proven experience in software engineering and team leadership &nbsp;</p>
  <p>✅ Strong technical expertise in [relevant technologies]&nbsp;</p>
  <p>✅ Excellent problem-solving and communication skills&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><span style="text-decoration: underline;">You Should Have</span>:</strong></p>
  <p>🌟 Work with a passionate and collaborative team</p>
  <p>📚 Opportunities for professional growth and development</p>
  <p>🏆 Competitive salary and benefits</p>
  <p>🚀 Be part of a company that values innovation and excellence</p>
  <p>&nbsp;</p>
  <table style="height: 72px;" width="611">
  <tbody>
  <tr>
  <td style="width: 145.75px;">&nbsp;Seniority Level</td>
  <td style="width: 145.75px;">&nbsp;Employment Type</td>
  <td style="width: 145.75px;">&nbsp;Job Function</td>
  <td style="width: 145.75px;">&nbsp;Salary</td>
  </tr>
  <tr>
  <td style="width: 145.75px;"><strong>&nbsp;Mid Level</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Full Time</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Engineering</strong></td>
  <td style="width: 180px;"><strong>&nbsp;$ 50K - $80K / Yearly</strong></td>
  </tr>
  </tbody>
  </table>
  </div>`,
  },
  {
    id: 4,
    jobTitle: 'Sr. Digital Product Designer',
    jobDesc: `
    <div>
    <h5>Are you a seasoned engineer with a passion for leadership and innovation? We&rsquo;re looking for a dynamic Technical Lead to guide our talented team and drive cutting-edge projects to success.</h5><br/>
  <h5><span style="text-decoration: underline;"><strong>About You</strong></span></h5>
  <p>🔧 Lead and mentor a team of skilled engineers&nbsp;</p>
  <p>💡 Drive technical strategy and ensure high-quality deliverables&nbsp;</p>
  <p>📈 Collaborate with cross-functional teams to innovate and solve complex problems&nbsp;</p>
  <p>⚙️ Oversee the development lifecycle from design to deployment</p>
  <p>&nbsp;</p>
  <p><span style="text-decoration: underline;"><strong>You Will:</strong></span></p>
  <p>✅ Proven experience in software engineering and team leadership &nbsp;</p>
  <p>✅ Strong technical expertise in [relevant technologies]&nbsp;</p>
  <p>✅ Excellent problem-solving and communication skills&nbsp;</p>
  <p>&nbsp;</p>
  <p><strong><span style="text-decoration: underline;">You Should Have</span>:</strong></p>
  <p>🌟 Work with a passionate and collaborative team</p>
  <p>📚 Opportunities for professional growth and development</p>
  <p>🏆 Competitive salary and benefits</p>
  <p>🚀 Be part of a company that values innovation and excellence</p>
  <p>&nbsp;</p>
  <table style="height: 72px;" width="700">
  <tbody>
  <tr>
  <td style="width: 145.75px;">&nbsp;Seniority Level</td>
  <td style="width: 145.75px;">&nbsp;Employment Type</td>
  <td style="width: 145.75px;">&nbsp;Job Function</td>
  <td style="width: 145.75px;">&nbsp;Salary</td>
  </tr>
  <tr>
  <td style="width: 145.75px;"><strong>&nbsp;Mid Level</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Full Time</strong></td>
  <td style="width: 145.75px;"><strong>&nbsp;Engineering</strong></td>
  <td style="width: 180px;"><strong>&nbsp;$ 50K - $80K / Yearly</strong></td>
  </tr>
  </tbody>
  </table>
  </div>`,
  },
];

const JobSection = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));

  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-normal text-2xl md:text-4xl text-center !leading-none`}
      >
        <strong>Jobs</strong>
      </h2>

      <p className='text-lg md:text-xl text-stone-950 text-center mt-4 max-w-[620px] mx-auto'>
        Discover rewarding career paths, innovative work environments, and the
        chance to grow with us. Find your perfect job and start making an impact
        today.
      </p>
      <div className='mx-6 md:mx-32 mt-16 '>
        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          className='border-2 shadow-lg !p-5 !md:p-10 rounded-lg text-2xl py-5 bg-white'
          // style={{ border: '1px solid red' }}
        >
          {jobsPostInfo?.map((el, index) => (
            <AccordionItem
              key={el.id}
              aria-label='Accordion 1'
              title={
                <div className='text-xl md:text-[24px] font-medium'>
                  {el.jobTitle}
                </div>
              }
              className='text-[18px] md:text-lg '
            >
              {parse(el.jobDesc)}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionLayout>
  );
};

export default JobSection;
