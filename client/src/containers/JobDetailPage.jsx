import React from 'react'
import { Divider, Header, Icon } from 'semantic-ui-react'
import DataBoard from '../components/DataBoard'
import FetchComponent from '../components/FetchComponent'
import { job } from '../constants/api'

class JobDetailPage extends FetchComponent {

    getFetchAPI = (props) => {
        const { jobId } = props.match.params
        return `/job/${jobId}/info`

    }

    handleSubmit = (event) => {
        console.info(event)
    }

    render = () => {
        const jobDetail = this.state.response ? <DataBoard {...this.state.response['Data']} fieldsConfig={job.fieldsConfig} /> : "No record"
        return (
            <React.Fragment>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='tag' />
                        Description
                    </Header>
                </Divider>
                {jobDetail}
            </React.Fragment>
        )
    }
}

export default JobDetailPage