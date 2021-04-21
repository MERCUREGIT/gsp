import React, { Fragment } from 'react'
// import Cta from './Cta'
import Servicedetails from './Servicedetails'

export default ({page}) => {

    return (
        <Fragment>
            <Servicedetails page ={page} />
            {/* <Cta /> */}
        </Fragment>
    )
}