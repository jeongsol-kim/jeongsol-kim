import {Card} from "@mui/material"
import {Component, Fragment} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';


const TimeLine = () => (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
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
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
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
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bio and Brain Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">B.S</h4>
    <p>
      Korea Advanced Inst. of Science and Technology (KAIST)
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>    
)

const EducationBlock  = () => (
    <section className="section">
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
)

export default class Education extends Component{
    render(){
        return (
            <Fragment>
                <EducationBlock />
            </Fragment>
        )
    }
}