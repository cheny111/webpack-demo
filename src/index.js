/*
 * @功能: file content
 * @作者: 陈双月
 * @Date: 2021-10-28 22:47:51
 */

import _ from 'lodash'

function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    return element
}
document.body.appendChild(component())