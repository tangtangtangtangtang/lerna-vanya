import React from 'react'
import { Checkbox } from 'antd'

export default ({ value, onChange }) => {
    return (
        <Checkbox.Group value={value} onChange={onChange}>
            <Checkbox value={123}>123</Checkbox>
        </Checkbox.Group>
    )
}