import { DatePicker } from 'antd'
import classes from './TimePicker.module.css'

const { RangePicker } = DatePicker
const onChange = (value, dateString) => {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
}

const onOk = (value) => {
    console.log('onOk: ', value)
}

const boldText = {
    fontWeight: 'bold',
}

const TimePicker = () => (
    <div style={{ display: 'flex' }} className={classes.time_picker}>
        <DatePicker
            showTime={{
                format: 'HH:mm',
            }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
            style={{ background: '#f0f0f0' }}
            suffixIcon={<span style={{ ...boldText }}>Check in</span>}
            placeholder=""
        />
        <span style={{ width: '12px' }} />
        <DatePicker
            showTime={{
                format: 'HH:mm',
            }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
            style={{ background: '#f0f0f0' }}
            suffixIcon={<span style={{ ...boldText }}>Check out</span>}
            placeholder=""
        />
    </div>
)

export default TimePicker
