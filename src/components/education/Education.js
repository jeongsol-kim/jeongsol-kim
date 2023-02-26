import {Card} from "@mui/material"
import {Component, Fragment} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EducationBlock  = () => (
    <section className="section">
        <div className="container is-max-desktop">
            <div className="columns is-centered has-text-centered">
                <div className="column is-four-fifths">
                    <Card>
                        <h4 className="subtitle left">
                            Education
                        </h4>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                                date="2015-2020"
                                iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}
                                >
                                <h3 className="vertical-timeline-element-title">
                                    B.S / Bio and Brain Engineering
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Korea Advanced Inst. of Science and Technology (KAIST)
                                </h4>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                                date="2020-2022"
                                iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}
                                >
                                <h3 className="vertical-timeline-element-title">
                                    M.S / Bio and Brain Engineering
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Korea Advanced Inst. of Science and Technology (KAIST)
                                </h4>
                                <p>Supervisor: Prof. Jong Chul Ye</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                                contentArrowStyle={{borderRight: '7px solid rgb(33, 150, 243)'}}
                                date="2022 - present"
                                iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}
                                >
                                <h3 className="vertical-timeline-element-title">
                                    Ph.D candidate / Bio and Brain Engineering
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Korea Advanced Inst. of Science and Technology (KAIST)
                                </h4>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
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