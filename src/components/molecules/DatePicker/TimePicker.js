import { DatePicker } from 'antd'
import { useTranslation } from 'react-i18next'

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

const TimePicker = () => {
    const { t } = useTranslation()

    return (
        <div style={{ display: 'flex' }}>
            <DatePicker
                showTime={{
                    format: 'HH:mm',
                }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
                style={{ background: '#f0f0f0' }}
                suffixIcon={<span style={{ ...boldText }}>{t('check_in')}</span>}
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
                suffixIcon={<span style={{ ...boldText }}>{t("check_out")}</span>}
                placeholder=""
            />
        </div>
    )
}

export default TimePicker
