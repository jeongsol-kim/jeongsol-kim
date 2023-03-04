import {Card} from "@mui/material"
import {forwardRef, Fragment} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';


const TimeLine = () => (
    <VerticalTimeline
      layout="1-column-left"
      lineColor="#BBBBBB">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#03C988', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #03C988' }}
        date="2022 - present"
        iconStyle={{ background: '#03C988', color: '#fff' }}
        icon={<SchoolIcon />}
        position="right"
      >
        <h3 className="vertical-timeline-element-title">Bio and Brain Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">Ph.D candidate</h4>
        <p>
          Korea Advanced Inst. of Science and Technology (KAIST)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2022"
        iconStyle={{ background: '#BBBBBB', color: '#fff' }}
        icon={<SchoolIcon />}
        position="right"
      >
        <h3 className="vertical-timeline-element-title">Bio and Brain Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">M.S</h4>
        <p>
          Korea Advanced Inst. of Science and Technology (KAIST)
        </p>
        <p>
            Supervisor: Jong Chul Ye
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2020"
        iconStyle={{ background: '#BBBBBB', color: '#fff' }}
        icon={<SchoolIcon />}
        position="right"
      >
        <h3 className="vertical-timeline-element-title">Bio and Brain Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">B.S (Magna Cum Laude)</h4>
        <p>
          Korea Advanced Inst. of Science and Technology (KAIST)
        </p>
      </VerticalTimelineElement>
</VerticalTimeline>    
)

const EducationBlock = forwardRef((props, ref) => (
    <section className="section" ref={ref}>
        <div className="container is-max-desktop">
            <div className="columns is-centered has-text-centered">
                <div className="column is-four-fifths">
                    <Card>
                        <h2 style={{margin: '1em 1em', textAlign:'left'}}>
                            Education
                        </h2>
                        <TimeLine />
                    </Card>
                </div>
            </div>
        </div>
    </section>
))


const Education = forwardRef((props, ref) => {
  return (
    <Fragment>
        <EducationBlock ref={ref}/>
    </Fragment>
  );
})

export default Education;