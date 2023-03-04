import {Card} from "@mui/material";
import {forwardRef, Fragment} from "react";


const AwardBlock = forwardRef((props, ref) => (
    <section className="section" ref={ref}>
        <div className="container is-max-desktop">
            <div className="columns is-centered has-text-centered">
                <div className="column is-four-fifths">
                    <Card>
                        <h2 style={{margin: '1em 1em', textAlign:'left'}}>
                            Honors & Awards
                        </h2>
                    </Card>
                </div>
            </div>
        </div>
    </section>
));

const Awards = forwardRef((props, ref) => {
    return (
        <Fragment>
            <AwardBlock ref={ref} />
        </Fragment>
    );
});

export default Awards;