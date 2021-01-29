import React from "react"
import ReactDom from 'react-dom'

import Counter from './components/Counter.jsx'
import Test from './components/TestReceiveProps.jsx'

// ReactDom.render(<div>
//     <Counter initCount={3}></Counter>
//     {/* <hr/>
//     <Counter initCount={9}></Counter>
//     <hr/>
//     <Counter></Counter>
//     <hr/>
//     <Counter initCount={'无效的数据类型'}></Counter> */}
//     </div>, document.getElementById("app0"))

ReactDom.render(<div>
        <Test></Test>
    </div>, document.getElementById("app0"))