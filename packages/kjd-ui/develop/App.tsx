import React from 'react'
import './app.less'

import ImageWithAutoSize from '../components/ImageWithAutoSize'

export default () => {
    return <div className='body-wraper'>
        <div style={{ position: 'relative', width: 50, height: 50, borderRadius: '50%', overflow: 'hidden' }}>
            <ImageWithAutoSize src='https://tx2.a.yximgs.com/uhead/AB/2019/06/28/08/BMjAxOTA2MjgwODA2MzRfN18xX2hkODg2Xzc5NQ==_s.jpg' />
        </div>
    </div>
}